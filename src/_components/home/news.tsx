import { Card, CardContent } from "@/components/ui/card";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    date: "15 augustus 2025",
    title:  "Technology companies trending this month",
    description: 
      "Technology-focused businesses are receiving the most engagement right now.",
    imageUrl:  "/api/placeholder/400/200",
  },
  {
    id:  2,
    date: "15 augustus 2025",
    title:  "7 new companies added this week",
    description:
      "Fresh additions across technology, construction, and creative services in Fryslân.",
    imageUrl: "/api/placeholder/400/200",
  },
  {
    id: 3,
    date: "15 augustus 2025",
    title:  "Marine Engineering enters the Top 3",
    description: 
      "Strong community support pushed Marine Engineering into this month's top rankings.",
    imageUrl: "/api/placeholder/400/200",
  },
];

export default function NewsSection() {
  return (
    <section className="max-w-9xl w-full mx-auto px-4 py-8 sm:px-6 lg:px-2">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Nieuws
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((item) => (
          <Card
            key={item. id}
            className="border-none shadow-none bg-transparent"
          >
            <CardContent className="p-0 space-y-3">
              {/* Image Placeholder */}
              <div className="w-full aspect-video bg-gray-100 rounded-lg" />

              {/* Date */}
              <p className="text-sm text-gray-500">{item.date}</p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}