export function Header() {
  return (
    <div className="w-full text-center justify-between cursor-pointer items-center text-sm flex">
      <img src="/logo.png" alt="logo" className="w-[140px] h-full " />

      <div className="justify-center items-center gap-10 flex ">
        {/* ARRUMAR LISTA*/}
        <a>About us</a>
        <a>Services</a>
        <a>Use Cases</a>
        <a>Pricing</a>
        <a>Blog</a>

        <div className="py-[6px] px-3 items-center rounded-[14px] border border-solid border-zinc-800">
          <button className="text-center  leading-7 text-sm">
            Request a quote
          </button>
        </div>
      </div>
    </div>
  );
}
