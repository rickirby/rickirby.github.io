---
outline: deep
---

# Portfolio

Welcome to my portfolio! This page is divided into two sections: **Personal Projects** and **Company Projects**. In the Personal Projects section, you'll find a collection of work that I've built entirely from scratch, showcasing my skills and creativity. Additionally, as I currently work as an iOS Engineer, I’ve included highlights of the features I've developed during my professional experience in the Company Projects section. Feel free to explore both to see the range of my expertise.

::: tip
Tap any item from the list below to expand or collapse its description. Once expanded, tap the `See Details` button (if any) to view a more in-depth article about my work.<br><br>
![Tip](/assets/portfolio/portfolio_tip.gif)
:::

## Personal Projects

In this section, you'll find a showcase of projects I've built from the ground up, highlighting my creativity and technical skills.

#### 📈 Highlighted Projects
::: item-details Braille Document Copying System
I developed an iOS app that captures images of Braille documents, translates them into alphabetical characters, and sends the translated result to a Braille printer. The goal of this system is to create copies of existing Braille documents that no longer have their original text in alphabetical form.<br><br>
![Braille Copying System](/assets/portfolio/port_personal_braille_apps_flow.png)<br>
To see the details of tech stack used and how it work, tap `See Details` button below.<br><br>
[See Details](/portfolio/personal/braille_copying_system){.rounded-button target="_blank"}<br><br>
:::
::: item-details **Scandocs**: Document Scanner Apps
Scandocs is a sleek and efficient document scanning app designed for iOS. It offers a fast, lightweight experience while ensuring your scanned documents are seamlessly synced with your iCloud. This means you can access your documents from any iOS device linked to the same iCloud account, providing ultimate convenience across your Apple ecosystem.<br><br>
![Scandocs](/assets/portfolio/port_personal_scandocs_apps_flow.png)<br>
What truly stands out about this project, however, isn't just the features, but the innovative technology behind it. Tap the `See Details` button below to explore the advanced tech stack powering Scandocs.<br><br>
[See Details](/portfolio/personal/scandocs_document_scanner){.rounded-button target="_blank"}<br><br>
:::
::: item-details **Hi Kanji**: Let's learn Kanji!
Hi Kanji is an an app that helps you to learn Kanji, write and memorise Kanji writings in a fun way by competing with your friends.<br>
I utilize Apple's Machine Learning framework, called `CoreML` to detect/recognize user's stroke on canvas. I have trained a lot of common Kanji characters to be a machine learning models.<br><br>
![HiKanji](/assets/portfolio/port_personal_hi_kanji_slide_4.jpeg)<br>
[See Details](/portfolio/personal/hikanji){.rounded-button target="_blank"}<br><br>
:::
::: item-details **Tiba**: Alarm Based in Location
Tiba is an app to remind you with alarm when you'll arrive to your destination.
When you are going into your destination, sometimes you need to take a rest. But you feel worry that you will skip your destination. Never let that feeling haunted you.<br><br>
![Tiba](/assets/portfolio/port_personal_tiba_slide_4.jpeg)<br>
![Tiba](/assets/portfolio/port_personal_tiba_slide_5.jpeg)<br>
![Tiba](/assets/portfolio/port_personal_tiba_slide_6.jpeg)<br>
[See Details](/portfolio/personal/tiba){.rounded-button target="_blank"}<br><br>
:::
::: item-details **Anacara**: Learn Aksara Jawa
Anacara is an iOS app designed to teach users how to write Aksara Jawa, the traditional Javanese script. By leveraging the power of machine learning, it can accurately predict and recognize what users draw on the canvas. Apple's `Core ML` framework provides the robust processing needed to handle this task efficiently, ensuring a smooth and interactive learning experience.<br><br>
![Anacara](/assets/portfolio/port_personal_anacara_apps_flow.png)<br>
[See Details](/portfolio/personal/anacara){.rounded-button target="_blank"}<br><br>
:::
::: item-details **Good News**: News Reader Apps
This News App serves as a showcase of my expertise in mastering various third-party frameworks commonly used by leading tech companies in Indonesia. The app leverages `AsyncDisplayKit` (Texture) to build a smooth and efficient UI, `RxSwift` to implement reactive programming, and `Quick` & `Nimble` for comprehensive unit testing. Additionally, I have integrated GitHub Actions to automate the unit testing workflow in the cloud, ensuring seamless and continuous testing in a modern CI/CD environment.<br><br>
![Good News](/assets/portfolio/port_personal_good_news_apps_flow.png)<br>
[See Details](/portfolio/personal/good_news){.rounded-button target="_blank"}<br><br>
:::


## Company Projects

In this section, you'll find my work contributions during my time with various companies. As an iOS Engineer in a company, I didn't build entire apps on my own. Instead, I collaborated closely with a team, where each of us had specific responsibilities for different features. The portfolio below highlights my individual contributions, which span across Core/Infrastructure, Security, and Feature-related areas.


### Stockbit
![Stockbit](/assets/company/sb_logo_light.png){.light-only width=137.39}
![Stockbit](/assets/company/sb_logo_dark.png){.dark-only width=137.39}

#### 🏢 iOS Infra Stuff
::: item-details Enablement of Linux Runner in Gitlab-CI for `danger-swiftlint`
Since we can run `Swift` in Linux by using `Swift Toolchain`, I enabled `danger-swiftlint` to run on a CI Linux Runner.<br><br>
![Danger-SwiftLint](/assets/portfolio/port_sb_danger_lint.png){width=500}<br>
The process was significantly faster on Linux, completing in just `38 seconds`, compared to over `3 minutes` on Xcode Cloud CI.<br><br>
[See Details](/portfolio/stockbit/linux_runner_danger_swiftlint){.rounded-button target="_blank"}<br><br>
:::
::: item-details `SwiftLint` Quarantine Strategy to resolve thousands of Lint Violation
To address the numerous `SwiftLint` violations scattered across hundreds of files in our project, I'm introducing a new approach known as the **Quarantine Strategy**.<br><br>
![Quarantine Diagram](/assets/portfolio/port_sb_swiftlint_quarantine_diagram.png)<br>
The Quarantine Strategy involves classifying files into two categories: healthy and infected. To maintain the integrity of healthy files, we enforce `danger-swiftlint` on every Pull Request. Simultaneously, we work to reduce the number of infected files over time.<br><br>
[See Details](/portfolio/stockbit/swiftlint_quarantine_strategy){.rounded-button target="_blank"}<br><br>
:::
::: item-details AI-Powered Pull Request Reviewer
I make a POC for Pull Request reviewer using Gemini 1.5 Pro. The concept is letting Gemini to scan through PR changes, and give its opinion through the PR comment. Following picture shows the result of AI-powered review in PR comment.<br><br>
![AI Reviewer](/assets/portfolio/port_sb_ai_reviewer_comment.png)<br>
:::
::: item-details Create Default Release Notes for `TestFlight` and `Firebase` Build

:::
::: item-details Create Release Script for Simplicity in Weekly Release Ritual
As Core-iOS team, one of our task is being a Release Manager to handle the process of releasing a build to App Store Connect.<br><br>
The process is starting from cutting off the `development` branch, creating RC build for QA regression test (TestFlight, Firebase, and Simulator build), and finally submit the latest RC build to the App Store Connect<br><br>
To make the early step easier, I create a shell script to cut off the `development` branch, bump the version, create release branch, and create a tag to trigger CI to start build. Image below describe enough what the script does.<br>
![Release Script on Terminal](/assets/portfolio/port_sb_release_script_terminal.png)
:::
<br>

#### ⚙️ iOS Core Stuff
::: item-details `OneSignal` to `FCM` Migration (Save USD 20,000 per Year)

:::
::: item-details Modularization Enhancement to Cut Build Time up to 50%

:::
::: item-details Implementation of Live Update Remote Config

:::
<br>

#### 📈 Feature Related
::: item-details SNAP-BI

:::
::: item-details Bilingual Feature Enablement on Stockbit Apps

:::
::: item-details Dynamic Deeplink Handler for Stockbit Screener Feature and Its Child

:::
::: item-details Change Hamburger Menu into Profile Picture Button

:::
<br>

#### ♺ Modularization
::: item-details Create `Dependency Injection` Engine and Implement to the Project

:::
<br>

#### ⏱️ Build Time Optimization
::: item-details The Usage of Pre-Built Static Framework

:::
::: item-details Enhance Image Asset Catalog Compilation Time

:::
<br>

#### 📚 3rd Party Library Related
::: item-details Sunset `Realm` and Change into Native `CoreData`

:::
::: item-details Sunset `LGSideMenu` and Change into Native Navigation

:::
::: item-details Sunset `M13Checkbox` and Create Native-Base Checkbox Component

:::
::: item-details Best Practice of `Parchment` Implementation (Paging View)

:::
<br>

#### 🛠️ Developer Experience
::: item-details Remote Config Inspection Tools

:::
::: item-details `Wormholy` Framework Bugfix (3rd Party Lib for Network Chucker)

:::
::: item-details `Hyperion` Framework Improvement (3rd Party Lib for iOS Layout Inspection)

:::
<br>

#### 🔐 Security
::: item-details Integration of `Talsec Security` Framework to Detect Jailbreak and Other Device Manipulation

:::
<br>

### Traveloka
![Traveloka](/assets/company/tvlk_logo_light.png){.light-only width=200}
![Traveloka](/assets/company/tvlk_logo_dark.png){.dark-only width=200}

#### 💸 Feature Related - Payment
::: item-details Financials Service Page Relayout

:::
::: item-details PIN Challenge Handling

:::
<br>

#### 🔨 Other Tech Stack
::: item-details Migrate Legacy `Objective-C` code into `Swift` code

:::
::: item-details Unit Test Pattern to Check Code Sequence

:::
<br>

### RCTI+
![RCTI+](/assets/company/rcti_logo.png){width=127.41}

#### 🎥 Feature Related - Video
::: item-details Create Video Player Interaction

:::
<br>

#### 🔐 Security
::: item-details Prevent Screen Recording and Screen Capturing

:::
<br>

#### 🔨 Other Tech Stack
::: item-details Manage `JavaScript` bridge to handle communication between web apps and native apps

:::
<br>

<style scoped>
h3 {
    visibility: hidden;
    margin-top: -28px;
}

h4 { 
    margin-bottom: 16px; 
}
</style>