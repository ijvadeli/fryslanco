import PlaceholderLogo from "../svgs/logo";
import { ToggleGroupSpacing } from "../ui/toggle-group";

const companiesFeatured = [
  { name: "Councile Studio", category: "Design - Development - Animation", rating: "6.2" },
  { name: "Marine Engineering", category: "Shipbuilding - Maintenance", rating: "6.2" },
  { name: "Marine Engineering", category: "Shipbuilding - Maintenance", rating: "6.2" },
];

const topCompanies = [
  { name: "Formance", category: "Inspections", rating: "6.9" },
  { name: "Civil Engineering", category: "Bridge Design - Inspections", rating: "9.2" },
  { name: "Civil Engineering", category: "Bridge Design - Inspections", rating: "9.2" },
];

const CompanyList = () => {
  return (
    <div className="p-4 mx-20">
      <h2 className="text-2xl font-semibold mb-4">Uitgelichte bedrijven</h2>
      {companiesFeatured.map((company, index) => (
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
          <ToggleGroupSpacing />
        </div>
      ))}

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
          <ToggleGroupSpacing />
        </div>
      ))}
    </div>
  );
};

export default CompanyList;