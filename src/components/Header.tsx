import { Menu } from "lucide-react";

export function Header() {
  return (
    <div className="w-full text-center justify-between cursor-pointer items-center text-sm flex">
      <img src="/logo.png" alt="logo" className="w-[140px] h-full " />

      <Menu className="xl:hidden" />
      <div className="hidden justify-center items-center gap-10 xl:flex ">
        {/* ARRUMAR LISTA*/}
        <a>About us</a>
        <a>Services</a>
        <a>Use Cases</a>
        <a>Pricing</a>
        <a>Blog</a>

        <div className="py-[5px] px-5 items-center rounded-lg border border-solid border-zinc-800">
          <button className="text-center  leading-7 text-sm">
            Request a quote
          </button>
        </div>
      </div>
    </div>
  );
}
