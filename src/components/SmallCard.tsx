import Image from "next/image";

type cardData = {
  item: {
    img: "string";
    location: "string";
    distance: "string";
  };
};

const SmallCard = (props: cardData) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4  cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform ease-out duration-200">
      {/* left */}
      <div className="relative h-16 w-16 ">
        <Image className="rounded-lg" layout="fill" src={props.item.img} />
      </div>

      {/* right */}
      <div className="flex flex-col">
        <h2 className="font-semibold text-black">{props.item.location}</h2>
        <h3 className="text-gray-500">{props.item.distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
