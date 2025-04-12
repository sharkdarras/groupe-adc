import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "./locales";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathLocale) {
    const newUrl = new URL(`/${defaultLocale}${pathname || "/"}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!assets|_next|_next|favicon).*)"],
};
