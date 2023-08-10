import Categories from "@/components/categories/Categories";
import Hero from "@/components/hero/Hero";
import OurProducts from "@/components/our-products/OurProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <OurProducts />
    </main>
  );
}
