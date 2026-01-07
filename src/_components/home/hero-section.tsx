import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      <div className="bg-background py-16 lg:py-24">
        <div className="mx-auto lg:mx-32 max-w-8xl ">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex items-center flex-col lg:items-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Check className="size-4" />
                <span>Net als 17. 500+ anderen</span>
              </div>

              <h1 className="text-foreground text-3xl font-semibold lg:text-4xl leading-tight">
                Dé plek om Friese bedrijven
                <br />
                en organisaties te{" "}
                <span className="text-foreground">ontdekken. </span>
              </h1>

              <form className="mt-8 flex gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your e-mail address"
                  className="w-48 pl-3 bg-gray-100 border-0 focus-visible:ring-1"
                />
                <Button type="submit">Gratis abonneren</Button>
              </form>

              <p className="mt-4 text-sm text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link href="#" className="underline hover:text-foreground">
                  privacy policy
                </Link>
                .
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-square bg-muted rounded-lg flex items-center justify-center">
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
