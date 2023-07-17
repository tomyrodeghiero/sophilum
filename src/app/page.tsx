import Categories from "@/components/categories/Categories";
import Hero from "@/components/hero/Hero";
import OurProducts from "@/components/our-products/OurProducts";
import WhatsApp from "@/components/whatsapp/Whatsapp";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <OurProducts />
      <WhatsApp />
    </main>
  );
}
