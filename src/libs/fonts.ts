import {DM_Sans, Nunito_Sans} from "next/font/google";

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
});

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
});

export {nunitoSans, dmSans};
