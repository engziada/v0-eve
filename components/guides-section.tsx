'use client'

import { BookOpen, ChevronRight, Usb, Smartphone, Settings, Download } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const guides = [
  {
    id: 'silent-installer',
    title: 'Silent Installer Setup',
    titleAr: 'إعداد المثبت الصامت',
    description: 'Install apps via USB without manual confirmation on Leopard/Denza',
    icon: Usb,
    steps: [
      'Download and extract the SilentInstaller.zip file',
      'Copy extracted files to root of a FAT32 formatted USB drive',
      'Plug USB into your BYD Leopard or Denza to start installation',
    ],
    badge: 'Leopard/Denza',
  },
  {
    id: 'microg-setup',
    title: 'microG Installation',
    titleAr: 'تثبيت microG',
    description: 'Required for Google apps to work properly on your head unit',
    icon: Settings,
    steps: [
      'Install microG Services and Companion from Tools section',
      'Grant all permissions including Location "Always Allow" and Overlay',
      'Install Google apps AFTER microG setup is complete',
    ],
    badge: 'Required',
  },
  {
    id: 'app-install',
    title: 'General App Installation',
    titleAr: 'تثبيت التطبيقات العامة',
    description: 'How to install mod APKs on your BYD head unit',
    icon: Download,
    steps: [
      'Download the APK file to a USB drive formatted as FAT32',
      'Connect USB to your car head unit',
      'Use a file manager app to locate and install the APK',
      'Grant necessary permissions when prompted',
    ],
    badge: 'All Models',
  },
  {
    id: 'phone-setup',
    title: 'Phone Compatibility Check',
    titleAr: 'التحقق من توافق الهاتف',
    description: 'Ensure your smartphone is compatible for best experience',
    icon: Smartphone,
    steps: [
      'EMUI 14.2 / HarmonyOS 4.2 and newer recommended',
      'Do not use Phone Clone or any transfer utility - fresh install required',
      'Delete previous microG/Gbox installs first',
      'Use SD Maid SE to clear residues before setup',
    ],
    badge: 'Important',
  },
]

export function GuidesSection() {
  return (
    <section id="guides" className="border-t border-border/50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <BookOpen className="h-4 w-4" />
            <span>Tutorials & Guides</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Installation Guides
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Step-by-step instructions to get everything working on your BYD head unit.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground/80" dir="rtl">
            تعليمات خطوة بخطوة لتشغيل كل شيء على نظام BYD الخاص بك
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((guide) => {
            const Icon = guide.icon
            return (
              <Card
                key={guide.id}
                className="group cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{guide.title}</h3>
                        <p className="text-xs text-muted-foreground" dir="rtl">
                          {guide.titleAr}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="border-primary/30 bg-primary/10 text-primary"
                    >
                      {guide.badge}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{guide.description}</p>

                  <ol className="space-y-2">
                    {guide.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="flex items-center gap-2 pt-2 text-sm font-medium text-primary">
                    <span>View full guide</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
