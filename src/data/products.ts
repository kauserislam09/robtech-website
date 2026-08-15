import type { Product } from '../types/product';
import { validateProductData } from '../utils/productValidation';

export const PRODUCTS: Product[] = [
  {
    id: 'rob-personal-stock',
    slug: 'rob-personal-stock',
    name: 'Rob Personal Stock',
    tagline: {
      en: 'Smart personal inventory & stock tracking.',
      bn: 'স্মার্ট ব্যক্তিগত ইনভেন্টরি এবং স্টক ট্র্যাকিং।',
    },
    shortDescription: {
      en: 'Track item quantities, expiration dates, and pantry stock offline.',
      bn: 'আইটেমের পরিমাণ, মেয়াদের তারিখ এবং স্টক অফলাইনে ট্র্যাক করুন।',
    },
    description: {
      en: 'Rob Personal Stock is an offline-first inventory management application built for household pantry tracking, office supplies, and personal items. It features automatic low-stock warnings, barcode scanning support, and CSV data export without requiring any cloud server or user account.',
      bn: 'রব পার্সোনাল স্টক একটি অফলাইন-ফার্স্ট ইনভেন্টরি ম্যানেজমেন্ট অ্যাপ যা ঘরের জিনিসপত্র, অফিসের সামগ্রী এবং ব্যক্তিগত মালামাল ট্র্যাকিংয়ের জন্য তৈরি। এতে কোনো ক্লাউড সার্ভার বা অ্যাকাউন্ট ছাড়াই কম স্টকের সতর্কতা নোটিফিকেশন, বারকোড স্ক্যানিং এবং সিএসভি এক্সপোর্ট সুবিধা রয়েছে।',
    },
    category: 'Productivity',
    platforms: ['android'],
    status: 'stable',
    featured: true,
    latestVersion: '1.2.0',
    apkSize: '14.7 MB',
    downloadUrl: 'https://github.com/kauserislam09/Rob-Personal-Stock/releases',
    documentationUrl: '/docs',
    privacyUrl: '/privacy',
    supportUrl: '/support',
    features: [
      {
        id: 'feat-stock-1',
        title: { en: 'Offline Stock Management', bn: 'অফলাইন স্টক ম্যানেজমেন্ট' },
        description: { en: 'Keep complete control of your data locally without requiring internet access.', bn: 'ইন্টারনেট ছাড়াই আপনার ডেটা সম্পূর্ণ অফলাইনে ডিভাইসে সুরক্ষিত রাখুন।' },
      },
      {
        id: 'feat-stock-2',
        title: { en: 'Low Stock Alerts', bn: 'কম স্টকের সতর্কতা' },
        description: { en: 'Set minimum quantity thresholds and receive automatic notifications.', bn: 'সর্বনিম্ন পরিমাণের সীমা নির্ধারণ করুন এবং স্টক কমলে নোটিফিকেশন পান।' },
      },
      {
        id: 'feat-stock-3',
        title: { en: 'Barcode & QR Scanner', bn: 'বারকোড ও কিউআর স্ক্যানার' },
        description: { en: 'Scan items quickly using your device camera for fast updates.', bn: 'ক্যামেরা ব্যবহার করে দ্রুত পণ্য স্ক্যান ও আপডেট করুন।' },
      },
      {
        id: 'feat-stock-4',
        title: { en: 'CSV Backup & Export', bn: 'সিএসভি ব্যাকআপ ও এক্সপোর্ট' },
        description: { en: 'Export your inventory tables to standard spreadsheet formats anytime.', bn: 'যেকোনো সময় আপনার ইনভেন্টরি স্প্রেডশীট ফরম্যাটে ব্যাকআপ বা এক্সপোর্ট করুন।' },
      },
    ],
    requirements: [
      { label: { en: 'Android Version', bn: 'অ্যান্ড্রয়েড সংস্করণ' }, value: { en: 'Android 8.0 (Oreo) or higher', bn: 'অ্যান্ড্রয়েড ৮.০ বা তার উপরে' } },
      { label: { en: 'Storage Space', bn: 'স্টোরেজ স্পেস' }, value: { en: '25 MB free space', bn: '২৫ এমবি ফাঁকা জায়গা' } },
      { label: { en: 'Camera Permission', bn: 'ক্যামেরা পারমিশন' }, value: { en: 'Required for barcode scanning only', bn: 'শুধুমাত্র বারকোড স্ক্যানের জন্য প্রয়োজন' } },
      { label: { en: 'Internet Requirement', bn: 'ইন্টারনেট প্রয়োজন' }, value: { en: 'None (100% Offline App)', bn: 'প্রয়োজন নেই (১০০% অফলাইন অ্যাপ)' } },
    ],
    screenshots: [
      {
        id: 'shot-stock-1',
        src: '/images/screenshots/rob-personal-stock-1.svg',
        alt: { en: 'Rob Personal Stock main dashboard screenshot', bn: 'রব পার্সোনাল স্টক মূল ড্যাশবোর্ড স্ক্রিনশট' },
        caption: { en: 'Main Inventory Dashboard & Stock Warning List', bn: 'প্রধান ইনভেন্টরি ড্যাশবোর্ড এবং স্টক ওয়ার্নিং লিস্ট' },
      },
      {
        id: 'shot-stock-2',
        src: '/images/screenshots/rob-personal-stock-2.svg',
        alt: { en: 'Rob Personal Stock item details screenshot', bn: 'রব পার্সোনাল স্টক আইটেম ডিটেইলস স্ক্রিনশট' },
        caption: { en: 'Item Quantity & Expiration Date Management', bn: 'পণ্য পরিমাণ এবং মেয়াদ শেষের তারিখ পরিচালনা' },
      },
    ],
  },
  {
    id: 'rob-music-player',
    slug: 'rob-music-player',
    name: 'RobMusicPlayer',
    tagline: {
      en: 'Pure, distraction-free local audio player.',
      bn: 'বিশুদ্ধ এবং সেরা লোকাল মিউজিক প্লেয়ার।',
    },
    shortDescription: {
      en: 'Lightweight offline audio player built for high performance.',
      bn: 'উচ্চ পারফরম্যান্সের জন্য তৈরি হালকা অফলাইন অডিও প্লেয়ার।',
    },
    description: {
      en: 'RobMusicPlayer provides instant local music scanning, custom equalizer presets, and a clean modern user interface without advertisements or battery drain.',
      bn: 'রবমিউজিকপ্লেয়ার কোনো বিজ্ঞাপন বা চার্জ অপচয় ছাড়াই দ্রুত গান স্ক্যানিং, কাস্টম ইকুয়ালাইজার এবং আধুনিক ইন্টারফেস প্রদান করে।',
    },
    category: 'Media & Entertainment',
    platforms: ['android'],
    status: 'stable',
    featured: true,
    latestVersion: '2.0.1',
    apkSize: '8.5 MB',
    downloadUrl: 'https://github.com/kauserislam09/RobMusicPlayer/releases',
    documentationUrl: '/docs',
    privacyUrl: '/privacy',
    supportUrl: '/support',
    features: [
      {
        id: 'feat-music-1',
        title: { en: 'Instant Audio Scanning', bn: 'দ্রুত অডিও স্ক্যানিং' },
        description: { en: 'Automatically indexes MP3, FLAC, WAV, and AAC files in milliseconds.', bn: 'মুহূর্তের মধ্যে এমপিথ্রি, ফ্ল্যাক এবং ওয়াভ ফাইল ইনডেক্স করে।' },
      },
      {
        id: 'feat-music-2',
        title: { en: '10-Band Equalizer', bn: '১০-ব্যান্ড ইকুয়ালাইজার' },
        description: { en: 'Customize sound output with bass boost and equalizer presets.', bn: 'বেস বুস্ট এবং কাস্টম প্রিসেট দিয়ে সাউন্ড নিয়ন্ত্রণ করুন।' },
      },
      {
        id: 'feat-music-3',
        title: { en: 'Lockscreen & Background Controls', bn: 'লকস্ক্রিন ও ব্যাকগ্রাউন্ড নিয়ন্ত্রণ' },
        description: { en: 'Full playback notification controls on Android lock screen.', bn: 'অ্যান্ড্রয়েড লকস্ক্রিনে গান নিয়ন্ত্রণ সুবিধা।' },
      },
    ],
    requirements: [
      { label: { en: 'Android Version', bn: 'অ্যান্ড্রয়েড সংস্করণ' }, value: { en: 'Android 7.0 (Nougat) or higher', bn: 'অ্যান্ড্রয়েড ৭.০ বা তার উপরে' } },
      { label: { en: 'Storage Space', bn: 'স্টোরেজ স্পেস' }, value: { en: '15 MB free space', bn: '১৫ এমবি ফাঁকা জায়গা' } },
      { label: { en: 'Storage Permission', bn: 'স্টোরেজ পারমিশন' }, value: { en: 'Required to scan local audio files', bn: 'অডিও ফাইল পড়ার জন্য প্রয়োজন' } },
    ],
  },
  {
    id: 'rob-drop-offline',
    slug: 'rob-drop-offline',
    name: 'Rob Drop Offline',
    tagline: {
      en: 'Instant offline file transfer over local Wi-Fi.',
      bn: 'লোকাল ওয়াই-ফাই দিয়ে দ্রুত ফাইল শেয়ারিং।',
    },
    shortDescription: {
      en: 'Send photos, videos, and files between devices at maximum Wi-Fi speed.',
      bn: 'সর্বোচ্চ ওয়াই-ফাই স্পিডে ডিভাইসের মধ্যে ফাইল পাঠান।',
    },
    description: {
      en: 'Rob Drop Offline establishes direct peer-to-peer local transfers over Wi-Fi Hotspot without consuming mobile data or routing files to external servers.',
      bn: 'রব ড্রপ অফলাইন মোবাইল ডেটা ব্যবহার ছাড়াই ওয়াই-ফাই হটস্পট দিয়ে ডিভাইস থেকে ডিভাইসে দ্রুত ফাইল স্থানান্তর করে।',
    },
    category: 'Utilities',
    platforms: ['android'],
    status: 'stable',
    featured: true,
    latestVersion: '1.0.4',
    apkSize: '6.2 MB',
    downloadUrl: 'https://github.com/kauserislam09/Rob-Drop-Offline/releases',
    documentationUrl: '/docs',
    privacyUrl: '/privacy',
    supportUrl: '/support',
    features: [
      {
        id: 'feat-drop-1',
        title: { en: 'High-Speed Wi-Fi Transfers', bn: 'হাই-স্পিড ওয়াই-ফাই ফাইল ট্রান্সফার' },
        description: { en: 'Transfer photos, 4K videos, and documents up to 40 MB/s.', bn: 'ছবি, ফোর-কে ভিডিও এবং ফাইল সেকেন্ডে ৪০ এমবি স্পিডে শেয়ার করুন।' },
      },
      {
        id: 'feat-drop-2',
        title: { en: 'Zero Cellular Data Usage', bn: 'কোনো ডেটা খরচ নেই' },
        description: { en: 'Transfers run entirely on local wireless hotspot connections.', bn: 'সম্পূর্ণ লোকাল ওয়াই-ফাই কানেকশনে ফাইল ট্রান্সফার হয়।' },
      },
    ],
    requirements: [
      { label: { en: 'Android Version', bn: 'অ্যান্ড্রয়েড সংস্করণ' }, value: { en: 'Android 8.0 or higher', bn: 'অ্যান্ড্রয়েড ৮.০ বা তার উপরে' } },
      { label: { en: 'Wi-Fi / Hotspot', bn: 'ওয়াই-ফাই / হটস্পট' }, value: { en: 'Required for P2P connection', bn: 'ডিভাইস কানেকশনের জন্য প্রয়োজন' } },
    ],
  },
  {
    id: 'rob-warranty-wallet',
    slug: 'rob-warranty-wallet',
    name: 'Rob Warranty Wallet',
    tagline: {
      en: 'Never lose a purchase receipt or warranty again.',
      bn: 'ক্রয় রসিদ এবং ওয়ারেন্টি কার্ড সহজে সংরক্ষণ করুন।',
    },
    shortDescription: {
      en: 'Digital organizer for product receipts, warranty cards, and claim dates.',
      bn: 'পণ্য রসিদ, ওয়ারেন্টি কার্ড এবং মেয়াদের তারিখের ডিজিটাল সংগঠক।',
    },
    description: {
      en: 'Rob Warranty Wallet lets users snap purchase receipts, record warranty durations, and receive automated expiration reminders before warranty periods elapse.',
      bn: 'রব ওয়ারেন্টি ওয়ালেট দিয়ে মেমো স্ক্যান এবং ওয়ারেন্টির মেয়াদ শেষ হওয়ার আগে স্বয়ংক্রিয় সতর্কতা নোটিফিকেশন পাওয়া যায়।',
    },
    category: 'Finance & Utilities',
    platforms: ['android'],
    status: 'beta',
    featured: false,
    latestVersion: '0.9.0-beta',
    apkSize: '11.1 MB',
    downloadUrl: 'https://github.com/kauserislam09/Rob-Warranty-Wallet/releases',
    documentationUrl: '/docs',
    privacyUrl: '/privacy',
    supportUrl: '/support',
    features: [
      {
        id: 'feat-war-1',
        title: { en: 'Receipt Photo Vault', bn: 'রসিদের ফটো ভল্ট' },
        description: { en: 'Store high resolution receipt images locally on your phone.', bn: 'ক্রয় রসিদের ছবি ফোনের মেমোরিতে নিরাপদে রাখুন।' },
      },
      {
        id: 'feat-war-2',
        title: { en: 'Expiry Notifications', bn: 'মেয়াদ শেষের নোটিফিকেশন' },
        description: { en: 'Get reminders 30 days and 7 days before warranty expiration.', bn: 'ওয়ারেন্টির মেয়াদ শেষ হওয়ার ৩০ দিন ও ৭ দিন আগে নোটিফিকেশন পান।' },
      },
    ],
    requirements: [
      { label: { en: 'Android Version', bn: 'অ্যান্ড্রয়েড সংস্করণ' }, value: { en: 'Android 8.0 or higher', bn: 'অ্যান্ড্রয়েড ৮.০ বা তার উপরে' } },
    ],
  },
  {
    id: 'rob-house-rental',
    slug: 'rob-house-rental',
    name: 'Rob House Rental',
    tagline: {
      en: 'Simplified tenant & rent management for landlords.',
      bn: 'বাড়িওয়ালাদের জন্য ভাড়াটিয়া ও ভাড়া ব্যবস্থাপনার সহজ সমাধান।',
    },
    shortDescription: {
      en: 'Manage tenant details, utility bill tracking, and monthly rent logs.',
      bn: 'ভাড়াটে বিবরণ, বিদ্যুৎ বিল ট্র্যাকিং এবং মাসিক ভাড়ার হিসাব রাখুন।',
    },
    description: {
      en: 'Rob House Rental streamlines property unit management, monthly payment status tracking, and automated receipt generation for landlords.',
      bn: 'রব হাউস রেন্টাল বাড়িওয়ালাদের জন্য ফ্ল্যাট ভাড়া, বিদ্যুৎ বিলের হিসাব এবং রসিদ তৈরির প্রক্রিয়া সহজ করে তোলে।',
    },
    category: 'Management',
    platforms: ['android'],
    status: 'stable',
    featured: true,
    latestVersion: '1.0.0',
    apkSize: '9.8 MB',
    downloadUrl: 'https://github.com/kauserislam09/Rob-House-Rental/releases/tag/v1.0.0',
    documentationUrl: '/docs',
    privacyUrl: '/privacy',
    supportUrl: '/support',
    features: [
      {
        id: 'feat-rent-1',
        title: { en: 'Tenant Directory', bn: 'ভাড়াটিয়া ডিরেক্টরি' },
        description: { en: 'Store tenant contact details, NID copies, and agreement dates.', bn: 'ভাড়াটিয়াদের জাতীয় পরিচয়পত্র ও চুক্তির তথ্য সংরক্ষণ করুন।' },
      },
      {
        id: 'feat-rent-2',
        title: { en: 'Monthly Due Tracker', bn: 'মাসিক ভাড়ার হিসাব' },
        description: { en: 'Track paid, pending, and overdue rent payments.', bn: 'পরিশোধিত ও বকেয়া ভাড়ার হিসাব আপডেট রাখুন।' },
      },
    ],
    requirements: [
      { label: { en: 'Android Version', bn: 'অ্যান্ড্রয়েড সংস্করণ' }, value: { en: 'Android 8.0 or higher', bn: 'অ্যান্ড্রয়েড ৮.০ বা তার উপরে' } },
    ],
  },
];

// Validate data integrity in development mode
validateProductData(PRODUCTS);
