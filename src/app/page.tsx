import CalendlySection from "@/components/CalendlySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/heroSection";
import PortfolioCarousel from "@/components/portfolioCarousel";
import ProcessSection from "@/components/processSection";
import TechStackSection from "@/components/techStackSection";
import ThinkBeyondSection from "@/components/thinkBeyondSection";

export default function Home() {
  return (
<>
<HeroSection/>
<PortfolioCarousel/>
<ThinkBeyondSection/>
<TechStackSection/>
<CalendlySection/>
<ProcessSection/>
<ContactSection/>
</>
  );
}
