"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import VisitIcon from "../svgs/visit";
import ArrowUp from "../svgs/arrowup";
import ShareIcon from "../svgs/share";
import { Phone, ArrowLeft } from "lucide-react";

interface CompanyDetails {
  founded: string;
  employees: string;
  location: string;
  founder: string;
  type: string;
}

interface CompanyProfileProps {
  name: string;
  logo: string;
  description: string;
  tags: string[];
  images: string[];
  likes: string;
  companyDetails: CompanyDetails;
  aboutUs: string[];
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({
  name,
  logo,
  description,
  tags,
  images,
  likes,
  companyDetails,
  aboutUs,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="mx-auto max-w-6xl px-5 py-5 font-sans mt-10">
      <Link
        href="/"
        className="font-medium text-[14px] text-gray-900 mb-6 flex items-center justify-start gap-1.5 hover:underline transition"
      >
        <ArrowLeft size={16} /> Terug naar overzicht
      </Link>
      <header className="mb-6 flex items-center justify-between xl:lg:sm:flex-row flex-col gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-xl">
          <Image src={logo} alt={``} fill className="object-cover bg-gray-50" />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 active:scale-97">
            <span>
              <ArrowUp />
            </span>
            <span className="w-px h-3 bg-black/12 rounded-full"></span>
            <span>{likes}</span>
          </button>

          <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 active:scale-97">
            <span>
              <ShareIcon />
            </span>
            <span>Delen</span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-20 mt-10 lg:mt-0 md:grid-cols-[1fr_320px]">
        <div className="min-w-0">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">{name}</h1>
          <p className="mb-4 text-sm leading-relaxed text-gray-500">
            {description}
          </p>
          <div className="mb-6 flex items-center gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mb-8">
            <div className="relative mb-3 h-72 w-full overflow-hidden rounded-xl">
              <Image
                src={images[selectedImage]}
                alt="Gallery main"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-16 w-16 overflow-hidden rounded-lg transition-opacity ${
                    selectedImage === index
                      ? "opacity-100 ring-2 ring-orange-500"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              Over ons
            </h2>
            {aboutUs.map((paragraph, index) => (
              <p key={index} className="mb-4 text-sm leading-7 text-gray-600">
                {paragraph}
              </p>
            ))}
          </section>
        </div>
        <div className="order-first md:order-last">
          <div className="sticky top-5 rounded-xl bg-gray-50 p-6">
            <h3 className="mb-5 text-base font-semibold text-gray-900">
              Company details
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between flex-col md:flex-row gap-1.5">
                <span className="text-sm text-gray-400">Oprichtingsdatum</span>
                <span className="text-sm font-medium text-gray-900">
                  {companyDetails.founded}
                </span>
              </div>
              <div className="flex items-start justify-between flex-col md:flex-row gap-1.5">
                <span className="text-sm text-gray-400">Medewerkers</span>
                <span className="text-sm font-medium text-gray-900 ">
                  {companyDetails.employees}
                </span>
              </div>
              <div className="flex items-start justify-between flex-col md:flex-row gap-1.5">
                <span className="text-sm text-gray-400">Locatie</span>
                <span className="text-right text-sm font-medium text-gray-900">
                  {companyDetails.location}
                </span>
              </div>
              <div className="flex items-start justify-between flex-col md:flex-row gap-1.5">
                <span className="text-sm text-gray-400">Oprichter</span>
                <span className="text-sm font-medium text-gray-900">
                  {companyDetails.founder}
                </span>
              </div>
              <div className="flex items-start justify-between flex-col md:flex-row gap-1.5">
                <span className="text-sm text-gray-400">Type</span>
                <span className="rounded-md text-sm font-medium text-gray-900">
                  {companyDetails.type}
                </span>
              </div>
              <Link
                href="#"
                className="font-medium text-[14px] text-[#0074D3] mt-5 flex items-center justify-start gap-1.5 hover:underline active:scale-99 transition"
              >
                Bezoek website <VisitIcon />
              </Link>
              <Link
                href="#"
                className="font-medium text-[14px] text-[#0074D3] flex items-center justify-start gap-1.5 hover:underline active:scale-99 transition"
              >
                Neem contact op <Phone size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
