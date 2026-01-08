import { Header } from "@/src/_components/header";
import HeroSection from "../_components/home/hero-section";
import FilterBar from "../_components/filter";
import CompanyList from "../_components/companylist";
import NewsSection from "../_components/home/news";

export default function Home() {
  return (
    <>
    <div className="">
      <Header />
    </div>
    <div className="lg:mx-50 mx-10">
    <HeroSection />
    <FilterBar />
    <CompanyList />
    <NewsSection />
    </div>
    </>
  );
}
