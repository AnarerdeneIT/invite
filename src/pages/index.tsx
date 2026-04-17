import SEO from "@/components/SEO";
import InfoContainer from "@/Containers/InfoContainer";
import TextContainer from "@/Containers/TextContainer";
import useData from "@/hooks/useData";
import { PageType } from "@/types";
import localFont from "next/font/local";
import { ReactNode } from "react";

const philosopherSans = localFont({
  src: "../../public/assets/fonts/Philosopher-Bold.ttf",
  variable: "--font-philosopher-sans",
});

const montserratMono = localFont({
  src: "../../public/assets/fonts/MontserratAlternates-SemiBold.ttf",
  variable: "--font-montserrat-alternates",
});

const Home = () => {
  const { pageType } = useData();
  const PAGE_RENDER: { [key in PageType]: ReactNode | null } = {
    INFO_PAGE: <InfoContainer />,
    TEXT_PAGE: <TextContainer />,
    TYPE_PAGE: null,
  };
  return (
    <div
      className={`${philosopherSans.variable} ${montserratMono.className} font-[var(--font-montserrat-alternates)]`}
    >
      <SEO />
      <main className="w-full h-screen">
        {PAGE_RENDER[pageType]}
      </main>
    </div>
  );
}
export default Home;
