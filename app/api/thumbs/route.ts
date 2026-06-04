import { NextRequest, NextResponse } from "next/server";

const UID_RE = /^[a-f0-9]{32}$/;

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("uids") ?? "";
  const uids = raw.split(",").filter(u => UID_RE.test(u));
  if (!uids.length) {
    return NextResponse.json({ thumbs: {} });
  }

  const results = await Promise.allSettled(
    uids.map(async uid => {
      const res = await fetch(
        `https://sketchfab.com/oembed?url=https://sketchfab.com/3d-models/${uid}`,
        { next: { revalidate: 86400 } }
      );
      if (!res.ok) return { uid, url: "" };
      const data = await res.json();
      return { uid, url: (data.thumbnail_url as string) ?? "" };
    })
  );

  const thumbs: Record<string, string> = {};
  for (const r of results) {
    if (r.status === "fulfilled" && r.value.url) {
      thumbs[r.value.uid] = r.value.url;
    }
  }

  return NextResponse.json({ thumbs }, {
    headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600" },
  });
}
