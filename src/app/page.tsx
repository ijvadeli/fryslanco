import { Header } from "@/src/_components/header";
import HeroSection from "../_components/home/hero-section";
import FilterBar from "../_components/filter";
import CompanyList from "../_components/ui/companylist";
import NewsSection from "../_components/home/news";

export default function Home() {
  return (
    <div className="md:mx-30">
    <Header />
    <HeroSection />
    <FilterBar />
    <CompanyList />
    <NewsSection />
    </div>
  );
}
