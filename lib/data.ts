// Stable download routes. Yandex files are resolved server-side so the UI
// doesn't rely on expiring downloader.disk.yandex.ru URLs.
const y = (p: string) => `/api/download?provider=yandex&path=${encodeURIComponent(`/${p}`)}`;

// ---------------------------------------------------------------------------
// Car models (referenced by apps and firmware)
// ---------------------------------------------------------------------------
export const carModels = [
  { id: "all", name: "All Models", nameAr: "كل الموديلات" },
  { id: "seal", name: "Seal", nameAr: "سيل" },
  { id: "dolphin", name: "Dolphin", nameAr: "دولفين" },
  { id: "atto3", name: "Atto 3 / Yuan Plus", nameAr: "أتو 3" },
  { id: "han", name: "Han EV / DM", nameAr: "هان" },
  { id: "tang", name: "Tang EV / DM", nameAr: "تانج" },
  { id: "song-plus", name: "Song Plus / Pro", nameAr: "سونج بلس" },
  { id: "shark", name: "Shark", nameAr: "شارك" },
  { id: "leopard", name: "Leopard / Denza", nameAr: "ليوبارد / دينزا" },
] as const;

export type CarModelId = (typeof carModels)[number]["id"];
const ALL_MODELS: CarModelId[] = [
  "seal",
  "dolphin",
  "atto3",
  "han",
  "tang",
  "song-plus",
  "shark",
  "leopard",
];

// ---------------------------------------------------------------------------
// App categories (used by navbar submenu + filters)
// ---------------------------------------------------------------------------
export const appCategories = [
  { id: "all", name: "All Apps", nameAr: "كل التطبيقات" },
  { id: "navigation", name: "Navigation", nameAr: "الملاحة" },
  { id: "music", name: "Music & Radio", nameAr: "الموسيقى والراديو" },
  { id: "video", name: "Video", nameAr: "الفيديو" },
  { id: "launchers", name: "Launchers & Themes", nameAr: "المشغلات والسمات" },
  { id: "tools", name: "Tools & System", nameAr: "الأدوات والنظام" },
  { id: "carplay", name: "CarPlay", nameAr: "كار بلاي" },
  { id: "communication", name: "Communication", nameAr: "التواصل" },
  { id: "beta", name: "Beta Zone", nameAr: "منطقة بيتا" },
] as const;

export type AppCategoryId = (typeof appCategories)[number]["id"];

// ---------------------------------------------------------------------------
// Apps — all entries are direct APK downloads (Play Store does not run on BYD HU)
// Links point to the newest upstream version when available, or to the Yandex
// drive mirror as a fallback.
// ---------------------------------------------------------------------------
export interface App {
  id: string;
  name: string;
  description: string;
  descriptionAr: string;
  category: AppCategoryId;
  compatibleModels: CarModelId[];
  downloadUrl: string;
  source:
    | "Yandex"
    | "Upstream"
    | "GitHub"
    | "GitLab"
    | "APKMirror"
    | "APKPure"
    | "Official";
  version?: string;
  fileSize?: string;
  lastUpdated?: string;
  isMod?: boolean;
  isOfficial?: boolean;
  warning?: string;
  warningAr?: string;
}

import appsData from "../public/data/apps.json";

export const apps: App[] = appsData as App[];

export interface Firmware {
  id: string;
  name: string;
  dilink: string;
  description: string;
  descriptionAr: string;
  compatibleModels: CarModelId[];
  downloadUrl: string;
  version: string;
  chipset?: string;
  releaseDate?: string;
}

export const firmwares: Firmware[] = [
  {
    id: "di1-latest",
    name: "DiLink 1.0 (VP128)",
    dilink: "DiLink 1.0",
    description: "First-generation BYD head unit firmware",
    descriptionAr: "الجيل الأول من برامج وحدات BYD",
    compatibleModels: ["han", "tang", "song-plus"],
    downloadUrl: y("Firmware Dilink/By the list/Di1/VP128_1.50.2106240.7.2107060.zip"),
    version: "1.50.2106240.7",
    chipset: "VP128",
    releaseDate: "2021-07",
  },
  {
    id: "di2-latest",
    name: "DiLink 2.1L (5.x chipset)",
    dilink: "DiLink 2.0",
    description: "Second-generation DiLink for earlier EV / DM models",
    descriptionAr: "الجيل الثاني من DiLink للموديلات الأقدم",
    compatibleModels: ["han", "tang", "song-plus"],
    downloadUrl: y("Firmware Dilink/By the list/Di2/5.x chipset/Di2.1L_canfd_with2in1_SOP_ota_5_signed_user_2211180.2211181.zip"),
    version: "2.1L OTA 5 (2211181)",
    chipset: "5.x CAN-FD",
    releaseDate: "2022-11",
  },
  {
    id: "di3-china-latest",
    name: "DiLink 3.0 China (18.x)",
    dilink: "DiLink 3.0",
    description: "Latest DiLink 3.0 for Chinese-market builds",
    descriptionAr: "أحدث DiLink 3.0 للسوق الصيني",
    compatibleModels: ["atto3", "dolphin", "song-plus", "han", "tang"],
    downloadUrl: y("Firmware Dilink/By the list/Di3/18.x chipset/Di3.0_1for2_18.1.2.2507160.1_0 (1).zip"),
    version: "18.1.2.2507160",
    chipset: "18.x",
    releaseDate: "2025-07",
  },
  {
    id: "di3-global-1332",
    name: "DiLink 3.0 Global — Atto 3, Dolphin, Song Plus",
    dilink: "DiLink 3.0 Global",
    description: "Global OTA for Atto 3, Dolphin, Song Plus DM-i, Chazor, Seagull",
    descriptionAr: "تحديث عالمي لـ أتو 3، دولفين، سونج بلس، تشازور، سيغول",
    compatibleModels: ["atto3", "dolphin", "song-plus"],
    downloadUrl: y("Firmware Dilink/By the list/Global, OTA/13.1.32/13.1.32.2408230 Song Plus Dm-i, Chazor, Atto3, Seagull, Dolphin/Di3.0_13.1.32.2408230.zip"),
    version: "13.1.32.2408230",
    chipset: "13.x Global",
    releaseDate: "2024-08",
  },
  {
    id: "di3-global-1333",
    name: "DiLink 3.0 Global — Han, Tang, Seal, Song Pro",
    dilink: "DiLink 3.0 Global",
    description: "Global OTA for Song Plus Champion, Song Pro, Han, Tang, Seal",
    descriptionAr: "تحديث عالمي لـ سونج بلس، سونج برو، هان، تانج، سيل",
    compatibleModels: ["han", "tang", "seal", "song-plus"],
    downloadUrl: y("Firmware Dilink/By the list/Global, OTA/13.1.33/13.1.33.2412190.1.18.3.5.2411180.2 Song Plus Champion Dm-i; Song Plus EV; Song Pro; Han; Tang; Seal/Di3.0_13.1.33.2412190.1.18.3.5.2411180.2.zip"),
    version: "13.1.33.2412190",
    chipset: "13.x Global",
    releaseDate: "2024-12",
  },
  {
    id: "di4-latest",
    name: "DiLink 4.0 (21.x chipset)",
    dilink: "DiLink 4.0",
    description: "Latest DiLink 4.0 firmware for Han/Tang/Seal line",
    descriptionAr: "أحدث DiLink 4.0 لخط هان، تانج، سيل",
    compatibleModels: ["han", "tang", "seal"],
    downloadUrl: y("Firmware Dilink/By the list/Di4/21.x chipset/Di4.0_1for2_21.1.2.2511200.1_0.zip"),
    version: "21.1.2.2511200",
    chipset: "21.x",
    releaseDate: "2025-11",
  },
  {
    id: "di5-latest",
    name: "DiLink 5.0 Global (51.x)",
    dilink: "DiLink 5.0",
    description: "Global DiLink 5.0 firmware (tar package)",
    descriptionAr: "برنامج DiLink 5.0 العالمي",
    compatibleModels: ["seal", "han", "tang"],
    downloadUrl: y("Firmware Dilink/By the list/Di5/Di5.0_23.1.4.2506089.1_0.zip"),
    version: "23.1.4.2506089",
    chipset: "23.x",
    releaseDate: "2025-06",
  },
  {
    id: "di51-latest",
    name: "DiLink 5.1 (34.1.31)",
    dilink: "DiLink 5.1",
    description: "Latest DiLink 5.1 firmware for next-gen models",
    descriptionAr: "أحدث DiLink 5.1 للموديلات الجديدة",
    compatibleModels: ["seal", "han", "tang", "shark"],
    downloadUrl: y("Firmware Dilink/By the list/Di5.1/34.1.31/YDRAY-Di5.1_34.1.31.2511244.1.34.2.3.2511224.2.zip"),
    version: "34.1.31.2511244",
    chipset: "34.x",
    releaseDate: "2025-11",
  },
  {
    id: "di51-leopard",
    name: "DiLink 5.1 — Leopard 8",
    dilink: "DiLink 5.1",
    description: "Dedicated firmware for Leopard 8",
    descriptionAr: "برنامج مخصص لليوبارد 8",
    compatibleModels: ["leopard"],
    downloadUrl:
      y(
        "Firmware Dilink/By the list/Di5.1/Leopard 8/Di5.1_34.1.17.2501044.1.34.2.5.2501040.2.zip",
      ),
    version: "34.1.17.2501044",
    chipset: "34.x",
    releaseDate: "2025-01",
  },
  {
    id: "di6-latest",
    name: "DiLink 6.0 (31.1.16)",
    dilink: "DiLink 6.0",
    description: "Latest DiLink 6.0 firmware",
    descriptionAr: "أحدث DiLink 6.0",
    compatibleModels: ["seal", "han", "tang", "shark"],
    downloadUrl: y("Firmware Dilink/By the list/Di6/31.1.16/Di6_31.1.16.2412160.1.31.2.4.2412160.2.zip"),
    version: "31.1.16.2412160",
    chipset: "31.x",
    releaseDate: "2024-12",
  },
  {
    id: "di300-latest",
    name: "DiLink 300 (41.1.2)",
    dilink: "DiLink 300",
    description: "Premium-tier DiLink firmware (Denza / Yangwang)",
    descriptionAr: "برنامج DiLink 300 (دينزا / يانغوانغ)",
    compatibleModels: ["leopard"],
    downloadUrl: y("Firmware Dilink/By the list/Di300/Di300_41.1.2.2507218.1_0.zip"),
    version: "41.1.2.2507218",
    chipset: "41.x",
    releaseDate: "2025-07",
  },
  {
    id: "upgrade-assistant",
    name: "DiLink Upgrade Assistant",
    dilink: "Tool",
    description: "Offline tool to obtain the upgrade verification code",
    descriptionAr: "أداة للحصول على رمز التحقق بدون انترنت",
    compatibleModels: ALL_MODELS,
    downloadUrl: y("Firmware Dilink/DiLink Upgrade Assistant (Offline Obtain Verification Code).apk"),
    version: "Assistant",
  },
];

// ---------------------------------------------------------------------------
// Community
// ---------------------------------------------------------------------------
export interface CommunityLink {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  platform: "telegram" | "youtube" | "facebook" | "whatsapp" | "forum" | "website";
  url: string;
  members?: string;
  region?: string;
}

export const communityLinks: CommunityLink[] = [
  {
    id: "byd-apps-ota",
    name: "BYD Apps & OTA",
    nameAr: "تطبيقات وتحديثات BYD",
    description: "Main hub — apps, firmware and everything useful for BYD",
    descriptionAr: "المركز الرئيسي للتطبيقات والبرامج الثابتة",
    platform: "telegram",
    url: "https://t.me/just_byd",
    members: "21,000+",
    region: "Global",
  },
  {
    id: "byd-ota-group",
    name: "BYD OTA Discussion",
    nameAr: "نقاش تحديثات BYD",
    description: "Discussion group focused on OTA updates",
    descriptionAr: "مجموعة نقاش حول تحديثات OTA",
    platform: "telegram",
    url: "https://t.me/byd_ota",
    region: "Global",
  },
  {
    id: "byd-chat",
    name: "BYD Chat",
    nameAr: "دردشة BYD",
    description: "Owners of Han, Tang, Song, Seal, Dolphin — chat & tips",
    descriptionAr: "مجتمع لملاك هان، تانج، سونج، سيل، دولفين",
    platform: "telegram",
    url: "https://t.me/bydchat",
    members: "3,000+",
    region: "Global",
  },
  {
    id: "club-byd",
    name: "Club BYD",
    nameAr: "نادي BYD",
    description: "EV enthusiasts community — sustainable mobility",
    descriptionAr: "مجتمع عشاق السيارات الكهربائية",
    platform: "telegram",
    url: "https://t.me/ClubBYD",
    region: "Global",
  },
  {
    id: "byd-ev-jordan",
    name: "BYD EV Club Jordan",
    nameAr: "نادي BYD الأردن",
    description: "BYD community in Jordan",
    descriptionAr: "مجتمع BYD في الأردن",
    platform: "telegram",
    url: "https://t.me/BYD_EV_Club_Jordan",
    members: "4,300+",
    region: "Jordan",
  },
  {
    id: "byd-autovehicle",
    name: "BYD AutoVehicle Group",
    nameAr: "مجموعة BYD للسيارات",
    description: "General BYD discussion group",
    descriptionAr: "مجموعة نقاش عامة لـ BYD",
    platform: "telegram",
    url: "https://t.me/BYDautoVehicle",
    region: "Global",
  },
  {
    id: "cars-by-maged",
    name: "Cars by Maged",
    nameAr: "Cars by Maged",
    description: "Egyptian car reviewer — EV reviews & range tests (Arabic)",
    descriptionAr: "مراجع سيارات مصري — مراجعات EV واختبارات المدى",
    platform: "youtube",
    url: "https://www.youtube.com/@carsbymaged",
    region: "Egypt",
  },
  {
    id: "xda-byd",
    name: "XDA — BYD Multimedia",
    nameAr: "XDA — وسائط BYD",
    description: "Technical discussion for BYD head unit modifications",
    descriptionAr: "نقاش تقني لتعديلات وحدة رأس BYD",
    platform: "forum",
    url: "https://xdaforums.com/t/byd-multimedia-install-apk.4541247/",
    region: "Global",
  },
  {
    id: "byd-egypt-official",
    name: "BYD Egypt Official",
    nameAr: "BYD مصر الرسمي",
    description: "Official BYD Egypt website",
    descriptionAr: "الموقع الرسمي لـ BYD مصر",
    platform: "website",
    url: "https://www.byd.com/en-eg",
    region: "Egypt",
  },
  {
    id: "byd-egypt-dealer",
    name: "BYD Egypt Dealer",
    nameAr: "وكيل BYD مصر",
    description: "BYD Egypt dealer & service information",
    descriptionAr: "معلومات الوكيل والخدمة",
    platform: "website",
    url: "https://bydegypt.com",
    region: "Egypt",
  },
  {
    id: "ellamotors-byd",
    name: "Ella Motors — BYD Egypt",
    nameAr: "إيلا موتورز — BYD مصر",
    description: "BYD prices, specs and features in Egypt",
    descriptionAr: "أسعار ومواصفات BYD في مصر",
    platform: "website",
    url: "https://egypt.ellamotors.com/new-cars/byd",
    region: "Egypt",
  },
  {
    id: "electriccar-byd",
    name: "ElectricCar-BYD",
    nameAr: "ElectricCar-BYD",
    description: "Community hub for BYD owners — manuals and news",
    descriptionAr: "مركز مجتمع لملاك BYD — أدلة وأخبار",
    platform: "website",
    url: "https://electriccar-byd.com/en",
    region: "Global",
  },
];

// ---------------------------------------------------------------------------
// Documentation
// ---------------------------------------------------------------------------
export interface DocLink {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  type: "manual" | "guide" | "repair" | "technical";
  url: string;
  models?: CarModelId[];
}

export const documentationLinks: DocLink[] = [
  {
    id: "byd-manuals",
    name: "BYD Owner Manuals (all models)",
    nameAr: "أدلة مالك BYD",
    description: "Official owner manuals — Seal, Dolphin, Atto 3, Han, Tang, Song",
    descriptionAr: "أدلة المالك الرسمية لجميع الموديلات",
    type: "manual",
    url: "https://electriccar-byd.com/en/manual",
    models: ALL_MODELS,
  },
  {
    id: "han-manual-pdf",
    name: "BYD Han Owner Manual (PDF)",
    nameAr: "دليل مالك BYD هان",
    description: "Left-hand drive Han owner manual (English, 2024)",
    descriptionAr: "دليل مالك هان بالإنجليزية 2024",
    type: "manual",
    url: "https://www.bydqatar.com.qa/wp-content/uploads/2025/01/BYD-HAN-Owners-Manual-Left-hand-Drive-EN-240902-compressed.pdf",
    models: ["han"],
  },
  {
    id: "atto3-yandex",
    name: "Atto 3 / Yuan Plus Manual (EN)",
    nameAr: "دليل أتو 3 / يوان بلس",
    description: "Full English manual for Atto 3 / Yuan Plus (2022)",
    descriptionAr: "دليل كامل لـ أتو 3 / يوان بلس",
    type: "manual",
    url: y("Documentation/BYD ATTO 3 = Yuan Plus (EN, 2022).pdf"),
    models: ["atto3"],
  },
  {
    id: "seal-manual",
    name: "BYD Seal Manual",
    nameAr: "دليل BYD سيل",
    description: "Seal owner manual (Russian & English versions)",
    descriptionAr: "دليل مالك سيل",
    type: "manual",
    url: y("Documentation/BYD Seal (RU, 2022).pdf"),
    models: ["seal"],
  },
  {
    id: "tang-manual",
    name: "BYD Tang User Manual (2021)",
    nameAr: "دليل BYD تانج 2021",
    description: "Tang 2021 English owner manual",
    descriptionAr: "دليل مالك تانج 2021 بالإنجليزية",
    type: "manual",
    url: y("Documentation/BYD TANG 2021 User Manual.pdf"),
    models: ["tang"],
  },
  {
    id: "tang-service",
    name: "BYD Tang EV — Service Manual",
    nameAr: "دليل صيانة تانج EV",
    description: "Dealer-level service manual for Tang EV",
    descriptionAr: "دليل صيانة تانج EV بمستوى الوكيل",
    type: "repair",
    url: y("Documentation/BYD TANG EV Service Manual.pdf"),
    models: ["tang"],
  },
  {
    id: "song-plus-manual",
    name: "BYD Song Plus EV 2023 Manual",
    nameAr: "دليل سونج بلس 2023",
    description: "Champion Edition manual (Russian)",
    descriptionAr: "دليل نسخة الشامبيون (روسي)",
    type: "manual",
    url: y("Documentation/BYD Song Plus EV2023 Champion Edition user manual (RU).pdf"),
    models: ["song-plus"],
  },
  {
    id: "dolphin-manual",
    name: "BYD Dolphin Manual (CN)",
    nameAr: "دليل BYD دولفين",
    description: "Dolphin owner manual (Chinese)",
    descriptionAr: "دليل مالك دولفين (صيني)",
    type: "manual",
    url: y("Documentation/BYD Dolphin (CN, 2022).pdf"),
    models: ["dolphin"],
  },
  {
    id: "repair-manuals",
    name: "BYD Repair Manuals Repo (GitHub)",
    nameAr: "مستودع أدلة إصلاح BYD",
    description: "Repair manuals & factory images repository",
    descriptionAr: "أدلة الإصلاح وصور المصنع",
    type: "repair",
    url: "https://github.com/BYDcar/BYDRepairManual",
  },
  {
    id: "wiring-diagrams",
    name: "Wiring Diagrams & Power Distribution",
    nameAr: "مخططات الأسلاك وتوزيع الطاقة",
    description: "Dashboard, front and rear power distribution diagrams",
    descriptionAr: "مخططات توزيع الطاقة",
    type: "technical",
    url: y("Documentation/Wiring Diagrams"),
  },
  {
    id: "firmware-github",
    name: "BYD Firmware Repository (GitHub)",
    nameAr: "مستودع البرامج الثابتة",
    description: "Complete firmware collection organized by chip and model",
    descriptionAr: "مجموعة كاملة من البرامج الثابتة",
    type: "technical",
    url: "https://github.com/BYDcar",
  },
  {
    id: "anexplorer-byd",
    name: "AnExplorer — BYD Guide",
    nameAr: "دليل AnExplorer لـ BYD",
    description: "File manager installation guide for BYD Android Automotive",
    descriptionAr: "دليل تثبيت مدير الملفات لسيارات BYD",
    type: "guide",
    url: "https://anexplorer.io/device/android-automotive/byd",
    models: ["seal", "dolphin", "atto3"],
  },
  {
    id: "flashing-guide",
    name: "Firmware Flashing Guide",
    nameAr: "دليل تحديث البرنامج الثابت",
    description: "Step-by-step guide for flashing BYD firmware via USB",
    descriptionAr: "دليل خطوة بخطوة لتحديث البرنامج عبر USB",
    type: "guide",
    url: "https://github.com/BYDcar/BYDGlobalFactoryImages1/blob/main/README.md",
  },
];

// ---------------------------------------------------------------------------
// Guides
// ---------------------------------------------------------------------------
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
    id: "microg-install",
    title: "Installing microG Services",
    titleAr: "تثبيت خدمات microG",
    description: "Required for YouTube ReVanced and other modified apps",
    descriptionAr: "مطلوب لـ YouTube ReVanced والتطبيقات المعدلة الأخرى",
    steps: [
      "Remove any previous microG / Gbox install and clear residues with SD Maid SE",
      "Install microG GmsCore from the official GitHub release",
      "Install microG Companion",
      "Grant all permissions: Settings > Apps > microG Services",
      "Set Location to 'Always Allow' and enable Overlay permission",
      "Repeat permission grants for microG Companion",
    ],
    stepsAr: [
      "احذف أي تثبيت سابق لـ microG ونظّف البقايا بواسطة SD Maid SE",
      "قم بتثبيت microG GmsCore من GitHub",
      "قم بتثبيت microG Companion",
      "امنح جميع الأذونات: الإعدادات > التطبيقات > microG Services",
      "اضبط الموقع على 'السماح دائماً' وفعّل إذن التراكب",
      "كرر نفس الأذونات لـ microG Companion",
    ],
    warning: "Do not use Phone Clone or any transfer utility — fresh install only",
    warningAr: "لا تستخدم Phone Clone — تثبيت جديد فقط",
  },
  {
    id: "silentinstaller",
    title: "Silent Installer for Leopard / Denza",
    titleAr: "Silent Installer لـ ليوبارد / دينزا",
    description: "Install APKs silently via USB drive",
    descriptionAr: "تثبيت التطبيقات بصمت عبر USB",
    steps: [
      "Download SilentInstaller.zip from the Yandex drive",
      "Extract the zip file",
      "Format a USB drive as FAT32",
      "Copy the extracted files to the root of the USB drive",
      "Plug the USB into your BYD Leopard or Denza",
      "Installation starts automatically",
    ],
    stepsAr: [
      "قم بتحميل SilentInstaller.zip من ياندكس",
      "قم بفك ضغط الملف",
      "قم بتهيئة USB بتنسيق FAT32",
      "انسخ الملفات المستخرجة إلى جذر USB",
      "قم بتوصيل USB بسيارتك",
      "سيبدأ التثبيت تلقائياً",
    ],
    warning: "Only for BYD Leopard and Denza models",
    warningAr: "فقط لموديلات ليوبارد ودينزا",
  },
  {
    id: "firmware-flash",
    title: "Flashing Stock Firmware via USB",
    titleAr: "تحديث البرنامج الثابت عبر USB",
    description: "Restore or update your BYD head unit firmware",
    descriptionAr: "استعادة أو تحديث برنامج وحدة الرأس",
    steps: [
      "Download the firmware zip for your Dilink version from the Firmware section",
      "Rename the file to UpdateFull.zip",
      "Format a USB drive as FAT32",
      "Create folder structure: BYDUpdatePackage/msm8953_64/",
      "Copy UpdateFull.zip to the created folder",
      "Plug USB into the car data port while the system is running",
      "Wait for automatic recognition and update (~10 min)",
      "System restarts automatically when complete",
    ],
    stepsAr: [
      "قم بتحميل ملف البرنامج الثابت لـ Dilink الخاص بك",
      "أعد تسمية الملف إلى UpdateFull.zip",
      "قم بتهيئة USB بتنسيق FAT32",
      "أنشئ المسار: BYDUpdatePackage/msm8953_64/",
      "انسخ UpdateFull.zip إلى المجلد",
      "قم بتوصيل USB بمنفذ البيانات والسيارة تعمل",
      "انتظر التحديث التلقائي (~10 دقائق)",
      "سيعيد النظام التشغيل تلقائياً عند الانتهاء",
    ],
    warning: "Alternative: long press 'Previous' + 'Volume wheel' to enter engineering mode",
    warningAr: "طريقة بديلة: اضغط مطولاً على 'السابق' + 'عجلة الصوت' للدخول لوضع الهندسة",
  },
];

// ---------------------------------------------------------------------------
// Navigation items — no 'Car Models' per spec
// ---------------------------------------------------------------------------
export const navItems = [
  { id: "apps", name: "Apps", nameAr: "التطبيقات", href: "#apps" },
  { id: "firmware", name: "Firmware", nameAr: "البرامج الثابتة", href: "#firmware" },
  { id: "guides", name: "Guides", nameAr: "الأدلة", href: "#guides" },
  { id: "tips", name: "Do you know?", nameAr: "تعالى أقولك", href: "#tips" },
  { id: "docs", name: "Documentation", nameAr: "التوثيق", href: "#documentation" },
  { id: "community", name: "Community", nameAr: "المجتمع", href: "#community" },
] as const;
