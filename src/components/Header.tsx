import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky items-center top-0 z-50 h-16 flex justify-between bg-white shadow-md px-1 md:px-5">
      {/* left */}

      <div className="relative w-1/3 flex h-16 my-auto cursor-pointer">
        <Image
          //   height={60}
          //   width={60}
          layout="fill"
          objectPosition="left"
          objectFit="contain"
          src={
            "https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
          }
        />
      </div>

      {/* middle  */}

      <div className="flex flex-grow items-center h-12 shadow-md md:border-2 rounded-full">
        <input
          className="bg-transparent outline-none flex-grow px-3"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="h-8 mr-3 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex" />
      </div>

      {/* right */}

      <div className="flex w-1/3"></div>
    </header>
  );
};

export default Header;
