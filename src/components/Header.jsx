import Link from "next/link";
import Nav from "./Nav";
import { Button } from "@/components/ui/button.tsx";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className=" py-4 xl:py-8 text-white">
      <div className="flex container mx-auto justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            om<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          
        </div>
        {/*    mobile navbar */}

        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
