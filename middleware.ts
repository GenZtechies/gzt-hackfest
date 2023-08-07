import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("https://twitter.com/intent/tweet?text=Live%20at%20%40genztechies%20HackFest%202023!%20%F0%9F%9A%80%0A%0A%23GenZHackFest2023&url=", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/2023/event-tag-qr"
};
