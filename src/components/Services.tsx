export function Services() {
  return (
    <section className="items-center mt-[60px] ">
      <div className="flex flex-col justify-center items-center gap-[30px] px-5 mb-10">
        <h2 className="bg-[#b9ff66] text-4xl font-medium w-[161px] h-[46px] rounded-md">
          Services
        </h2>
        <p className="text-base">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="flex-wrap flex-row gap-7 flex">
        <img src="/card.png" alt="card 00" />
        <img src="/card-1.png" alt="card 01" />
        <img src="/card-2.png" alt="card 02" />
        <img src="/card-3.png" alt="card 03" />
        <img src="/card-4.png" alt="card 04" />
        <img src="/card-5.png" alt="card 05" />
      </div>
    </section>
  );
}
