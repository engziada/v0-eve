import { AlertTriangle } from "lucide-react";

export function Disclaimer() {
  return (
    <section className="border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 sm:flex-row sm:items-start sm:gap-5 sm:p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
          </div>
          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            {/* English */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-amber-500">
                Terms of Access
              </h3>
              <ul className="space-y-1 text-xs leading-relaxed text-muted-foreground">
                <li>
                  <strong className="text-foreground/80">Educational Use:</strong>{" "}
                  Files are provided for learning and testing only.
                </li>
                <li>
                  <strong className="text-foreground/80">Compatibility:</strong>{" "}
                  Success varies by model; we do not guarantee it works for all.
                </li>
                <li>
                  <strong className="text-foreground/80">Responsibility:</strong>{" "}
                  Use at your own risk. We are not liable for any vehicle damage.
                </li>
                <li>
                  <strong className="text-foreground/80">No Support:</strong> This
                  is a community resource, not official support.
                </li>
              </ul>
            </div>

            {/* Arabic */}
            <div className="space-y-2 text-right" dir="rtl">
              <h3 className="text-sm font-semibold text-amber-500">
                شروط الدخول
              </h3>
              <ul className="space-y-1 text-xs leading-relaxed text-muted-foreground">
                <li>
                  <strong className="text-foreground/80">لأغراض تعليمية:</strong>{" "}
                  الملفات متوفرة للتعلم والتجربة فقط.
                </li>
                <li>
                  <strong className="text-foreground/80">التوافق:</strong> النجاح
                  يختلف حسب الطراز؛ لا نضمن عملها للجميع.
                </li>
                <li>
                  <strong className="text-foreground/80">المسؤولية:</strong>{" "}
                  الاستخدام على مسؤوليتك. نحن غير مسؤولين عن أي ضرر للسيارة.
                </li>
                <li>
                  <strong className="text-foreground/80">لا يوجد دعم:</strong> هذا
                  مورد مجتمعي وليس دعماً رسمياً.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
