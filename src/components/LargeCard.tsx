import { largeCardTypes } from "@/types";
import Image from "next/image";

type propsTypes = {
  item: largeCardTypes;
};

const LargeCard = (props: propsTypes) => {
  return (
    <section className="relative my-8 sm:my-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl"
          objectFit="cover"
          layout="fill"
          src={props.item.img}
        />
      </div>

      <div className="absolute top-16 left-12">
        <h3 className="text-2xl mb-3 w-64 font-semibold">{props.item.title}</h3>
        <p className="">{props.item.description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {props.item.buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
