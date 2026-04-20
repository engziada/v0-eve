// Car models available in Egypt
export const carModels = [
  { id: 'all', name: 'All Models', nameAr: 'كل الموديلات' },
  { id: 'seal', name: 'Seal', nameAr: 'سيل' },
  { id: 'dolphin', name: 'Dolphin', nameAr: 'دولفين' },
  { id: 'atto3', name: 'Atto 3', nameAr: 'أتو 3' },
  { id: 'han', name: 'Han', nameAr: 'هان' },
  { id: 'tang', name: 'Tang', nameAr: 'تانج' },
  { id: 'song-plus', name: 'Song Plus', nameAr: 'سونج بلس' },
  { id: 'leopard', name: 'Leopard', nameAr: 'ليوبارد' },
  { id: 'denza', name: 'Denza', nameAr: 'دينزا' },
] as const;

export type CarModelId = (typeof carModels)[number]['id'];

// App categories
export const appCategories = [
  { id: 'all', name: 'All Apps', nameAr: 'كل التطبيقات' },
  { id: 'navigation', name: 'Navigation', nameAr: 'الملاحة' },
  { id: 'music', name: 'Music', nameAr: 'الموسيقى' },
  { id: 'video', name: 'Video', nameAr: 'الفيديو' },
  { id: 'tools', name: 'Tools', nameAr: 'الأدوات' },
  { id: 'launchers', name: 'Launchers', nameAr: 'المشغلات' },
  { id: 'beta', name: 'Beta Zone', nameAr: 'منطقة بيتا' },
] as const;

export type AppCategoryId = (typeof appCategories)[number]['id'];

// Apps data with real links from research
export interface App {
  id: string;
  name: string;
  description: string;
  descriptionAr: string;
  category: AppCategoryId;
  compatibleModels: CarModelId[];
  downloadUrl: string;
  version?: string;
  isMod?: boolean;
  isOfficial?: boolean;
  warning?: string;
  warningAr?: string;
}

export const apps: App[] = [
  // Navigation Apps
  {
    id: 'google-maps',
    name: 'Google Maps',
    description: 'Official Google Maps for navigation',
    descriptionAr: 'خرائط جوجل الرسمية للملاحة',
    category: 'navigation',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps',
    isOfficial: true,
  },
  {
    id: 'waze',
    name: 'Waze',
    description: 'Community-based navigation with real-time traffic',
    descriptionAr: 'ملاحة مجتمعية مع حركة المرور في الوقت الفعلي',
    category: 'navigation',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.waze',
    isOfficial: true,
  },
  {
    id: 'sygic',
    name: 'Sygic GPS Navigation',
    description: 'Offline maps and navigation',
    descriptionAr: 'خرائط وملاحة بدون انترنت',
    category: 'navigation',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.sygic.aura',
    isOfficial: true,
  },

  // Music Apps
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Music streaming service',
    descriptionAr: 'خدمة بث الموسيقى',
    category: 'music',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.spotify.music',
    isOfficial: true,
  },
  {
    id: 'youtube-music',
    name: 'YouTube Music',
    description: 'Music streaming from YouTube',
    descriptionAr: 'بث الموسيقى من يوتيوب',
    category: 'music',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.music',
    isOfficial: true,
  },
  {
    id: 'anghami',
    name: 'Anghami',
    description: 'Arabic music streaming platform',
    descriptionAr: 'منصة بث الموسيقى العربية',
    category: 'music',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.anghami',
    isOfficial: true,
  },
  {
    id: 'apple-music',
    name: 'Apple Music',
    description: 'Apple music streaming service',
    descriptionAr: 'خدمة بث موسيقى أبل',
    category: 'music',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.apple.android.music',
    isOfficial: true,
  },
  {
    id: 'poweramp',
    name: 'Poweramp',
    description: 'Powerful music player for local files',
    descriptionAr: 'مشغل موسيقى قوي للملفات المحلية',
    category: 'music',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.maxmpz.audioplayer',
    isOfficial: true,
  },

  // Video Apps
  {
    id: 'youtube',
    name: 'YouTube',
    description: 'Official YouTube app',
    descriptionAr: 'تطبيق يوتيوب الرسمي',
    category: 'video',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.google.android.youtube',
    isOfficial: true,
  },
  {
    id: 'youtube-revanced',
    name: 'YouTube ReVanced',
    description: 'Modified YouTube with ad-blocking and extra features',
    descriptionAr: 'يوتيوب معدل مع حجب الإعلانات وميزات إضافية',
    category: 'video',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://revanced.app/',
    isMod: true,
    warning: 'Requires microG for login',
    warningAr: 'يتطلب microG لتسجيل الدخول',
  },
  {
    id: 'netflix',
    name: 'Netflix',
    description: 'Streaming movies and TV shows',
    descriptionAr: 'بث الأفلام والمسلسلات',
    category: 'video',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.netflix.mediaclient',
    isOfficial: true,
  },
  {
    id: 'shahid',
    name: 'Shahid VIP',
    description: 'Arabic streaming platform',
    descriptionAr: 'منصة بث عربية',
    category: 'video',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=app.shahid',
    isOfficial: true,
  },
  {
    id: 'vlc',
    name: 'VLC Media Player',
    description: 'Universal media player',
    descriptionAr: 'مشغل وسائط عالمي',
    category: 'video',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=org.videolan.vlc',
    isOfficial: true,
  },

  // Tools & Utilities
  {
    id: 'microg-services',
    name: 'microG Services',
    description: 'Google Play Services replacement for modified apps',
    descriptionAr: 'بديل خدمات جوجل للتطبيقات المعدلة',
    category: 'tools',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://microg.org/download.html',
    warning: 'Required for YouTube ReVanced login',
    warningAr: 'مطلوب لتسجيل الدخول في YouTube ReVanced',
  },
  {
    id: 'microg-companion',
    name: 'microG Companion',
    description: 'Companion app for microG services',
    descriptionAr: 'تطبيق مرافق لخدمات microG',
    category: 'tools',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://appgallery.huawei.com/app/C102804259',
  },
  {
    id: 'sd-maid',
    name: 'SD Maid SE',
    description: 'System cleaner and file manager',
    descriptionAr: 'منظف النظام ومدير الملفات',
    category: 'tools',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=eu.darken.sdmse',
    isOfficial: true,
  },
  {
    id: 'anexplorer',
    name: 'AnExplorer File Manager',
    description: 'File manager optimized for Android Automotive',
    descriptionAr: 'مدير ملفات محسن لأندرويد أوتوموتيف',
    category: 'tools',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus'],
    downloadUrl: 'https://anexplorer.io/device/android-automotive/byd',
    isOfficial: true,
  },
  {
    id: 'silentinstaller',
    name: 'SilentInstaller',
    description: 'Install APKs silently on BYD Leopard/Denza',
    descriptionAr: 'تثبيت التطبيقات بصمت على ليوبارد/دينزا',
    category: 'tools',
    compatibleModels: ['leopard', 'denza'],
    downloadUrl: 'https://t.me/just_byd',
    warning: 'For Leopard/Denza only - USB FAT32 required',
    warningAr: 'فقط لليوبارد/دينزا - يتطلب USB بتنسيق FAT32',
  },
  {
    id: 'apkpure',
    name: 'APKPure',
    description: 'Alternative app store for APK downloads',
    descriptionAr: 'متجر بديل لتحميل التطبيقات',
    category: 'tools',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://apkpure.com/apkpure/com.apkpure.aegon',
  },

  // Launchers
  {
    id: 'carwebguru',
    name: 'CarWebGuru Launcher',
    description: 'Customizable car launcher with themes and widgets',
    descriptionAr: 'مشغل سيارات قابل للتخصيص مع سمات وأدوات',
    category: 'launchers',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.softartstudio.carwebguru',
    version: '3.5.9',
    isOfficial: true,
  },
  {
    id: 'agama',
    name: 'AGAMA Car Launcher',
    description: 'Clean and fast car launcher for head units',
    descriptionAr: 'مشغل سيارات نظيف وسريع لوحدات الرأس',
    category: 'launchers',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=altergames.carlauncher',
    isOfficial: true,
  },
  {
    id: 'car-launcher-pro',
    name: 'Car Launcher Pro',
    description: 'Professional car launcher with OBD support',
    descriptionAr: 'مشغل سيارات احترافي مع دعم OBD',
    category: 'launchers',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.autolauncher.motorcar.free',
    isOfficial: true,
  },

  // Beta Zone
  {
    id: 'beta-telegram',
    name: 'Beta Apps Channel',
    description: 'Experimental apps from BYD Apps & OTA channel',
    descriptionAr: 'تطبيقات تجريبية من قناة BYD Apps & OTA',
    category: 'beta',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus', 'leopard', 'denza'],
    downloadUrl: 'https://t.me/just_byd',
    warning: 'Unstable - May cause issues',
    warningAr: 'غير مستقر - قد يسبب مشاكل',
  },
];

// Firmware data with real links
export interface Firmware {
  id: string;
  name: string;
  dilink: string;
  description: string;
  descriptionAr: string;
  compatibleModels: CarModelId[];
  downloadUrl: string;
  version?: string;
  chipset?: string;
}

export const firmwares: Firmware[] = [
  {
    id: 'atto3-global',
    name: 'ATTO 3 Global Factory Image',
    dilink: 'DiLink 3.0',
    description: 'Official factory image for ATTO 3 global models',
    descriptionAr: 'صورة المصنع الرسمية لموديلات أتو 3 العالمية',
    compatibleModels: ['atto3'],
    downloadUrl: 'https://github.com/BYDcar/BYDGlobalFactoryImages1',
    version: 'Di3.0_13.1.32.2212081.1_0',
    chipset: 'msm8953_64',
  },
  {
    id: 'dolphin-firmware',
    name: 'Dolphin Firmware',
    dilink: 'DiLink 3.0',
    description: 'Stock firmware for BYD Dolphin (13.x chipset)',
    descriptionAr: 'البرنامج الثابت الأصلي لدولفين',
    compatibleModels: ['dolphin'],
    downloadUrl: 'https://github.com/BYDcar/BYDPackagesByChip2',
    version: 'Di3.0_13.1.22',
    chipset: '13.x',
  },
  {
    id: 'seal-firmware',
    name: 'Seal Firmware',
    dilink: 'DiLink 4.0',
    description: 'Stock firmware for BYD Seal (21.x chipset)',
    descriptionAr: 'البرنامج الثابت الأصلي لسيل',
    compatibleModels: ['seal'],
    downloadUrl: 'https://github.com/BYDcar/BYDPackagesByChip3',
    version: 'Di4.0_1for2_21.1.14',
    chipset: '21.x',
  },
  {
    id: 'han-firmware',
    name: 'Han EV/DM Firmware',
    dilink: 'DiLink 3.0/4.0',
    description: 'Stock firmware for BYD Han models (multiple chipsets)',
    descriptionAr: 'البرنامج الثابت الأصلي لموديلات هان',
    compatibleModels: ['han'],
    downloadUrl: 'https://github.com/BYDcar/BYDPackagesByChip3',
    version: 'Multiple versions',
    chipset: '15.x/16.x/17.x/21.x',
  },
  {
    id: 'song-plus-firmware',
    name: 'Song Plus Firmware',
    dilink: 'DiLink 3.0',
    description: 'Stock firmware for BYD Song Plus',
    descriptionAr: 'البرنامج الثابت الأصلي لسونج بلس',
    compatibleModels: ['song-plus'],
    downloadUrl: 'https://github.com/BYDcar/BYDPackagesByChip2',
    version: 'Di3.0_13.1.22/15.1.7',
    chipset: '13.x/15.x',
  },
  {
    id: 'tang-firmware',
    name: 'Tang DM-p Firmware',
    dilink: 'DiLink 4.0',
    description: 'Stock firmware for BYD Tang',
    descriptionAr: 'البرنامج الثابت الأصلي لتانج',
    compatibleModels: ['tang'],
    downloadUrl: 'https://github.com/BYDcar/BYDPackagesByChip3',
    version: 'Di4.0_1for2_21.1.2',
    chipset: '21.x',
  },
  {
    id: 'repair-manuals',
    name: 'Repair Manuals Repository',
    dilink: 'All Versions',
    description: 'Complete repair manuals and dashboard firmware',
    descriptionAr: 'أدلة الإصلاح الكاملة وبرامج لوحة القيادة',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus'],
    downloadUrl: 'https://github.com/BYDcar/BYDRepairManual',
    version: 'Various',
  },
];

// Community links
export interface CommunityLink {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  platform: 'telegram' | 'youtube' | 'facebook' | 'forum' | 'website';
  url: string;
  members?: string;
  region?: string;
}

export const communityLinks: CommunityLink[] = [
  // Telegram Groups
  {
    id: 'byd-apps-ota',
    name: 'BYD Apps & OTA',
    nameAr: 'تطبيقات وتحديثات BYD',
    description: 'Apps, firmware and everything useful for BYD (21K+ members)',
    descriptionAr: 'تطبيقات وبرامج ثابتة وكل ما هو مفيد لـ BYD',
    platform: 'telegram',
    url: 'https://t.me/just_byd',
    members: '21,000+',
    region: 'Global',
  },
  {
    id: 'byd-ota-group',
    name: 'BYD OTA Discussion',
    nameAr: 'نقاش تحديثات BYD',
    description: 'Discussion group for BYD OTA updates',
    descriptionAr: 'مجموعة نقاش لتحديثات OTA',
    platform: 'telegram',
    url: 'https://t.me/byd_ota',
    region: 'Global',
  },
  {
    id: 'byd-chat',
    name: 'BYD Chat',
    nameAr: 'دردشة BYD',
    description: 'Discussion for HAN, TANG, SONG, SEAL, Dolphin models',
    descriptionAr: 'نقاش لموديلات هان وتانج وسونج وسيل ودولفين',
    platform: 'telegram',
    url: 'https://t.me/bydchat',
    members: '3,000+',
    region: 'Global',
  },
  {
    id: 'club-byd',
    name: 'Club BYD',
    nameAr: 'نادي BYD',
    description: 'Community for EV enthusiasts - sustainable mobility',
    descriptionAr: 'مجتمع لعشاق السيارات الكهربائية',
    platform: 'telegram',
    url: 'https://t.me/ClubBYD',
    region: 'Global',
  },
  {
    id: 'byd-ev-jordan',
    name: 'BYD EV Club Jordan',
    nameAr: 'نادي BYD الأردن',
    description: 'BYD community in Jordan (4.3K+ members)',
    descriptionAr: 'مجتمع BYD في الأردن',
    platform: 'telegram',
    url: 'https://t.me/BYD_EV_Club_Jordan',
    members: '4,300+',
    region: 'Jordan',
  },
  {
    id: 'byd-autovehicle',
    name: 'BYD AutoVehicle Group',
    nameAr: 'مجموعة BYD للسيارات',
    description: 'General BYD discussion group',
    descriptionAr: 'مجموعة نقاش عامة لـ BYD',
    platform: 'telegram',
    url: 'https://t.me/BYDautoVehicle',
    region: 'Global',
  },

  // YouTube
  {
    id: 'cars-by-maged',
    name: 'Cars by Maged',
    nameAr: 'سيارات مع ماجد',
    description: 'Egyptian car reviewer discussing EVs and range specs',
    descriptionAr: 'مراجع سيارات مصري يناقش السيارات الكهربائية',
    platform: 'youtube',
    url: 'https://www.youtube.com/@carsbymaged',
    region: 'Egypt',
  },

  // Forums
  {
    id: 'xda-byd',
    name: 'XDA Forums - BYD Multimedia',
    nameAr: 'منتديات XDA - وسائط BYD',
    description: 'Technical discussion for BYD head unit modifications',
    descriptionAr: 'نقاش تقني لتعديلات وحدة رأس BYD',
    platform: 'forum',
    url: 'https://xdaforums.com/t/byd-multimedia-install-apk.4541247/',
    region: 'Global',
  },

  // Official Websites
  {
    id: 'byd-egypt-official',
    name: 'BYD Egypt Official',
    nameAr: 'BYD مصر الرسمي',
    description: 'Official BYD Egypt website',
    descriptionAr: 'الموقع الرسمي لـ BYD مصر',
    platform: 'website',
    url: 'https://www.byd.com/en-eg',
    region: 'Egypt',
  },
  {
    id: 'byd-egypt-dealer',
    name: 'BYD Egypt Dealer',
    nameAr: 'وكيل BYD مصر',
    description: 'BYD Egypt dealer and service information',
    descriptionAr: 'معلومات الوكيل والخدمة',
    platform: 'website',
    url: 'https://bydegypt.com',
    region: 'Egypt',
  },
  {
    id: 'ellamotors-byd',
    name: 'Ella Motors - BYD Egypt',
    nameAr: 'إيلا موتورز - BYD مصر',
    description: 'BYD prices, specs and features in Egypt',
    descriptionAr: 'أسعار ومواصفات BYD في مصر',
    platform: 'website',
    url: 'https://egypt.ellamotors.com/new-cars/byd',
    region: 'Egypt',
  },
];

// Documentation links
export interface DocLink {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  type: 'manual' | 'guide' | 'repair' | 'technical';
  url: string;
  models?: CarModelId[];
}

export const documentationLinks: DocLink[] = [
  {
    id: 'byd-manuals',
    name: 'BYD Owner Manuals',
    nameAr: 'أدلة مالك BYD',
    description: 'Official owner manuals for all BYD models',
    descriptionAr: 'أدلة المالك الرسمية لجميع موديلات BYD',
    type: 'manual',
    url: 'https://electriccar-byd.com/en/manual',
    models: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song-plus'],
  },
  {
    id: 'han-manual-pdf',
    name: 'BYD Han Owner Manual (PDF)',
    nameAr: 'دليل مالك BYD هان',
    description: 'Complete owner manual for BYD Han',
    descriptionAr: 'دليل المالك الكامل لـ BYD هان',
    type: 'manual',
    url: 'https://www.bydqatar.com.qa/wp-content/uploads/2025/01/BYD-HAN-Owners-Manual-Left-hand-Drive-EN-240902-compressed.pdf',
    models: ['han'],
  },
  {
    id: 'repair-manuals',
    name: 'BYD Repair Manuals & Factory Images',
    nameAr: 'أدلة إصلاح وصور المصنع',
    description: 'GitHub repository with repair manuals and factory images',
    descriptionAr: 'مستودع GitHub مع أدلة الإصلاح وصور المصنع',
    type: 'repair',
    url: 'https://github.com/BYDcar/BYDRepairManual',
  },
  {
    id: 'firmware-github',
    name: 'BYD Firmware Repository',
    nameAr: 'مستودع برامج BYD الثابتة',
    description: 'Complete firmware collection organized by chip and model',
    descriptionAr: 'مجموعة كاملة من البرامج الثابتة',
    type: 'technical',
    url: 'https://github.com/BYDcar',
  },
  {
    id: 'anexplorer-byd',
    name: 'AnExplorer BYD Guide',
    nameAr: 'دليل AnExplorer لـ BYD',
    description: 'File manager installation guide for BYD Android Automotive',
    descriptionAr: 'دليل تثبيت مدير الملفات',
    type: 'guide',
    url: 'https://anexplorer.io/device/android-automotive/byd',
    models: ['seal', 'dolphin', 'atto3'],
  },
  {
    id: 'flashing-guide',
    name: 'Firmware Flashing Guide',
    nameAr: 'دليل تحديث البرنامج الثابت',
    description: 'Step-by-step guide for flashing BYD firmware via USB',
    descriptionAr: 'دليل خطوة بخطوة لتحديث البرنامج عبر USB',
    type: 'guide',
    url: 'https://github.com/BYDcar/BYDGlobalFactoryImages1/blob/main/README.md',
  },
];

// Guides/Tutorials
export interface Guide {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  steps: string[];
  stepsAr: string[];
  warning?: string;
  warningAr?: string;
}

export const guides: Guide[] = [
  {
    id: 'microg-install',
    title: 'Installing microG Services',
    titleAr: 'تثبيت خدمات microG',
    description: 'Required for YouTube ReVanced and other modified apps',
    descriptionAr: 'مطلوب لـ YouTube ReVanced والتطبيقات المعدلة الأخرى',
    steps: [
      'Check smartphone compatibility: EMUI 14.2 / HarmonyOS 4.2 or newer',
      'Delete any previous microG/Gbox installations. Use SD Maid SE to clear residues',
      'Install microG Services from AppGallery or microg.org',
      'Install microG Companion from AppGallery',
      'Grant all permissions to microG Services: Settings > Apps > microG Services',
      'Set Location to "Always Allow" and enable Overlay permission',
      'Repeat permissions for microG Companion',
    ],
    stepsAr: [
      'تحقق من توافق الهاتف: EMUI 14.2 / HarmonyOS 4.2 أو أحدث',
      'احذف أي تثبيتات سابقة لـ microG/Gbox. استخدم SD Maid SE لمسح البقايا',
      'قم بتثبيت microG Services من AppGallery أو microg.org',
      'قم بتثبيت microG Companion من AppGallery',
      'امنح جميع الأذونات لـ microG Services: الإعدادات > التطبيقات > microG Services',
      'اضبط الموقع على "السماح دائماً" وفعّل إذن التراكب',
      'كرر الأذونات لـ microG Companion',
    ],
    warning: 'Do not use Phone Clone or any transfer utility. Fresh install required.',
    warningAr: 'لا تستخدم Phone Clone أو أي أداة نقل. مطلوب تثبيت جديد.',
  },
  {
    id: 'silentinstaller',
    title: 'SilentInstaller for Leopard/Denza',
    titleAr: 'SilentInstaller لـ ليوبارد/دينزا',
    description: 'Install APKs silently via USB drive',
    descriptionAr: 'تثبيت التطبيقات بصمت عبر USB',
    steps: [
      'Download SilentInstaller.zip from the BYD Apps & OTA Telegram channel',
      'Extract the downloaded zip file',
      'Format a USB drive as FAT32',
      'Copy extracted files to the root of the USB drive',
      'Plug USB into your BYD Leopard or Denza',
      'Installation will start automatically',
    ],
    stepsAr: [
      'قم بتحميل SilentInstaller.zip من قناة BYD Apps & OTA على تيليجرام',
      'قم بفك ضغط الملف المحمل',
      'قم بتهيئة USB بتنسيق FAT32',
      'انسخ الملفات المستخرجة إلى جذر USB',
      'قم بتوصيل USB بسيارة ليوبارد أو دينزا',
      'سيبدأ التثبيت تلقائياً',
    ],
    warning: 'Only for BYD Leopard and Denza models. Credits: QATAR EV Channel',
    warningAr: 'فقط لموديلات ليوبارد ودينزا. الفضل: قناة قطر EV',
  },
  {
    id: 'firmware-flash',
    title: 'Flashing Stock Firmware',
    titleAr: 'تحديث البرنامج الثابت',
    description: 'Restore or update your BYD head unit firmware',
    descriptionAr: 'استعادة أو تحديث برنامج وحدة الرأس',
    steps: [
      'Download the firmware zip file for your model from GitHub',
      'Rename the file to UpdateFull.zip',
      'Format a USB drive as FAT32',
      'Create folder structure: BYDUpdatePackage/msm8953_64/',
      'Copy UpdateFull.zip to the created folder',
      'Plug USB into the car USB data port while system is running',
      'Wait for automatic recognition and update (~10 minutes)',
      'System will restart automatically when complete',
    ],
    stepsAr: [
      'قم بتحميل ملف البرنامج الثابت zip لموديلك من GitHub',
      'أعد تسمية الملف إلى UpdateFull.zip',
      'قم بتهيئة USB بتنسيق FAT32',
      'أنشئ هيكل المجلدات: BYDUpdatePackage/msm8953_64/',
      'انسخ UpdateFull.zip إلى المجلد المنشأ',
      'قم بتوصيل USB بمنفذ بيانات USB بالسيارة أثناء تشغيل النظام',
      'انتظر التعرف التلقائي والتحديث (~10 دقائق)',
      'سيعيد النظام التشغيل تلقائياً عند الانتهاء',
    ],
    warning: 'Alternative: Long press "Previous" + "Volume wheel" to enter engineering mode',
    warningAr: 'طريقة بديلة: اضغط مطولاً على "السابق" + "عجلة الصوت" للدخول لوضع الهندسة',
  },
];

// Navigation items
export const navItems = [
  { id: 'apps', name: 'Apps', nameAr: 'التطبيقات', href: '#apps' },
  { id: 'firmware', name: 'Firmware', nameAr: 'البرامج الثابتة', href: '#firmware' },
  { id: 'guides', name: 'Guides', nameAr: 'الأدلة', href: '#guides' },
  { id: 'docs', name: 'Documentation', nameAr: 'التوثيق', href: '#documentation' },
  { id: 'community', name: 'Community', nameAr: 'المجتمع', href: '#community' },
] as const;
