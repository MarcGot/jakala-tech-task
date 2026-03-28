// src/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['es'],
    defaultLocale: 'es',
    localePrefix: 'never'
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};
