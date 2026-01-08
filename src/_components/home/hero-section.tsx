import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="">
      <div className="bg-background py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex items-center flex-col lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Check className="size-4 shrink" />
                <span>Net als 17. 500+ anderen</span>
              </div>

              <h1 className="text-foreground text-2xl sm:text-3xl lg:text-[32px] font-semibold leading-tight">
                Dé plek om Friese bedrijven
                <br className="hidden sm:block" />
                <span className="sm: hidden"> </span>
                en organisaties te{" "}
                <span className="text-black/50">ontdekken. </span>
              </h1>

              <form className="mt-6 sm:mt-8 flex flex-col sm: md:flex-row gap-3 sm:gap-5 w-full max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your e-mail address"
                  className="w-full sm:flex-1 pl-3 bg-gray-100 border-0 focus-visible:ring-1"
                />
                <Button type="submit" className="w-full sm:w-auto whitespace-nowrap">
                  Gratis abonneren
                </Button>
              </form>

              <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link href="#" className="underline hover:text-foreground">
                  privacy policy
                </Link>
                . 
              </p>
            </div>

            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  Image Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}