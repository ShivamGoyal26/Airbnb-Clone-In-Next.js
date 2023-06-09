import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        alt="Airbnb"
        objectFit="cover"
        layout="fill"
        src={"https://links.papareact.com/0fm"}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-lg md:text-2xl">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full mt-3 font-semibold hover:shadow-xl active:scale-90 transition duration-150">
          {"I'm flexible"}
        </button>
      </div>
    </div>
  );
};

export default Banner;
