/**
 * Resume page content — word-for-word from src/resume.md of the original site.
 * Strings use a small inline-markdown subset (see src/lib/inline.ts).
 */

export interface Entry {
  /** Heading as written in the original, split at " - " into organisation and role. */
  org: string;
  role?: string;
  place?: string;
  period?: string;
  /** Free-form line used instead of place/period when the original had one. */
  line?: string;
  points: string[];
}

export const header = {
  name: 'Ricki Bin Yamin',
  role: 'Sr. iOS Software Engineer',
  location: 'Jakarta, Indonesia',
  download: 'Download',
};

export const summary =
  '**Software Engineer** with over 6 years of hands-on experience specializing in building **iOS Native Apps**. Proficient in crafting intuitive user interfaces programmatically using `UIKit`, `SwiftUI`, `SnapKit`, and `AsyncDisplayKit` (`Texture`). Skilled in developing high-scalable applications integrating customer-centric 3rd party frameworks such as `Firebase`, `CleverTap`, `OneSignal`, `AppsFlyer`, `Split.io`, among others. Also experienced in DevX/Infra stuff such as setting up `CI/CD`, managing provisioning profiles and certificates, Push Notification, modularization design system, scripting in `shell` and `ruby`, and releasing apps in App Store Connect.';

export const experienceTip = 'If a link is included in the list below, you can tap it to see my detailed achievements.';

export const experience: Entry[] = [
  {
    org: 'Stockbit',
    role: 'Sr. iOS Engineer Core/Infra',
    place: 'Jakarta, Indonesia',
    period: 'March 2022 - Present',
    points: [
      'Responsible to maintain project architecture and modularization.',
      'Maintain and Set Up `CI/CD` Workflow (`XcodeCloud` and `Gitlab-CI`, previously with `Bitrise`).',
      'Write script in `shell` and `ruby` to support `CI/CD` Workflow.',
      'Support and maintain certificates and auth key (`.p12` and `.p8`) for `fastlane` integration authentication (code signing), Push Notification authentication, etc.',
      'Maintain project’s secret keys for development process.',
      'Involved in Push Notification Service migration (from `OneSignal` to `FCM`) resulting in a significant reduction of subscription fees by approximately **USD 20,000** per year.',
      'Develop bilingual engine on iOS to support English-Indonesian language content wording.',
      'Develop Dependency-Injection (DI) Engine to support cross module class sharing and to prevent circular dependency of importing between modules.',
      'Involved in improving security for iOS.',
      'Migrate the usage of `Realm` into native `CoreData` which cut apps build size for about 10-15 MB.',
      'Develop UI Design System component for iOS and its component’s showcase apps (UI full programmatically using `UIKit`).',
      'Involved as Release Manager, maintain apps release cycle, and submit apps to the App Store Connect.',
    ],
  },
  {
    org: 'Traveloka',
    role: 'iOS Engineer | Financials Service Team',
    place: 'Tangerang, Indonesia',
    period: 'September 2021 - March 2022',
    points: [
      'Handle relayout Financial Service feature page.',
      'Handle new user challenge (PIN challenge) for known `HTTP` status code.',
      'Implement `MVVM-C` architecture, with modular based using Development Pods.',
      'Build UI programmatically using `SnapKit`.',
      'Implement Unit Test on every new line written code.',
      'Migrate legacy `Objective-C` code into `Swift`.',
      'Migrate xib view into UIKit or `SnapKit` programmatically.',
    ],
  },
  {
    org: 'RCTI+',
    role: 'iOS Engineer | Part Time',
    place: 'Jakarta, Indonesia',
    period: 'August 2021 - February 2022',
    points: [
      'Work with Video teams.',
      'Develop new capability on RCTI+ video player: user interaction on video player such as fast forward by double tapping, lock window to prevent unintentional user interaction, etc.',
      'Develop security to prevent from screen recording and screen capturing.',
      'Manage JavaScript - bridge to handle communication between web apps content and native apps interaction.',
    ],
  },
  {
    org: 'DANA Indonesia',
    role: 'iOS Engineer | Payment Team, Lifestyle Team',
    place: 'Jakarta, Indonesia',
    period: 'July 2020 - September 2021',
    points: [
      'Work with Core-Payment team to develop Send Money features.',
      'Work with Lifestyle team to maintain “All Services” features section.',
      'Involved in developing E-Money feature.',
      'Implement `MVVM-C` architecture, framework integration using `Carthage`.',
      'Build UI programmatically using `AsyncDisplayKit` (Texture).',
      'Implement Reactive Programming using `RxSwift`.',
      'Manage Javascript - bridge to handle communication between web apps container (WebView) and native apps.',
      'Implement Unit Testing as well as mocking API service.',
    ],
  },
  {
    org: 'Apple Developer Academy @UC',
    role: 'iOS Developer | Internship',
    place: 'Surabaya, Indonesia',
    period: 'March - December 2019',
    points: [
      'Implement Git Workflow in every project.',
      'Learn iOS Development Life Cycles.',
      'Learn build UI programmatically using `UIKit` instead of drag and drop using `Storyboard`/`XIB`.',
      'Learn build UI programmatically using `SwiftUI`.',
      'Learn `CoreData` and `CloudKit` integration.',
      'Learn `CoreML`.',
      'Build apps for guiding user to learn writing Kanji, based on `CoreML`. (Final Project)',
      'Build apps for managing boarding house rental. (Final Project)',
    ],
  },
];

export const volunteer: Entry[] = [
  {
    org: 'PLC (Programmable Logic Controller) Trainer',
    role: 'ITS Campus',
    line: 'At Siemens SciTech Competition Event, Held by ITS x Siemens (2017)',
    points: [
      'As trainer of Programmable Logic Controller (PLC) using `Ladder Diagram` (PLC programming language)',
      'As trainer of Human Machine Interface (HMI), a companion for PLC as User Interface.',
      'Composing training materials.',
      'Material covered: basic I/O, basic logical gate (`AND`, `OR`, `NOT`, `XOR`, `XNOR`), sequential logic (`Flip-Flop`), `Timer`, `Counter`.',
    ],
  },
];

export const education: Entry[] = [
  {
    org: 'Institut Teknologi Sepuluh Nopember',
    line: 'Electrical Engineering (Bachelor) - GPA 3.84',
    points: [
      'Final Project: **Develop apps to translate braille document using Image Processing and send translation data into Braille Printer wirelessly to support Braille-Copying Method**.',
      'Tech Stack used: `OpenCV` written in `Objective-C++`, iOS Apps native development with Xcode, `ESP32` firmware development written in `C++`, implement Bluetooth and `REST-API` for communication between iOS apps and `ESP32`.',
      'Project on Github: [github.com/rickirby/SCANDO_iOS](https://github.com/rickirby/SCANDO_iOS)',
      'Publication: [sciencedirect.com/science/article/pii/S1877050921023607](https://sciencedirect.com/science/article/pii/S1877050921023607)',
      'Video Demo on LinkedIn Post: [linkedin.com/posts/rickirby18_on-my-final-project-thesis-for-my-bachelor-activity-6811276772794093568-Y0ze](https://linkedin.com/posts/rickirby18_on-my-final-project-thesis-for-my-bachelor-activity-6811276772794093568-Y0ze)',
    ],
  },
];
