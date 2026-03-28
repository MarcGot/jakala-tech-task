import type { Metadata } from "next";
import "../../styles/globals.css";
import {dmSans, nunitoSans} from "@/libs/fonts";
import {ReactNode} from "react";
import {ViewTransitions} from "next-view-transitions";
import {getLocale, getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";

export const metadata: Metadata = {
  title: "Dulces Pétalos",
  description: "Catálogo de plantas de Dulces Pétalos",
};

export default async function RootLayout({
  children,
                                             params
}: Readonly<{
  children: ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const messages = await getMessages();

  return (
    <ViewTransitions>
      <html
        lang={locale}
        className={`${nunitoSans.variable} ${dmSans.variable} h-full antialiased bg-background`}
      >
        <body className="min-h-full flex flex-col max-w-360 m-auto px-12">
            <NextIntlClientProvider messages={messages} locale={locale}>
                {children}
            </NextIntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
