import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const uid = request.nextUrl.searchParams.get("uid");
  if (!uid || !/^[a-f0-9]{32}$/.test(uid)) {
    return NextResponse.json({ error: "invalid uid" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://sketchfab.com/oembed?url=https://sketchfab.com/3d-models/${uid}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) throw new Error(`oembed ${res.status}`);
    const data = await res.json();
    const thumbnailUrl: string = data.thumbnail_url ?? "";
    return NextResponse.json({ thumbnailUrl });
  } catch {
    return NextResponse.json({ thumbnailUrl: "" }, { status: 200 });
  }
}
