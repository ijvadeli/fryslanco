import { Header } from "@/src/_components/header";
import HeroSection from "@/src/_components/details/details-header";
import PlaceholderLogo from "@/src/_components/svgs/logo";
// import FilterBar from "../_components/filter";
// import CompanyList from "../_components/companylist";
// import NewsSection from "../_components/home/news";

export default function Home() {
  const companyData = {
    name: "Council Studio",
    logo: "/councile.png",
    description:
      "Multidisciplinary digital studio working at the intersection of design, development, and animation.",
    tags: ["Design", "Development", "Animation"],
    images: [
      "/councile.png",
      "/logo.png",
      "/councile.png",
      "/logo.png",
      "/logo.png",
      "/councile.png",
    ],
    likes: "6.2K",
    companyDetails: {
      founded: "2021",
      employees: "2-10",
      location: "Leeuwarden, Fryslân",
      founder: "Jane Doe",
      type: "Digital studio",
    },
    aboutUs: [
      "Council Studio is a multidisciplinary digital studio working at the intersection of design, development, and animation.  The studio focuses on building thoughtful digital products and brand experiences that balance visual clarity with technical depth.  Rather than positioning itself as a one-size-fits-all agency, Council Studio operates as a small, focused team that collaborates closely with clients from concept through execution.",
      "The studio's work spans product design, front-end and back-end development, and motion design, allowing it to approach projects holistically instead of in isolated phases. Design decisions are informed by real technical constraints, while development work is shaped by strong visual and interaction principles. This integrated approach results in products that feel cohesive, intentional, and durable over time.",
    ],
  };
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="lg:mx-50 mx-10">
        <HeroSection {...companyData} />
      </div>
    </>
  );
}
