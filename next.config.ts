import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dulces-petalos.jakala.es",
                port: "",
                pathname: "/images/**",
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
};

export default withNextIntl(nextConfig);
