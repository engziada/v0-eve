'use client'

import { AlertTriangle } from 'lucide-react'

export function Disclaimer() {
  return (
    <section className="border-y border-border/50 bg-secondary/30 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-start gap-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 md:flex-row md:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
            <AlertTriangle className="h-6 w-6 text-amber-500" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-amber-500">Terms of Use | شروط الاستخدام</h3>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Educational Use Only:</strong> Files are provided for learning and testing. 
                Compatibility varies by model. Use at your own risk — we are not liable for any vehicle damage.
              </p>
              <p dir="rtl" className="text-muted-foreground/80">
                للأغراض التعليمية فقط: الملفات متوفرة للتعلم والتجربة. التوافق يختلف حسب الطراز. 
                الاستخدام على مسؤوليتك - نحن غير مسؤولين عن أي ضرر للسيارة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
