/**
 * Small progressive enhancements — the site works without JavaScript.
 * Appearance menu, scroll reveals, the company filter, slide galleries,
 * the iPhone lock-screen loop, and external article links in a new tab.
 */

declare global {
  interface Window {
    __applyTheme?: () => void;
  }
}

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

/* ---------- Appearance menu (System / Light / Dark) ---------- */
function setupThemeMenu() {
  const menu = $('[data-theme-menu]');
  if (!menu) return;
  const trigger = $<HTMLButtonElement>('[data-menu-trigger]', menu)!;
  const popover = $('[role="menu"]', menu)!;
  const options = $$<HTMLButtonElement>('[data-theme-option]', menu);

  const syncChecks = () => {
    const pref = document.documentElement.dataset.themePref ?? 'system';
    options.forEach((o) => o.setAttribute('aria-checked', String(o.dataset.themeOption === pref)));
  };

  const open = () => {
    syncChecks();
    popover.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    (options.find((o) => o.getAttribute('aria-checked') === 'true') ?? options[0])?.focus();
  };

  const close = (focusTrigger = false) => {
    popover.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (focusTrigger) trigger.focus();
  };

  trigger.addEventListener('click', () => (popover.hidden ? open() : close()));

  options.forEach((option) =>
    option.addEventListener('click', () => {
      const value = option.dataset.themeOption!;
      try {
        if (value === 'system') localStorage.removeItem('theme');
        else localStorage.setItem('theme', value);
      } catch {
        /* private mode: remember for this page only */
      }
      document.documentElement.dataset.themePref = value;
      window.__applyTheme?.();
      syncChecks();
      close(true);
    }),
  );

  popover.addEventListener('keydown', (e) => {
    const i = options.indexOf(document.activeElement as HTMLButtonElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      options[(i + 1) % options.length].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      options[(i - 1 + options.length) % options.length].focus();
    } else if (e.key === 'Escape') {
      close(true);
    } else if (e.key === 'Tab') {
      close();
    }
  });

  document.addEventListener('click', (e) => {
    if (!popover.hidden && !menu.contains(e.target as Node)) close();
  });
}

/* ---------- Scroll reveal ---------- */
function setupReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- Company filter (segmented control on the Portfolio page) ---------- */
function setupCompanyFilter() {
  const group = $('[data-filter-group]');
  if (!group) return;
  const buttons = $$<HTMLButtonElement>('[data-filter]', group);
  const blocks = $$<HTMLElement>('[data-company]');

  const apply = (value: string) => {
    buttons.forEach((b) => b.setAttribute('aria-checked', String(b.dataset.filter === value)));
    blocks.forEach((block) => {
      const show = value === 'all' || block.dataset.company === value;
      block.hidden = !show;
      if (show) {
        block.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
        block.animate?.(
          [
            { opacity: 0, transform: 'translateY(8px)' },
            { opacity: 1, transform: 'none' },
          ],
          { duration: 320, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' },
        );
      }
    });
  };

  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter!)));

  group.addEventListener('keydown', (e) => {
    const i = buttons.indexOf(document.activeElement as HTMLButtonElement);
    if (i < 0) return;
    let next = -1;
    if (e.key === 'ArrowRight') next = (i + 1) % buttons.length;
    if (e.key === 'ArrowLeft') next = (i - 1 + buttons.length) % buttons.length;
    if (next >= 0) {
      e.preventDefault();
      buttons[next].focus();
      apply(buttons[next].dataset.filter!);
    }
  });
}

/* ---------- Slide galleries ---------- */
function enhanceMarkdownGalleries() {
  // Markdown galleries are <div class="gallery"><p><img>…</p></div>; give them the same controls.
  $$('.prose .gallery').forEach((gallery) => {
    const track = $(':scope > p', gallery);
    if (!track || gallery.hasAttribute('data-gallery')) return;
    const count = $$('img', track).length;
    gallery.setAttribute('data-gallery', '');
    track.setAttribute('data-gallery-track', '');
    track.tabIndex = 0;
    track.setAttribute('role', 'region');
    track.setAttribute('aria-label', 'Slides');
    const controls = document.createElement('div');
    controls.className = 'gallery-controls';
    controls.setAttribute('data-gallery-controls', '');
    controls.hidden = true;
    controls.innerHTML = `
      <span class="gallery-count" data-gallery-count aria-live="polite">1 / ${count}</span>
      <div class="gallery-buttons">
        <button type="button" data-gallery-prev aria-label="Previous slide"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></button>
        <button type="button" data-gallery-next aria-label="Next slide"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button>
      </div>`;
    gallery.appendChild(controls);
  });
}

function setupGalleries() {
  enhanceMarkdownGalleries();
  $$('[data-gallery]').forEach((gallery) => {
    const track = $('[data-gallery-track]', gallery);
    const controls = $('[data-gallery-controls]', gallery);
    if (!track || !controls) return;
    const slides = $$<HTMLElement>('img', track);
    if (slides.length < 2) return;
    const counter = $('[data-gallery-count]', controls)!;
    const prev = $<HTMLButtonElement>('[data-gallery-prev]', controls)!;
    const next = $<HTMLButtonElement>('[data-gallery-next]', controls)!;
    controls.hidden = false;

    const step = () => slides[1].offsetLeft - slides[0].offsetLeft || slides[0].offsetWidth;
    const index = () => Math.round(track.scrollLeft / step());
    const go = (i: number) => {
      const target = slides[Math.max(0, Math.min(slides.length - 1, i))];
      track.scrollTo({ left: target.offsetLeft - slides[0].offsetLeft, behavior: 'smooth' });
    };
    const sync = () => {
      const i = index();
      counter.textContent = `${i + 1} / ${slides.length}`;
      prev.disabled = i <= 0;
      next.disabled = i >= slides.length - 1;
    };

    prev.addEventListener('click', () => go(index() - 1));
    next.addEventListener('click', () => go(index() + 1));
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') (e.preventDefault(), go(index() + 1));
      if (e.key === 'ArrowLeft') (e.preventDefault(), go(index() - 1));
    });
    let raf = 0;
    track.addEventListener(
      'scroll',
      () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(sync);
      },
      { passive: true },
    );
    // Slides inside a closed <details> have no width yet; resync when it opens.
    gallery.closest('details')?.addEventListener('toggle', sync);
    sync();
  });
}

/* ---------- Lock-screen date in the visitor's time zone ---------- */
function setupLockDate() {
  const el = $('[data-lock-date]');
  if (!el) return;
  el.textContent = new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'long' }).format(
    new Date(),
  );
}

/* ---------- iPhone lock screen loop ----------
 * asleep → arriving (wake, previews hidden) → scanning (Face ID) → unlocked (previews shown)
 * → dimming → off → asleep → … Timing comes from `data-timing` (see LockScreen.astro).
 */
function setupLockScreen() {
  const phone = $('[data-iphone]');
  if (!phone) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    phone.dataset.phase = 'unlocked';
    return;
  }

  const t = { scan: 2900, unlock: 4100, read: 10000, dim: 1800, off: 1600, ...JSON.parse(phone.dataset.timing ?? '{}') };
  const dimAt = t.unlock + t.read;
  const offAt = dimAt + t.dim;
  const cycle = offAt + t.off;

  let timers: number[] = [];
  let inView = false;

  const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
  const setPhase = (phase: string) => (phone.dataset.phase = phase);
  const stop = () => {
    timers.forEach(clearTimeout);
    timers = [];
  };

  const play = () => {
    stop();
    setPhase('asleep');
    void phone.offsetWidth; // let the "asleep" reset apply so the arrival animation restarts
    at(60, () => setPhase('arriving'));
    at(t.scan, () => setPhase('scanning'));
    at(t.unlock, () => setPhase('unlocked'));
    at(dimAt, () => setPhase('dimming'));
    at(offAt, () => setPhase('off'));
    at(offAt + 700, () => setPhase('asleep')); // reset quietly once the screen is black
    at(cycle, play);
  };

  const sleep = () => {
    stop();
    setPhase('asleep');
  };

  // Only run while the phone is on screen and the tab is visible.
  new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting;
      if (inView && !document.hidden) play();
      else sleep();
    },
    { threshold: 0.35 },
  ).observe(phone);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) sleep();
    else if (inView) play();
  });

  // Tap the phone to wake it again.
  phone.addEventListener('click', play);
}

/* ---------- External links in articles open in a new tab ---------- */
function setupExternalLinks() {
  $$<HTMLAnchorElement>('.prose a[href^="http"]').forEach((a) => {
    if (a.host === location.host) return;
    a.target = '_blank';
    a.rel = 'noopener';
  });
}

setupThemeMenu();
setupReveal();
setupCompanyFilter();
setupGalleries();
setupLockDate();
setupLockScreen();
setupExternalLinks();

export {};
