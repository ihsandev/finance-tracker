import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-white min-h-[89vh] flex flex-col justify-center">
      <div className="container grid grid-cols-2 items-center">
        <figure className="gap-12 flex flex-col">
          <h1 className="text-brand text-6xl font-bold capitalize">
            Empowering your{" "}
            <span className="text-brand-secondary">financial future</span>
          </h1>
          <p className="font-salesforceSans text-lg">
            Managing your money shouldn’t be complicated. Our powerful finance
            tracking platform helps you track your income, expenses, savings,
            and investments—all in one place.
          </p>
        </figure>
        <figure className="h-full w-full flex justify-center">
          <Image
            width={500}
            height={500}
            src="/assets/hero-image.svg"
            alt="Hero"
          />
        </figure>
      </div>
    </section>
  );
};
