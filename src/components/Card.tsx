import Image from "next/image";

type cardData = {
  item: {
    img: "string";
    title: "string";
  };
};

const Card = (props: cardData) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform ease-out duration-300">
      <div className="relative h-80 w-80 ">
        <Image className="rounded-lg" layout="fill" src={props.item.img} />
      </div>

      <h2 className="w-80 truncate font-medium text-xl mt-3 text-black">
        {props.item.title}
      </h2>
    </div>
  );
};

export default Card;
