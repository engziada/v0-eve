export type CarModel = 'all' | 'seal' | 'dolphin' | 'atto3' | 'han' | 'tang' | 'song' | 'leopard' | 'denza'

export type AppCategory = 'navigation' | 'music' | 'video' | 'tools' | 'launchers' | 'firmware' | 'beta'

export interface AppItem {
  id: string
  name: string
  description: string
  category: AppCategory
  compatibleModels: CarModel[]
  downloadUrl: string
  version?: string
  size?: string
  isModded?: boolean
  isBeta?: boolean
  icon?: string
}

export interface FirmwareItem {
  id: string
  name: string
  diLinkVersion: string
  description: string
  downloadUrl: string
  compatibleModels: CarModel[]
  version?: string
}

export const carModels: { id: CarModel; name: string; nameAr: string }[] = [
  { id: 'all', name: 'All Models', nameAr: 'جميع الموديلات' },
  { id: 'seal', name: 'BYD Seal', nameAr: 'بي واي دي سيل' },
  { id: 'dolphin', name: 'BYD Dolphin', nameAr: 'بي واي دي دولفين' },
  { id: 'atto3', name: 'BYD Atto 3', nameAr: 'بي واي دي أتو 3' },
  { id: 'han', name: 'BYD Han', nameAr: 'بي واي دي هان' },
  { id: 'tang', name: 'BYD Tang', nameAr: 'بي واي دي تانغ' },
  { id: 'song', name: 'BYD Song Plus', nameAr: 'بي واي دي سونغ بلس' },
  { id: 'leopard', name: 'BYD Leopard', nameAr: 'بي واي دي ليوبارد' },
  { id: 'denza', name: 'Denza', nameAr: 'دينزا' },
]

export const appCategories: { id: AppCategory; name: string; nameAr: string; icon: string }[] = [
  { id: 'navigation', name: 'Navigation', nameAr: 'الملاحة', icon: '🗺️' },
  { id: 'music', name: 'Music', nameAr: 'الموسيقى', icon: '🎵' },
  { id: 'video', name: 'Video', nameAr: 'الفيديو', icon: '🎬' },
  { id: 'tools', name: 'Tools & Utilities', nameAr: 'الأدوات', icon: '🔧' },
  { id: 'launchers', name: 'Launchers', nameAr: 'المشغلات', icon: '🚀' },
  { id: 'firmware', name: 'Firmware', nameAr: 'البرامج الثابتة', icon: '💾' },
  { id: 'beta', name: 'Beta Zone', nameAr: 'منطقة التجريب', icon: '⚠️' },
]

export const apps: AppItem[] = [
  // Navigation Apps
  {
    id: 'google-maps',
    name: 'Google Maps',
    description: 'Full-featured navigation with real-time traffic and offline maps support',
    category: 'navigation',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song', 'leopard', 'denza'],
    downloadUrl: '#',
    version: '11.125.0',
    size: '85 MB',
    isModded: true,
  },
  {
    id: 'waze',
    name: 'Waze',
    description: 'Community-driven navigation with real-time alerts',
    category: 'navigation',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song'],
    downloadUrl: '#',
    version: '4.98.0',
    size: '72 MB',
    isModded: true,
  },
  {
    id: 'sygic',
    name: 'Sygic GPS Navigation',
    description: 'Premium offline maps with 3D cities and speed camera warnings',
    category: 'navigation',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song', 'leopard'],
    downloadUrl: '#',
    version: '23.4.2',
    size: '95 MB',
    isModded: true,
  },
  // Music Apps
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Stream millions of songs, podcasts, and audiobooks',
    category: 'music',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song', 'leopard', 'denza'],
    downloadUrl: '#',
    version: '8.9.18',
    size: '55 MB',
    isModded: true,
  },
  {
    id: 'youtube-music',
    name: 'YouTube Music',
    description: 'Official music streaming from YouTube',
    category: 'music',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song'],
    downloadUrl: '#',
    version: '6.42.52',
    size: '48 MB',
    isModded: true,
  },
  {
    id: 'anghami',
    name: 'Anghami',
    description: 'Arabic and international music streaming platform',
    category: 'music',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song', 'leopard', 'denza'],
    downloadUrl: '#',
    version: '7.1.0',
    size: '42 MB',
    isModded: true,
  },
  {
    id: 'apple-music',
    name: 'Apple Music',
    description: 'Stream over 100 million songs with spatial audio',
    category: 'music',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han'],
    downloadUrl: '#',
    version: '4.7.0',
    size: '52 MB',
    isModded: true,
  },
  // Video Apps
  {
    id: 'youtube',
    name: 'YouTube',
    description: 'Watch videos from creators worldwide (Driver Mode)',
    category: 'video',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song', 'leopard', 'denza'],
    downloadUrl: '#',
    version: '19.15.33',
    size: '125 MB',
    isModded: true,
  },
  {
    id: 'netflix',
    name: 'Netflix',
    description: 'Stream movies and TV shows (Parked mode recommended)',
    category: 'video',
    compatibleModels: ['seal', 'han', 'tang', 'leopard', 'denza'],
    downloadUrl: '#',
    version: '8.95.0',
    size: '95 MB',
    isModded: true,
  },
  {
    id: 'shahid',
    name: 'Shahid VIP',
    description: 'Arabic content streaming - movies, series, and live TV',
    category: 'video',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song'],
    downloadUrl: '#',
    version: '8.12.0',
    size: '68 MB',
    isModded: true,
  },
  // Tools
  {
    id: 'microg',
    name: 'microG Services',
    description: 'Required for Google apps - Install before other apps',
    category: 'tools',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song', 'leopard', 'denza'],
    downloadUrl: '#',
    version: '0.3.1',
    size: '12 MB',
  },
  {
    id: 'microg-companion',
    name: 'microG Companion',
    description: 'Companion app for microG services',
    category: 'tools',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song', 'leopard', 'denza'],
    downloadUrl: '#',
    version: '1.2.0',
    size: '5 MB',
  },
  {
    id: 'silent-installer',
    name: 'Silent Installer',
    description: 'Install apps via USB without manual confirmation',
    category: 'tools',
    compatibleModels: ['leopard', 'denza'],
    downloadUrl: '#',
    version: '2.1.0',
    size: '8 MB',
  },
  {
    id: 'sd-maid',
    name: 'SD Maid SE',
    description: 'System cleaner to remove residual files',
    category: 'tools',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song', 'leopard', 'denza'],
    downloadUrl: '#',
    version: '5.5.6',
    size: '15 MB',
  },
  {
    id: 'carwebguru',
    name: 'CarWebGuru Launcher',
    description: 'Customizable car launcher with widgets',
    category: 'launchers',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song'],
    downloadUrl: '#',
    version: '3.95',
    size: '28 MB',
    isModded: true,
  },
  {
    id: 'agama',
    name: 'Agama Car Launcher',
    description: 'Clean and minimal car-focused launcher',
    category: 'launchers',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song'],
    downloadUrl: '#',
    version: '3.3.2',
    size: '22 MB',
  },
  {
    id: 'car-launcher-pro',
    name: 'Car Launcher Pro',
    description: 'Feature-rich launcher with customizable dashboard',
    category: 'launchers',
    compatibleModels: ['seal', 'dolphin', 'atto3', 'han', 'tang', 'song', 'leopard'],
    downloadUrl: '#',
    version: '3.4.0',
    size: '35 MB',
    isModded: true,
  },
  // Beta Apps
  {
    id: 'carplay-beta',
    name: 'CarPlay Bridge (Beta)',
    description: 'Experimental CarPlay support - Use at your own risk',
    category: 'beta',
    compatibleModels: ['seal', 'han'],
    downloadUrl: '#',
    version: '0.9.5-beta',
    size: '45 MB',
    isBeta: true,
  },
  {
    id: 'aa-wireless',
    name: 'AA Wireless (Beta)',
    description: 'Wireless Android Auto adapter support',
    category: 'beta',
    compatibleModels: ['seal', 'dolphin', 'atto3'],
    downloadUrl: '#',
    version: '2.1.0-beta',
    size: '18 MB',
    isBeta: true,
  },
]

export const firmwareList: FirmwareItem[] = [
  {
    id: 'dilink-20',
    name: 'DiLink 20 Stock Firmware',
    diLinkVersion: 'DiLink 20',
    description: 'Official stock firmware for DiLink 20 systems',
    downloadUrl: '#',
    compatibleModels: ['dolphin', 'atto3'],
    version: '1.5.2',
  },
  {
    id: 'dilink-50',
    name: 'DiLink 50 Stock Firmware',
    diLinkVersion: 'DiLink 50',
    description: 'Official stock firmware for DiLink 50 systems',
    downloadUrl: '#',
    compatibleModels: ['seal', 'dolphin', 'song'],
    version: '2.3.1',
  },
  {
    id: 'dilink-100',
    name: 'DiLink 100 Stock Firmware',
    diLinkVersion: 'DiLink 100',
    description: 'Official stock firmware for DiLink 100 systems',
    downloadUrl: '#',
    compatibleModels: ['seal', 'han', 'tang'],
    version: '3.1.0',
  },
  {
    id: 'dilink-150',
    name: 'DiLink 150 Stock Firmware',
    diLinkVersion: 'DiLink 150',
    description: 'Official stock firmware for DiLink 150 systems',
    downloadUrl: '#',
    compatibleModels: ['han', 'tang', 'leopard'],
    version: '4.0.2',
  },
  {
    id: 'dilink-300',
    name: 'DiLink 300 Stock Firmware',
    diLinkVersion: 'DiLink 300',
    description: 'Official stock firmware for DiLink 300 systems',
    downloadUrl: '#',
    compatibleModels: ['leopard', 'denza'],
    version: '5.1.0',
  },
]
