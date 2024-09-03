export function Hero() {
  return (
  <section className="flex w-full flex-col py-[70px] px-[100px] text-start items-center">
      <div className="h-[481px] flex flex-col justify-start items-start gap-[35px] relative">
      <h2 className="w-[40%] text-5xl font-bold ">
        Navigating the digital landscape for success
      </h2>
      <p className="w-[40%] text-sm">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
      <button className="rounded-lg bg-zinc-900 gap-2 py-2 px-5"><a className="text-white text-center text-xs ">Book a consultation</a></button>
      <img
        src="/hero.png"
        alt="hero"
        className="w-[400px] absolute top-0 right-0"
      />
    </div>
  </section>
  );
}
