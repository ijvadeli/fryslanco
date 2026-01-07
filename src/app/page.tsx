import { Header } from "@/src/_components/header";
import HeroSection from "../_components/home/hero-section";
import FilterBar from "../_components/filter";
import CompanyList from "../_components/ui/companylist";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <FilterBar />
    <CompanyList />
    </>
  );
}
