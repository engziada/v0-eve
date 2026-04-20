"use client";

import {
  ExternalLink,
  MessageCircle,
  Users,
  Youtube,
  Globe,
  MessagesSquare,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { communityLinks } from "@/lib/data";

const platformIcons: Record<string, React.ReactNode> = {
  telegram: <Send className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  forum: <MessagesSquare className="h-5 w-5" />,
  website: <Globe className="h-5 w-5" />,
  facebook: <MessageCircle className="h-5 w-5" />,
};

const platformColors: Record<string, string> = {
  telegram: "bg-sky-500/10 text-sky-400 border-sky-500/30",
  youtube: "bg-red-500/10 text-red-400 border-red-500/30",
  forum: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  website: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  facebook: "bg-blue-500/10 text-blue-400 border-blue-500/30",
};

export function CommunitySection() {
  // Group by platform
  const telegramLinks = communityLinks.filter((l) => l.platform === "telegram");
  const otherLinks = communityLinks.filter((l) => l.platform !== "telegram");

  return (
    <section
      id="community"
      className="scroll-mt-16 border-t border-border/50 bg-card/20 py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center lg:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Users className="h-4 w-4" />
            <span>Community</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Forums, Blogs & Groups
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            Connect with BYD EV owners, share experiences, and access community
            resources.
          </p>
          <p
            className="mx-auto mt-1.5 max-w-2xl text-xs text-muted-foreground/80"
            dir="rtl"
          >
            تواصل مع مالكي سيارات BYD الكهربائية وشارك تجاربك وادخل لموارد المجتمع
          </p>
        </div>

        {/* Telegram Groups */}
        <div className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
            <Send className="h-4 w-4 text-sky-400" />
            Telegram Groups & Channels
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {telegramLinks.map((link) => (
              <Card
                key={link.id}
                className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-sky-500/40 hover:bg-card/80"
              >
                <CardContent className="flex items-start gap-3 p-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${platformColors[link.platform]}`}
                  >
                    {platformIcons[link.platform]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-semibold">
                      {link.name}
                    </h4>
                    <p className="mt-0.5 line-clamp-1 text-[10px] text-muted-foreground">
                      {link.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      {link.members && (
                        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Users className="h-3 w-3" />
                          {link.members}
                        </span>
                      )}
                      {link.region && (
                        <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                          {link.region}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="shrink-0 text-sky-400 hover:bg-sky-500/10 hover:text-sky-300"
                    asChild
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Resources */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
            <Globe className="h-4 w-4 text-emerald-400" />
            YouTube, Forums & Websites
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherLinks.map((link) => (
              <Card
                key={link.id}
                className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/80"
              >
                <CardContent className="flex items-start gap-3 p-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${platformColors[link.platform]}`}
                  >
                    {platformIcons[link.platform]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-semibold">
                      {link.name}
                    </h4>
                    <p className="mt-0.5 line-clamp-2 text-[10px] text-muted-foreground">
                      {link.description}
                    </p>
                    {link.region && (
                      <span className="mt-2 inline-block rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                        {link.region}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="shrink-0 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Credits */}
        <div className="mt-10 text-center">
          <p className="text-xs text-muted-foreground">
            Special thanks to BYD Apps & OTA, Qatar EV Channel, and communities
            worldwide for sharing resources.
          </p>
        </div>
      </div>
    </section>
  );
}
