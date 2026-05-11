import Hero from "@/components/public/hero";
import Services from "@/components/public/services";
import Pricing from "@/components/public/pricing";
import Gallery from "@/components/public/gallery";
import About from "@/components/public/about";
import Booking from "@/components/public/booking";
import Testimonials from "@/components/public/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <About />
      <Booking />
      <Testimonials />
    </>
  );
}
