/**
 * Portfolio page content — word-for-word from src/portfolio.md of the original site.
 * Strings use a small inline-markdown subset (see src/lib/inline.ts).
 * Images are file names inside src/assets/portfolio/.
 */

export type Block =
  | { p: string }
  | { img: string; alt: string; width?: number }
  | { gallery: string[]; alt: string };

export interface Item {
  title: string;
  body?: Block[];
  details?: { href: string; external?: boolean };
}

export interface Group {
  emoji: string;
  title: string;
  items: Item[];
}

export interface Company {
  name: string;
  logo: { light: string; dark?: string; width: number };
  groups: Group[];
}

export const intro = {
  title: 'Portfolio',
  lede: "Welcome to my portfolio! This page is divided into two sections: **Personal Projects** and **Company Projects**. In the Personal Projects section, you'll find a collection of work that I've built entirely from scratch, showcasing my skills and creativity. Additionally, as I currently work as an iOS Engineer, I’ve included highlights of the features I've developed during my professional experience in the Company Projects section. Feel free to explore both to see the range of my expertise.",
  tip: 'Tap any item from the list below to expand or collapse its description. Once expanded, tap the `See Details` button (if any) to view a more in-depth article about my work.',
};

export const personal = {
  title: 'Personal Projects',
  lede: "In this section, you'll find a showcase of projects I've built from the ground up, highlighting my creativity and technical skills.",
  groups: [
    {
      emoji: '📈',
      title: 'Highlighted Projects',
      items: [
        {
          title: 'Braille Document Copying System',
          body: [
            {
              p: 'I developed an iOS app that captures images of Braille documents, translates them into alphabetical characters, and sends the translated result to a Braille printer. The goal of this system is to create copies of existing Braille documents that no longer have their original text in alphabetical form.',
            },
            { img: 'port_personal_braille_apps_flow.png', alt: 'Braille Copying System' },
            { p: 'To see the details of tech stack used and how it work, tap `See Details` button below.' },
          ],
          details: { href: '/portfolio/personal/braille_copying_system' },
        },
        {
          title: '**Scandocs**: Document Scanner Apps',
          body: [
            {
              p: 'Scandocs is a sleek and efficient document scanning app designed for iOS. It offers a fast, lightweight experience while ensuring your scanned documents are seamlessly synced with your iCloud. This means you can access your documents from any iOS device linked to the same iCloud account, providing ultimate convenience across your Apple ecosystem.',
            },
            { img: 'port_personal_scandocs_apps_flow.png', alt: 'Scandocs' },
            {
              p: "What truly stands out about this project, however, isn't just the features, but the innovative technology behind it. Tap the `See Details` button below to explore the advanced tech stack powering Scandocs.",
            },
          ],
          details: { href: '/portfolio/personal/scandocs_document_scanner' },
        },
        {
          title: "**Hi Kanji**: Let's learn Kanji!",
          body: [
            {
              p: "Hi Kanji is an an app that helps you to learn Kanji, write and memorise Kanji writings in a fun way by competing with your friends.\nI utilize Apple's Machine Learning framework, called `CoreML` to detect/recognize user's stroke on canvas. I have trained a lot of common Kanji characters to be a machine learning models.",
            },
            { img: 'port_personal_hi_kanji_slide_4.jpeg', alt: 'HiKanji' },
          ],
          details: { href: '/portfolio/personal/hikanji' },
        },
        {
          title: '**Tiba**: Alarm Based in Location',
          body: [
            {
              p: "Tiba is an app to remind you with alarm when you'll arrive to your destination. When you are going into your destination, sometimes you need to take a rest. But you feel worry that you will skip your destination. Never let that feeling haunted you.",
            },
            {
              gallery: ['port_personal_tiba_slide_4.jpeg', 'port_personal_tiba_slide_5.jpeg', 'port_personal_tiba_slide_6.jpeg'],
              alt: 'Tiba',
            },
          ],
          details: { href: '/portfolio/personal/tiba' },
        },
        {
          title: '**Anacara**: Learn Aksara Jawa',
          body: [
            {
              p: "Anacara is an iOS app designed to teach users how to write Aksara Jawa, the traditional Javanese script. By leveraging the power of machine learning, it can accurately predict and recognize what users draw on the canvas. Apple's `Core ML` framework provides the robust processing needed to handle this task efficiently, ensuring a smooth and interactive learning experience.",
            },
            { img: 'port_personal_anacara_apps_flow.png', alt: 'Anacara' },
          ],
        },
        {
          title: '**Good News**: News Reader Apps',
          body: [
            {
              p: 'This News App serves as a showcase of my expertise in mastering various third-party frameworks commonly used by leading tech companies in Indonesia. The app leverages `AsyncDisplayKit` (Texture) to build a smooth and efficient UI, `RxSwift` to implement reactive programming, and `Quick` & `Nimble` for comprehensive unit testing. Additionally, I have integrated GitHub Actions to automate the unit testing workflow in the cloud, ensuring seamless and continuous testing in a modern CI/CD environment.',
            },
            { img: 'port_personal_good_news_apps_flow.png', alt: 'Good News' },
          ],
          details: { href: '/portfolio/personal/good_news' },
        },
      ],
    },
  ] satisfies Group[],
};

const titleOnly = (...titles: string[]): Item[] => titles.map((title) => ({ title }));

export const company = {
  title: 'Company Projects',
  lede: "In this section, you'll find my work contributions during my time with various companies. As an iOS Engineer in a company, I didn't build entire apps on my own. Instead, I collaborated closely with a team, where each of us had specific responsibilities for different features. The portfolio below highlights my individual contributions, which span across Core/Infrastructure, Security, and Feature-related areas.",
  companies: [
    {
      name: 'Stockbit',
      logo: { light: 'sb_logo_light.png', dark: 'sb_logo_dark.png', width: 137.39 },
      groups: [
        {
          emoji: '🏢',
          title: 'iOS Infra Stuff',
          items: [
            {
              title: 'Enablement of Linux Runner in Gitlab-CI for `danger-swiftlint`',
              body: [
                {
                  p: 'Since we can run `Swift` in Linux by using `Swift Toolchain`, I enabled `danger-swiftlint` to run on a CI Linux Runner.',
                },
                { img: 'port_sb_danger_lint.png', alt: 'Danger-SwiftLint', width: 500 },
                {
                  p: 'The process was significantly faster on Linux, completing in just `38 seconds`, compared to over `3 minutes` on Xcode Cloud CI.',
                },
              ],
              details: { href: '/portfolio/stockbit/linux_runner_danger_swiftlint' },
            },
            {
              title: '`SwiftLint` Quarantine Strategy to resolve thousands of Lint Violation',
              body: [
                {
                  p: "To address the numerous `SwiftLint` violations scattered across hundreds of files in our project, I'm introducing a new approach known as the **Quarantine Strategy**.",
                },
                { img: 'port_sb_swiftlint_quarantine_diagram.png', alt: 'Quarantine Diagram' },
                {
                  p: 'The Quarantine Strategy involves classifying files into two categories: healthy and infected. To maintain the integrity of healthy files, we enforce `danger-swiftlint` on every Pull Request. Simultaneously, we work to reduce the number of infected files over time.',
                },
              ],
              details: { href: '/portfolio/stockbit/swiftlint_quarantine_strategy' },
            },
            {
              title: 'AI-Powered Pull Request Reviewer',
              body: [
                {
                  p: 'I make a POC for Pull Request reviewer using Gemini 1.5 Pro. The concept is letting Gemini to scan through PR changes, and give its opinion through the PR comment. Following picture shows the result of AI-powered review in PR comment.',
                },
                { img: 'port_sb_ai_reviewer_comment.png', alt: 'AI Reviewer', width: 520 },
              ],
            },
            {
              title: 'Create Default Release Notes for `TestFlight` and `Firebase` Build',
              body: [
                {
                  p: 'I create a script for CI to parse the list of commit message on release branch to be the default release notes on TestFlight. This help us to see the changelog in every TestFlight build.',
                },
                { img: 'port_sb_release_notes.png', alt: 'Release Note' },
              ],
            },
            {
              title: 'Create Release Script for Simplicity in Weekly Release Ritual',
              body: [
                {
                  p: 'As Core-iOS team, one of our task is being a Release Manager to handle the process of releasing a build to App Store Connect.',
                },
                {
                  p: 'The process is starting from cutting off the `development` branch, creating RC build for QA regression test (TestFlight, Firebase, and Simulator build), and finally submit the latest RC build to the App Store Connect',
                },
                {
                  p: 'To make the early step easier, I create a shell script to cut off the `development` branch, bump the version, create release branch, and create a tag to trigger CI to start build. Image below describe enough what the script does.',
                },
                { img: 'port_sb_release_script_terminal.png', alt: 'Release Script on Terminal', width: 600 },
              ],
            },
          ],
        },
        {
          emoji: '⚙️',
          title: 'iOS Core Stuff',
          items: [
            {
              title: '`OneSignal` to `FCM` Migration (Save USD 20,000 per Year)',
              body: [
                {
                  p: 'We migrate Push Notification Services from `OneSignal` to `Firebase Cloud Messaging` and we can cut the subscribtion fee for about USD 20,000/year.',
                },
                {
                  p: 'OneSignal charges USD 3 for every 1000 subscribers. And from our last bill for Nov 2022 - Oct 2023, we should pay arround USD 25K. But, Firebase Cloud Messaging service is free, as we can see on the Firebase pricing web page.',
                },
                { img: 'port_sb_pn_migration_logo.png', alt: 'PN Migration' },
              ],
            },
            {
              title: 'Modularization Enhancement to Cut Build Time up to 50%',
              body: [
                {
                  p: 'Building a complex apps like Stockbit can take up to 6 minutes. But with the correct optimization of the modularization, we can cut it for almost 50% build time.',
                },
                { img: 'port_sb_build_time_final_result.png', alt: 'Build Time Final' },
              ],
              details: { href: '/portfolio/stockbit/build_time_optimization' },
            },
            {
              title: 'Implementation of Live Update Remote Config',
              body: [
                {
                  p: 'Firebase introduced a new API, **Real-Time Remote Config**, starting from version `10.7.0`. This new API allow us to receive updated parameter keys and values as soon as they’re published on the server without waiting the user to re-open the apps. Here are the comparison between before and after applying Real-Time updates for Remote Config.',
                },
                { img: 'port_sb_remote_config_live.png', alt: 'Live Update' },
                {
                  p: 'The major change is the user doesn’t need to re-open the apps to get the new Remote Config value that have been just updated on the server. It creates a seamless experience to the user and fast delivery for Remote Config value to prevent the user from entering the problematic features.',
                },
              ],
              details: {
                href: 'https://medium.com/stockbit-bibit-engineering/handling-real-time-remote-config-update-on-stockbit-296a9ce94fa1',
                external: true,
              },
            },
          ],
        },
        {
          emoji: '🔐',
          title: 'Security',
          items: [
            {
              title: '`Trusted Device` Implementation',
              body: [
                {
                  p: 'We improve our security by implementing Trusted Device concept. Any login request coming from new device should be approved by the Trusted Device.',
                },
                { img: 'port_sb_trusted_device.png', alt: 'Trusted Device' },
              ],
            },
            {
              title: 'Integration of `Talsec Security` Framework to Detect Jailbreak and Other Device Manipulation',
              body: [
                {
                  p: 'We implement [Talsec Security](https://www.talsec.app/) SDK to handle security threats and block it. It is a lightweight and easy-to-integrate security library designed to protect apps from potential threats during their runtime. It contains multiple security checks, each aimed to cover a possible attack vector to ensure a high level of application security. Among other options, it is able to detect reverse engineering, repackaging or cloning attempts, and running in an unsafe OS environment. It is freely distributed for all mobile platforms and is also available for Flutter, Capacitor, Cordova and React Native developers.',
                },
                { img: 'port_sb_talsec_security.png', alt: 'Talsec Security', width: 520 },
                {
                  p: "This SDK can detect modern jailbreak method such as `palera1n`. Some security threats covered are jailbreak, hooks, emulator, missing secure enclave, device binding, etc. From our average tracker data, in last 60 days, we've blocked 735 event from jailbreak, hooked, emulator, and unofficial store so that the user can't enter the apps.",
                },
                { img: 'port_sb_talsec_security_data.png', alt: 'Talsec Security Data' },
              ],
            },
          ],
        },
        {
          emoji: '📈',
          title: 'Feature Related',
          items: titleOnly(
            'SNAP-BI',
            'Bilingual Feature Enablement on Stockbit Apps',
            'Dynamic Deeplink Handler for Stockbit Screener Feature and Its Child',
            'Change Hamburger Menu into Profile Picture Button',
          ),
        },
        {
          emoji: '♺',
          title: 'Modularization',
          items: titleOnly('Create `Dependency Injection` Engine and Implement to the Project'),
        },
        {
          emoji: '⏱️',
          title: 'Build Time Optimization',
          items: titleOnly('The Usage of Pre-Built Static Framework', 'Enhance Image Asset Catalog Compilation Time'),
        },
        {
          emoji: '📚',
          title: '3rd Party Library Related',
          items: titleOnly(
            'Sunset `Realm` and Change into Native `CoreData`',
            'Sunset `LGSideMenu` and Change into Native Navigation',
            'Sunset `M13Checkbox` and Create Native-Base Checkbox Component',
            'Best Practice of `Parchment` Implementation (Paging View)',
          ),
        },
        {
          emoji: '🛠️',
          title: 'Developer Experience',
          items: titleOnly(
            'Remote Config Inspection Tools',
            '`Wormholy` Framework Bugfix (3rd Party Lib for Network Chucker)',
            '`Hyperion` Framework Improvement (3rd Party Lib for iOS Layout Inspection)',
          ),
        },
      ],
    },
    {
      name: 'Traveloka',
      logo: { light: 'tvlk_logo_light.png', dark: 'tvlk_logo_dark.png', width: 200 },
      groups: [
        {
          emoji: '💸',
          title: 'Feature Related - Payment',
          items: titleOnly('Financials Service Page Relayout', 'PIN Challenge Handling'),
        },
        {
          emoji: '🔨',
          title: 'Other Tech Stack',
          items: titleOnly('Migrate Legacy `Objective-C` code into `Swift` code', 'Unit Test Pattern to Check Code Sequence'),
        },
      ],
    },
    {
      name: 'RCTI+',
      logo: { light: 'rcti_logo.png', width: 127.41 },
      groups: [
        { emoji: '🎥', title: 'Feature Related - Video', items: titleOnly('Create Video Player Interaction') },
        { emoji: '🔐', title: 'Security', items: titleOnly('Prevent Screen Recording and Screen Capturing') },
        {
          emoji: '🔨',
          title: 'Other Tech Stack',
          items: titleOnly('Manage `JavaScript` bridge to handle communication between web apps and native apps'),
        },
      ],
    },
  ] satisfies Company[],
};
