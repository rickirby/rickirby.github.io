/** Site-wide facts and links. Copy is kept word-for-word from the original VitePress site. */
export const site = {
  name: 'Ricki Bin Yamin',
  role: 'Sr. iOS Software Engineer',
  tagline: 'Stockbit | Ex-Traveloka | Ex-DANA',
  description: 'Sr. iOS Engineer at Stockbit | Ex-Traveloka | Ex-DANA',
  ogSiteName: 'Ricki Bin Yamin Portfolio',
  copyright: 'Copyright © 2024 Ricki Bin Yamin',
  resume: '/assets/profile/resume_ricki_bin_yamin.pdf',
  linkedin: 'https://linkedin.com/in/rickirby18',
  github: 'https://github.com/rickirby',
  medium: 'https://medium.com/@rickirby',
  /** Search-engine ownership codes (public by design; they appear in the page source). */
  verification: {
    google: 'gfoSmfNZrnBR-1LePnP3wHqc4eg5QV4EkBTbzK8xytQ',
    bing: '',
  },
};

/**
 * Search-engine metadata. Titles and descriptions reuse the original wording
 * (the hero line, the welcome text, the portfolio intro and the resume summary).
 */
export const seo = {
  home: {
    title: `${site.name} | ${site.role}`,
    description:
      'Sr. iOS Engineer at Stockbit | Ex-Traveloka | Ex-DANA. I’m Ricki Bin Yamin, an iOS Engineer dedicated in crafting exceptional mobile experiences.',
  },
  portfolio: {
    description:
      'Welcome to my portfolio! This page is divided into two sections: Personal Projects and Company Projects. iOS work by Ricki Bin Yamin.',
  },
  resume: {
    description:
      'Ricki Bin Yamin, Sr. iOS Software Engineer, Jakarta, Indonesia. Software Engineer with over 6 years of hands-on experience specializing in building iOS Native Apps.',
  },
  /** Facts for the schema.org Person (all from the original resume). */
  person: {
    location: { locality: 'Jakarta', country: 'ID' },
    worksFor: { name: 'Stockbit', url: 'https://stockbit.com' },
    alumniOf: [
      { type: 'CollegeOrUniversity', name: 'Institut Teknologi Sepuluh Nopember', url: 'https://www.its.ac.id' },
      { type: 'EducationalOrganization', name: 'Apple Developer Academy @UC' },
    ],
    knowsAbout: [
      'iOS Development',
      'Swift',
      'UIKit',
      'SwiftUI',
      'SnapKit',
      'AsyncDisplayKit (Texture)',
      'RxSwift',
      'Core Data',
      'Core ML',
      'Firebase',
      'CI/CD',
      'Xcode Cloud',
      'GitLab CI',
      'fastlane',
      'Modularization',
      'Mobile App Security',
    ],
  },
};

export const nav = [
  { text: 'Home', link: '/' },
  { text: 'Portfolio', link: '/portfolio' },
  { text: 'Resume', link: '/resume' },
];
