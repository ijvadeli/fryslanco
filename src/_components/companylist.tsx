import PlaceholderLogo from "./svgs/logo";
import ToggleGroupSpacing from "./ui/toggle-group";

const companiesFeatured = [
  { name: "Councile Studio", category: "Design - Development - Animation", rating: "6.2K" },
  { name: "Marine Engineering", category: "Shipbuilding - Maintenance", rating: "6.2K" },
  { name: "Marine Engineering", category: "Shipbuilding - Maintenance", rating: "6.2K" },
];

const topCompanies = [
  { name: "Formance", category: "Inspections", rating: "6.9K" },
  { name: "Civil Engineering", category: "Bridge Design - Inspections", rating: "9.2K" },
  { name: "Civil Engineering", category: "Bridge Design - Inspections", rating: "9.2K" },
];

const CompanyList = () => {
  return (
    <div className="mx-5 md:mx-0">
      {/* Uitgelichte bedrijven blok */}
      <h2 className="text-2xl font-semibold mb-4">Uitgelichte bedrijven</h2>
      {companiesFeatured.map((company, index) => (
        <div key={index} className="flex items-center justify-between p-2 mb-5 rounded-[10px] border shadow-sm">
          <div className="flex items-center">
            <div className="p-3 mr-4">
              <PlaceholderLogo />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <p className="text-gray-600">{company.category}</p>
            </div>
          </div>
          {/* <span className="font-bold">{company.rating}</span> */}
          <ToggleGroupSpacing value={company.rating}/>
        </div>
      ))}
      {/* Top bedrijven blok */}
      <h2 className="text-2xl font-semibold my-4">Topbedrijven deze maand</h2>
      {topCompanies.map((company, index) => (
        <div key={index} className="flex items-center justify-between p-2 mb-5 rounded-2xl border shadow-sm">
          <div className="flex items-center">
            <div className="p-3 mr-4">
              <PlaceholderLogo />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <p className="text-gray-600">{company.category}</p>
            </div>
          </div>
          {/* <span className="font-bold">{company.rating}</span> */}
          <ToggleGroupSpacing value={company.rating} />
        </div>
      ))}
    </div>
  );
};

export default CompanyList;