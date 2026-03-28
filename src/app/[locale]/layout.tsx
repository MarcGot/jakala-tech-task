import type { Metadata } from "next";
import "../../styles/globals.css";
import { dmSans, nunitoSans } from "@/libs/fonts";
import { ReactNode } from "react";
import { ViewTransitions } from "next-view-transitions";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/layout/Header/Header";

export const metadata: Metadata = {
    title: "Dulces Pétalos",
    description: "Catálogo de plantas de Dulces Pétalos",
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <ViewTransitions>
            <NextIntlClientProvider messages={messages} locale={locale}>
                <html
                    lang={locale}
                    className={`${nunitoSans.variable} ${dmSans.variable} bg-background h-full antialiased`}
                >
                    <body className="m-auto flex min-h-full max-w-360 flex-col px-12 pt-20">
                        <Header />
                        {children}
                    </body>
                </html>
            </NextIntlClientProvider>
        </ViewTransitions>
    );
}
