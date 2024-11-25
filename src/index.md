---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Ricki Bin Yamin"
  text: "iOS Software Engineer"
  tagline: Stockbit | Ex-Traveloka | Ex-DANA
  image:
    src: /assets/profile/profile-photo.png
  actions:
    - theme: brand
      text: Explore More
      link: /portfolio

features:
  - title: Portfolio
    icon:
      src: /assets/icon/ic_portfolio.png
    details: See my recent work as iOS Engineer!
    link: /portfolio
  - title: Resume
    icon:
      src: /assets/icon/ic_resume.png
    details: See my completed list of resume in one page!
    link: /resume
  - title: LinkedIn | rickirby18
    icon:
      src: /assets/icon/ic_linkedin.png
    details: Connect with me on LinkedIn!
    link: https://linkedin.com/in/rickirby18
  - title: GitHub | rickirby
    icon:
      light: /assets/icon/ic_github_light.png
      dark: /assets/icon/ic_github_dark.png
    details: Check out my GitHub repository!
    link: https://github.com/rickirby
---

## Hello and welcome! 👋

I’m Ricki Bin Yamin, an iOS Engineer dedicated in crafting exceptional mobile experiences. On this site, you’ll get a glimpse of my journey, from innovative projects to detailed insights into my skills and background.

Browse through my portfolio to see what I’ve been working on lately, and check out my resume for a comprehensive view of my career. Don't forget to connect with me on LinkedIn and explore my GitHub repository to see my code in action. Let’s build something great together!

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>