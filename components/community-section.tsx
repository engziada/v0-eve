'use client'

import { ExternalLink, MessageCircle, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const communityLinks = [
  {
    id: 'telegram-egypt',
    name: 'BYD Egypt Telegram',
    nameAr: 'تيليجرام BYD مصر',
    description: 'Main community group for Egyptian BYD owners',
    members: '2,500+',
    url: '#',
    icon: '🇪🇬',
  },
  {
    id: 'telegram-uae',
    name: 'BYD UAE Telegram',
    nameAr: 'تيليجرام BYD الإمارات',
    description: 'Regional community with valuable resources',
    members: '5,000+',
    url: '#',
    icon: '🇦🇪',
  },
  {
    id: 'qatar-ev',
    name: 'Qatar EV Channel',
    nameAr: 'قناة قطر EV',
    description: 'Source for Silent Installer and other tools',
    members: '3,200+',
    url: '#',
    icon: '🇶🇦',
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="border-t border-border/50 bg-secondary/20 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Users className="h-4 w-4" />
            <span>Community</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Join the Community
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Connect with fellow BYD EV owners, share experiences, and get help from the community.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground/80" dir="rtl">
            تواصل مع مالكي سيارات BYD الكهربائية، شارك تجاربك، واحصل على المساعدة من المجتمع
          </p>
        </div>

        {/* Community Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {communityLinks.map((link) => (
            <Card
              key={link.id}
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <span className="mb-4 text-5xl">{link.icon}</span>
                <h3 className="mb-1 font-semibold">{link.name}</h3>
                <p className="mb-2 text-xs text-muted-foreground" dir="rtl">
                  {link.nameAr}
                </p>
                <p className="mb-4 text-sm text-muted-foreground">{link.description}</p>
                <div className="mb-4 flex items-center gap-2 text-sm text-primary">
                  <Users className="h-4 w-4" />
                  <span>{link.members} members</span>
                </div>
                <Button className="w-full gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="h-4 w-4" />
                  Join Group
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Credits */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Special thanks to the BYD EV communities in UAE, Qatar, and around the world for sharing resources and knowledge.
          </p>
        </div>
      </div>
    </section>
  )
}
