"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search, Package, Command as CommandIcon, FileText, Smartphone } from "lucide-react";
import { apps, carModels } from "@/lib/data";

export function GlobalCommand() {
  const [open, setOpen] = React.useState(false);

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] sm:pt-[20vh]">
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      
      <Command
        className="relative z-50 flex h-full w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-border/50 bg-background/95 shadow-2xl backdrop-blur-xl sm:h-auto sm:max-h-[60vh]"
      >
        <div className="flex items-center border-b border-border/50 px-3" cmdk-input-wrapper="">
          <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
          <Command.Input 
            autoFocus
            placeholder="Search applications, mods, firmware..." 
            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        
        <Command.List className="max-h-[50vh] overflow-y-auto overflow-x-hidden p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>

          <Command.Group heading="Applications & Apps">
            {apps.map((app) => (
              <Command.Item
                key={app.id}
                onSelect={() => {
                  window.location.href = app.downloadUrl;
                  setOpen(false);
                }}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              >
                <Package className="mr-2 h-4 w-4 text-primary" />
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">{app.name}</span>
                  <span className="text-[10px] text-muted-foreground">{app.description}</span>
                </div>
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>

        <div className="flex items-center justify-between border-t border-border/50 bg-muted/20 px-4 py-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <kbd className="inline-flex h-5 items-center justify-center rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">↑</span>
            </kbd>
            <kbd className="inline-flex h-5 items-center justify-center rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">↓</span>
            </kbd>
            <span>to navigate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <kbd className="inline-flex h-5 items-center justify-center rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              ESC
            </kbd>
            <span>to close</span>
          </div>
        </div>
      </Command>
    </div>
  );
}
