import Link from "next/link";
import Image from "next/image";
import { SOPHILUM_LOGOTYPE, SPAIN } from "@/utils/assets/images";
import { SEARCH, SHOPPING_CART } from "@/utils/assets/icons/icons";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-16 py-8 bg-white">
      <div>
        <Image src={SOPHILUM_LOGOTYPE} alt="Logo" width={120} height={120} />
      </div>

      <div className="space-x-16">
        <Link href="/">Inicio</Link>
        <Link href="/shop">Tienda</Link>
        <Link href="/about">Nosotros</Link>
        <Link href="/contact">Contacto</Link>
      </div>

      <div className="flex space-x-8">
        <Image src={SEARCH} alt="Search" width={30} height={30} />
        <Link href="/cart">
          <Image src={SHOPPING_CART} alt="Cart" width={30} height={30} />
        </Link>
        <Image src={SPAIN} alt="Spanish Flag" width={30} height={30} />
      </div>
    </nav>
  );
}
