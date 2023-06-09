import { cardTypes } from "@/types";
import Image from "next/image";

type propsTypes = {
  item: cardTypes;
};

const Card = (props: propsTypes) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform ease-out duration-300">
      <div className="relative h-80 w-80 ">
        <Image
          alt="Airbnb"
          className="rounded-lg"
          layout="fill"
          src={props.item.img}
        />
      </div>

      <h2 className="w-80 truncate font-medium text-lg sm:text-xl mt-3 text-black">
        {props.item.title}
      </h2>
    </div>
  );
};

export default Card;
