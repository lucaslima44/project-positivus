export function Hero() {
  return (
  <section className="flex w-full flex-col py-[70px] xl:px-[100px] text-start items-center font-spaceGrotesk">
      <div className="xl:h-[481px] flex flex-col justify-start items-start xl:gap-[35px] xl:relative">
      <h2 className="xl:w-[40%] text-[43px] lg:text-5xl font-bold">
        Navigating the digital landscape for success
      </h2>
      <img
        src="/hero.png"
        alt="hero"
        className="w-[400px]"
      />
      <p className="w-full xl:w-[40%] text-base xl:text-sm mt-5 " >
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
      <button className="rounded-lg bg-zinc-900 gap-10 xl:gap-2 py-2 px-5 flex justify-center items-center w-full mt-10"><a className="text-white text-center text-xl xl:text-xs ">Book a consultation</a></button>
      
    </div>
  </section>
  );
}
