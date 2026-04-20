import { NextRequest, NextResponse } from "next/server";

const YANDEX_PUBLIC_KEY = "https://disk.yandex.ru/d/SxXwb0bgy0Ll_w";

function yandexFolderUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${YANDEX_PUBLIC_KEY}?path=${encodeURIComponent(normalized)}`;
}

export async function GET(request: NextRequest) {
  const provider = request.nextUrl.searchParams.get("provider");
  const path = request.nextUrl.searchParams.get("path");

  if (provider !== "yandex" || !path) {
    return NextResponse.json({ error: "Unsupported download request." }, { status: 400 });
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const metaUrl = new URL("https://cloud-api.yandex.net/v1/disk/public/resources");
  metaUrl.searchParams.set("public_key", YANDEX_PUBLIC_KEY);
  metaUrl.searchParams.set("path", normalizedPath);

  try {
    const metaRes = await fetch(metaUrl, { cache: "no-store" });
    if (!metaRes.ok) {
      return NextResponse.redirect(new URL(yandexFolderUrl(normalizedPath)));
    }

    const meta = (await metaRes.json()) as {
      type?: "file" | "dir";
      file?: string;
    };

    if (meta.type === "file" && meta.file) {
      return NextResponse.redirect(new URL(meta.file));
    }

    return NextResponse.redirect(new URL(yandexFolderUrl(normalizedPath)));
  } catch {
    return NextResponse.redirect(new URL(yandexFolderUrl(normalizedPath)));
  }
}
