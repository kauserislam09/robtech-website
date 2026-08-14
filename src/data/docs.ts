import type { DocArticle } from '../types/docs';

export const DOC_ARTICLES: DocArticle[] = [
  {
    id: 'getting-started',
    slug: 'getting-started',
    category: 'getting-started',
    title: {
      en: 'Getting Started with RobTech Apps',
      bn: 'রবটেক অ্যাপ ব্যবহারের সূচনা নির্দেশিকা',
    },
    description: {
      en: 'Learn how to discover, download, install, and use RobTech software.',
      bn: 'রবটেক সফটওয়্যার সন্ধান, ডাউনলোড, ইনস্টল এবং ব্যবহারের সহজ নিয়ম জানুন।',
    },
    sections: [
      {
        id: 'overview',
        title: { en: 'Overview', bn: 'সামগ্রিক বিবরণ' },
        content: {
          en: 'RobTech Limited builds practical, offline-first applications designed around simplicity, usefulness, reliability, and accessibility. Follow these steps to get started.',
          bn: 'রবটেক লিমিটেড সহজবোধ্যতা, উপযোগিতা, নির্ভরযোগ্যতা এবং অ্যাক্সেসিবিলিটি কেন্দ্রিক কাজ করার মতো প্র্যাকটিক্যাল অফলাইন অ্যাপ তৈরি করে। শুরু করতে এই ধাপগুলো অনুসরন করুন।',
        },
      },
      {
        id: 'steps',
        title: { en: 'Getting Started Steps', bn: 'সূচনার ধাপসমূহ' },
        type: 'steps',
        items: [
          { en: 'Browse our Products or Apps directory to find the application that fits your needs.', bn: 'আপনার প্রয়োজনীয় অ্যাপটি খুঁজে পেতে আমাদের প্রোডাক্টস বা অ্যাপস ডিরেক্টরি ব্রাউজ করুন।' },
          { en: 'Review the application features, platform compatibility, and system requirements.', bn: 'অ্যাপের সুবিধা, অ্যান্ড্রয়েড ভার্সন এবং সিস্টেমের প্রয়োজনীয়তা পরীক্ষা করুন।' },
          { en: 'Click "Download APK" to obtain the latest verified release package.', bn: 'সর্বশেষ ভেরিফায়েড রিলিজ প্যাকেজ পেতে "ডাউনলোড এপিকে" বাটনে ক্লিক করুন।' },
          { en: 'Open the downloaded APK on your Android device and confirm installation.', bn: 'আপনার অ্যান্ড্রয়েড ডিভাইসে ডাউনলোড করা এপিকে ফাইলটি ওপেন করুন এবং ইনস্টল সম্পন্ন করুন।' },
          { en: 'Launch the application and start using it comfortably without requiring an internet connection.', bn: 'অ্যাপটি চালু করুন এবং কোনো ইন্টারনেট কানেকশন ছাড়াই স্বাচ্ছন্দ্যে ব্যবহার শুরু করুন।' },
        ],
      },
    ],
  },
  {
    id: 'installation',
    slug: 'installation',
    category: 'installation',
    title: {
      en: 'Android APK Installation Guide',
      bn: 'অ্যান্ড্রয়েড এপিকে ইনস্টলেশন নির্দেশিকা',
    },
    description: {
      en: 'Step-by-step instructions for installing RobTech Android packages safely.',
      bn: 'রবটেক অ্যান্ড্রয়েড প্যাকেজ নিরাপদে ইনস্টল করার পর্যায়ক্রমিক নিয়ম।',
    },
    sections: [
      {
        id: 'safety-note',
        title: { en: 'APK Safety Information', bn: 'এপিকে নিরাপত্তা তথ্য' },
        type: 'callout',
        calloutType: 'important',
        content: {
          en: 'Only download RobTech APK packages from our official website (robtech.com) or official GitHub release repositories. Avoid third-party unverified stores.',
          bn: 'শুধুমাত্র আমাদের অফিসিয়াল ওয়েবসাইট বা অফিসিয়াল গিটহাব রিলিজ থেকে রবটেক এপিকে প্যাকেজ ডাউনলোড করুন। অজানা থার্ড-পার্টি ওয়েবসাইট থেকে ডাউনলোড পরিহার করুন।',
        },
      },
      {
        id: 'steps',
        title: { en: 'Step-by-Step Installation', bn: 'ইনস্টলেশনের পর্যায়ক্রমিক ধাপ' },
        type: 'steps',
        items: [
          { en: 'Step 1: Download the APK file from the official RobTech website or App page.', bn: 'ধাপ ১: অফিসিয়াল রবটেক ওয়েবসাইট থেকে এপিকে ফাইলটি ডাউনলোড করুন।' },
          { en: 'Step 2: Tap the downloaded file in your browser downloads or File Manager.', bn: 'ধাপ ২: ব্রাউজারের ডাউনলোড বক্সে বা ফাইল ম্যানেজারে গিয়ে ফাইলে ট্যাপ করুন।' },
          { en: 'Step 3: If Android asks to "Allow installation from unknown sources", follow the system prompt to grant permission for your browser.', bn: 'ধাপ ৩: অ্যান্ড্রয়েড যদি "অজানা উৎস থেকে ইনস্টল করার অনুমতি" চায়, তবে আপনার ব্রাউজারের জন্য অনুমতি প্রদান করুন।' },
          { en: 'Step 4: Review the permissions requested by the application and tap Install.', bn: 'ধাপ ৪: অ্যাপটি ইনস্টল করার জন্য ইনস্টল বাটনে ট্যাপ করুন।' },
          { en: 'Step 5: Tap Open to launch your newly installed RobTech app.', bn: 'ধাপ ৫: ইনস্টলেশন শেষে ওপেন বাটনে চাপ দিয়ে অ্যাপটি চালু করুন।' },
        ],
      },
      {
        id: 'device-note',
        title: { en: 'Device Manufacturer Variation', bn: 'ডিভাইসের তারতম্য সংক্রান্ত তথ্য' },
        type: 'callout',
        calloutType: 'note',
        content: {
          en: 'Settings screen menus and security dialog wording may vary slightly depending on your Android manufacturer (Samsung, Xiaomi, Google Pixel, OnePlus, etc.).',
          bn: 'আপনার মোবাইল ফোন তৈরির প্রতিষ্ঠানের (স্যামসাং, শাওমি, পিক্সেল ইত্যাদি) ওপর ভিত্তি করে সেটিংস স্ক্রিন এবং সিকিউরিটি পারমিশন ডায়ালগ কিছুটা ভিন্ন হতে পারে।',
        },
      },
    ],
  },
  {
    id: 'updates',
    slug: 'updates',
    category: 'updates',
    title: {
      en: 'App Updates & Release Notes',
      bn: 'অ্যাপ আপডেট এবং রিলিজ নোটস',
    },
    description: {
      en: 'Learn how RobTech applications check for updates and how to install new versions.',
      bn: 'রবটেক অ্যাপ কীভাবে আপডেট চেক করে এবং নতুন সংস্করণ ইনস্টল করার নিয়ম জানুন।',
    },
    sections: [
      {
        id: 'update-overview',
        title: { en: 'How Updates Work', bn: 'আপডেট কীভাবে কাজ করে' },
        content: {
          en: 'RobTech applications check our central static update manifest for new releases. When a new version with a higher build versionCode is published, you will see an update notification.',
          bn: 'রবটেক অ্যাপ আমাদের সেন্ট্রাল স্ট্যাটিক আপডেট ম্যানিফেস্ট চেক করে। উচ্চতর বিল্ড ভার্সন কোডসহ নতুন রিলিজ প্রকাশিত হলে আপনি আপডেটের নোটিফিকেশন দেখতে পাবেন।',
        },
      },
      {
        id: 'update-confirmation',
        title: { en: 'Update Installation Confirmation', bn: 'আপডেট ইনস্টলেশন নিশ্চিতকরণ' },
        type: 'callout',
        calloutType: 'tip',
        content: {
          en: 'Android applications distributed directly via APK require user confirmation to overwrite and update existing apps. Your app data remains intact during updates.',
          bn: 'সরাসরি এপিকে দিয়ে ইনস্টল করা অ্যাপ আপডেটের সময় অ্যান্ড্রয়েড ব্যবহারকারীর সম্মতি চায়। আপডেট করার সময় আপনার সংরক্ষিত অ্যাপের তথ্য অক্ষত থাকবে।',
        },
      },
    ],
  },
  {
    id: 'troubleshooting',
    slug: 'troubleshooting',
    category: 'troubleshooting',
    title: {
      en: 'General Troubleshooting Guide',
      bn: 'সাধারণ সমস্যা সমাধান নির্দেশিকা',
    },
    description: {
      en: 'Solutions for common download, installation, and app launch issues.',
      bn: 'ডাউনলোড, ইনস্টলেশন এবং অ্যাপ চালুর সাধারণ সমস্যাগুলির সমাধান।',
    },
    sections: [
      {
        id: 'download-issues',
        title: { en: 'Download Does Not Start', bn: 'ডাউনলোড শুরু না হলে' },
        content: {
          en: 'Check your internet connection, ensure your browser has storage permission, and verify that your device has sufficient storage space.',
          bn: 'আপনার ইন্টারনেট কানেকশন চেক করুন, ব্রাউজারের স্টোরেজ পারমিশন দেওয়া আছে কিনা দেখুন এবং পর্যাপ্ত মেমোরি খালি আছে কিনা নিশ্চিত করুন।',
        },
      },
      {
        id: 'install-issues',
        title: { en: 'Android Will Not Install APK', bn: 'এপিকে ইনস্টল না হলে' },
        content: {
          en: 'Ensure your device meets the minimum Android version requirement (Android 8.0+). If an "App Not Installed" error appears, verify that your device storage is not full.',
          bn: 'আপনার ফোনে সর্বনিম্ন প্রয়োজনীয় অ্যান্ড্রয়েড ভার্সন (অ্যান্ড্রয়েড ৮.০+) আছে কিনা নিশ্চিত করুন। "App Not Installed" দেখালে ফোনের ফাঁকা মেমোরি পরীক্ষা করুন।',
        },
      },
      {
        id: 'crash-issues',
        title: { en: 'App Crashes or Closes Suddenly', bn: 'অ্যাপ হঠাৎ বন্ধ হয়ে গেলে' },
        content: {
          en: 'Restart your phone, check for storage constraints, and make sure you are running the latest version from our official website.',
          bn: 'ফোনটি রিস্টার্ট করুন, মেমোরি খালি করুন এবং অফিসিয়াল ওয়েবসাইট থেকে সর্বশেষ আপডেটটি ডাউনলোড করা আছে কিনা নিশ্চিত করুন।',
        },
      },
    ],
  },
  {
    id: 'faq',
    slug: 'faq',
    category: 'faq',
    title: {
      en: 'Frequently Asked Questions (FAQ)',
      bn: 'সচরাচর জিজ্ঞাসিত প্রশ্নাবলী (FAQ)',
    },
    description: {
      en: 'Quick answers to common questions about RobTech software and privacy.',
      bn: 'রবটেক সফটওয়্যার এবং নিরাপত্তা সংক্রান্ত সাধারণ প্রশ্নের উত্তর।',
    },
    sections: [
      {
        id: 'faq-1',
        title: { en: 'What is RobTech Limited?', bn: 'রবটেক লিমিটেড কী?' },
        content: {
          en: 'RobTech Limited is a technology brand building practical software tools focused on simplicity, usefulness, offline privacy, and accessibility.',
          bn: 'রবটেক লিমিটেড একটি প্রযুক্তি ব্র্যান্ড যা সহজবোধ্যতা, কার্যকারিতা, অফলাইন সিকিউরিটি এবং অ্যাক্সেসিবিলিটি কেন্দ্রিক প্রয়োজনীয় সফটওয়্যার তৈরি করে।',
        },
      },
      {
        id: 'faq-2',
        title: { en: 'Do RobTech apps require an internet connection?', bn: 'রবটেক অ্যাপে কি ইন্টারনেট সংযোগ বাধ্যতামূলক?' },
        content: {
          en: 'Most RobTech applications (like Rob Personal Stock, RobMusicPlayer, and Rob Drop Offline) operate offline-first to protect user privacy.',
          bn: 'অধিকাংশ রবটেক অ্যাপ (যেমন রব পার্সোনাল স্টক, রবমিউজিকপ্লেয়ার, রব ড্রপ অফলাইন) ব্যবহারকারীর তথ্য সুরক্ষায় অফলাইনে কাজ করে।',
        },
      },
      {
        id: 'faq-3',
        title: { en: 'Are RobTech APKs free to download?', bn: 'রবটেক এপিকে কি বিনামূল্যে ডাউনলোড করা যায়?' },
        content: {
          en: 'Yes, official RobTech Android applications can be downloaded for free directly from our verified website.',
          bn: 'হ্যাঁ, আমাদের অফিসিয়াল ওয়েবসাইট থেকে বিনামূল্যে রিলিজকৃত এপিকে ডাউনলোড করা যায়।',
        },
      },
    ],
  },
  {
    id: 'developer',
    slug: 'developer',
    category: 'developer',
    title: {
      en: 'Maintainer & Developer Guide',
      bn: 'ডেভেলপার ও মেইনটেইনার নির্দেশিকা',
    },
    description: {
      en: 'Technical details regarding the release metadata schema, versioning, and publishing workflow.',
      bn: 'রিলিজ ম্যানিফেস্ট স্কিমা, ভার্সনিং এবং পাবলিশিং ওয়ার্কফ্লো সংক্রান্ত টেকনিক্যাল গাইড।',
    },
    sections: [
      {
        id: 'dev-workflow',
        title: { en: 'Release Workflow Overview', bn: 'রিলিজ ওয়ার্কফ্লো সংক্ষিপ্তসার' },
        type: 'steps',
        items: [
          { en: 'Build signed release APK and increment versionCode integer.', bn: 'সাইন করা রিলিজ এপিকে বিল্ড করুন এবং versionCode ইন্টিজার বৃদ্ধি করুন।' },
          { en: 'Create GitHub release tag (e.g. v1.2.0) and upload signed APK asset.', bn: 'গিটহাব রিলিজ ট্যাগ (যেমন v1.2.0) তৈরি করুন এবং এপিকে আপলোড করুন।' },
          { en: 'Update static JSON manifest in public/update/<app-id>.json.', bn: 'public/update/<app-id>.json-এ স্ট্যাটিক রিলিজ ম্যানিফেস্ট আপডেট করুন।' },
          { en: 'Run automated validation: node scripts/validate-releases.js.', bn: 'স্বয়ংক্রিয় ভ্যালিডেশন চালান: node scripts/validate-releases.js।' },
          { en: 'Deploy static site updates to Cloudflare Pages.', bn: 'ক্লাউডফ্লেয়ার পেজেসে স্ট্যাটিক সাইট আপডেট ডেপ্লয় করুন।' },
        ],
      },
    ],
  },

  /* App-Specific Documentation Guides */
  {
    id: 'doc-rob-personal-stock',
    slug: 'rob-personal-stock',
    category: 'apps',
    appId: 'rob-personal-stock',
    title: {
      en: 'Rob Personal Stock Documentation',
      bn: 'রব পার্সোনাল স্টক ম্যানুয়াল ও নির্দেশিকা',
    },
    description: {
      en: 'User manual for managing household inventory, barcode scanning, and CSV backups.',
      bn: 'প্যান্ট্রি ইনভেন্টরি, বারকোড স্ক্যানিং এবং সিএসভি ব্যাকআপ ব্যবস্থাপনার নির্দেশিকা।',
    },
    sections: [
      {
        id: 'stock-intro',
        title: { en: 'About Rob Personal Stock', bn: 'রব পার্সোনাল স্টক পরিচিতি' },
        content: {
          en: 'Rob Personal Stock is an offline-first inventory tracker. You can add items, set minimum thresholds, scan barcodes, and export data without cloud dependency.',
          bn: 'রব পার্সোনাল স্টক একটি অফলাইন ইনভেন্টরি ট্র্যাকার। কোনো ক্লাউড ছাড়াই এতে আইটেম যুক্ত করা, কম স্টকের অ্যালার্ট সেট করা এবং সিএসভি ব্যাকআপ নেওয়া যায়।',
        },
      },
      {
        id: 'stock-usage',
        title: { en: 'Key Features & Instructions', bn: 'প্রধান সুবিধা ও ব্যবহারের নিয়ম' },
        type: 'steps',
        items: [
          { en: 'Adding Items: Tap (+) to enter item name, category, quantity, and optional expiration date.', bn: 'আইটেম যুক্তকরণ: নাম, ক্যাটাগরি, পরিমাণ এবং মেয়াদের তারিখ টাইপ করতে (+) বাটনে চাপুন।' },
          { en: 'Barcode Scanner: Tap the barcode icon to scan product barcodes using device camera.', bn: 'বারকোড স্ক্যানার: ফোনের ক্যামেরা দিয়ে বারেকোর্ড স্ক্যান করতে আইকনে ট্যাপ করুন।' },
          { en: 'Data Backup: Navigate to Settings > Export CSV to save a spreadsheet copy locally.', bn: 'ডেটা ব্যাকআপ: লোকাল স্প্রেডশীট কপি সেভ করতে সেটিংস > এক্সপোর্ট সিএসভি-তে যান।' },
        ],
      },
    ],
  },
  {
    id: 'doc-rob-music-player',
    slug: 'rob-music-player',
    category: 'apps',
    appId: 'rob-music-player',
    title: {
      en: 'RobMusicPlayer Documentation',
      bn: 'রবমিউজিকপ্লেয়ার ম্যানুয়াল ও নির্দেশিকা',
    },
    description: {
      en: 'User guide for audio indexing, equalizer setup, and lockscreen controls.',
      bn: 'অডিও স্ক্যানিং, ইকুয়ালাইজার সেটআপ এবং লকস্ক্রিন প্লেব্যাক নির্দেশিকা।',
    },
    sections: [
      {
        id: 'music-intro',
        title: { en: 'About RobMusicPlayer', bn: 'রবমিউজিকপ্লেয়ার পরিচিতি' },
        content: {
          en: 'RobMusicPlayer indexes local audio files automatically and provides custom 10-band equalizer presets without advertisements.',
          bn: 'রবমিউজিকপ্লেয়ার কোনো বিজ্ঞাপন ছাড়াই ফোনে থাকা এমপিথ্রি এবং অডিও ফাইল স্ক্যান ও সাউন্ড টিউনিং সুবিধা দেয়।',
        },
      },
    ],
  },
  {
    id: 'doc-rob-drop-offline',
    slug: 'rob-drop-offline',
    category: 'apps',
    appId: 'rob-drop-offline',
    title: {
      en: 'Rob Drop Offline Documentation',
      bn: 'রব ড্রপ অফলাইন ম্যানুয়াল ও নির্দেশিকা',
    },
    description: {
      en: 'Guide for high-speed Wi-Fi hotspot peer-to-peer file transfers.',
      bn: 'হাই-স্পিড ওয়াই-ফাই হটস্পট দিয়ে ফাইল শেয়ারিংয়ের নির্দেশনা।',
    },
    sections: [
      {
        id: 'drop-intro',
        title: { en: 'About Rob Drop Offline', bn: 'রব ড্রপ অফলাইন পরিচিতি' },
        content: {
          en: 'Rob Drop Offline transfers large video files and photos between Android devices over direct Wi-Fi hotspot connections without using cellular internet.',
          bn: 'রব ড্রপ অফলাইন মোবাইল ডেটা খরচ করা ছাড়াই ওয়াই-ফাই হটস্পটে দুটি ডিভাইসের মধ্যে দ্রুত ফাইল আদান প্রদান করে।',
        },
      },
    ],
  },
  {
    id: 'doc-rob-warranty-wallet',
    slug: 'rob-warranty-wallet',
    category: 'apps',
    appId: 'rob-warranty-wallet',
    title: {
      en: 'Rob Warranty Wallet Documentation',
      bn: 'রব ওয়ারেন্টি ওয়ালেট ম্যানুয়াল ও নির্দেশিকা',
    },
    description: {
      en: 'Guide for saving receipt photos and setting warranty expiration alerts.',
      bn: 'পণ্য রসিদ ও ওয়ারেন্টির মেয়াদ শেষের অ্যালার্ট নোটিফিকেশন সহায়িকা।',
    },
    sections: [
      {
        id: 'warranty-intro',
        title: { en: 'About Rob Warranty Wallet (Beta)', bn: 'রব ওয়ারেন্টি ওয়ালেট পরিচিতি (বিটা)' },
        content: {
          en: 'Rob Warranty Wallet stores digitized purchase memos and triggers notifications 30 days prior to warranty expiration.',
          bn: 'রব ওয়ারেন্টি ওয়ালেটে মেমো সংরক্ষণ এবং মেয়াদ শেষ হওয়ার আগে ওয়ারেন্টি অ্যালার্ট পাওয়া যায়।',
        },
      },
    ],
  },
  {
    id: 'doc-rob-house-rental',
    slug: 'rob-house-rental',
    category: 'apps',
    appId: 'rob-house-rental',
    title: {
      en: 'Rob House Rental Documentation',
      bn: 'রব হাউস রেন্টাল ম্যানুয়াল ও নির্দেশিকা',
    },
    description: {
      en: 'Overview of tenant directory and rent due tracking system.',
      bn: 'ভাড়াটিয়া ডিরেক্টরি এবং মাসিক ভাড়ার হিসাব ট্র্যাকিং সংক্রান্ত তথ্য।',
    },
    sections: [
      {
        id: 'rental-status',
        title: { en: 'Application Status', bn: 'অ্যাপ্লিকেশনের বর্তমান অবস্থা' },
        type: 'callout',
        calloutType: 'note',
        content: {
          en: 'Detailed user documentation is currently being compiled alongside active software development for Rob House Rental.',
          bn: 'রব হাউস রেন্টাল অ্যাপটি বর্তমানে উন্নয়নাধীন থাকায় পূর্ণাঙ্গ ইউজার ম্যানুয়াল প্রস্তুত করা হচ্ছে।',
        },
      },
    ],
  },
];
