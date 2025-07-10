import { NextResponse, NextRequest } from 'next/server';
import { token } from './services/token.service';
import { PublicPages } from './config/public-pages';

export function middleware(request: NextRequest) {
  const isLoggedIn = !!request.cookies.get(token.accessToken);

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL(PublicPages.LOGIN, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
