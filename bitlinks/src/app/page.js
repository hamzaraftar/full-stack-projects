import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4  items-center justify-center">
          <p className="text-4xl font-bold">
            The Best URL Shortener in the Market
          </p>
          <p>
            We are the most straightforward URL shortener on the web. Unlike
            others, we prioritize your privacy by not tracking your activities
            or requiring login details.
          </p>
        </div>
        <div className="flex justify-start relative">
          <Image src={"/vector.png"} alt="an image of vector" fill={true} />
        </div>
      </section>
    </main>
  );
}
