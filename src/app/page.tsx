import React from "react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";
import { hotelsData } from "@/constants/data";
import { cardsData } from "@/constants/cardsData";
import Card from "@/components/Card";

// export async function getStaticProps() {
//   const response = await fetch("https://links.papareact.com/pyp");
//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default function Page(props: any) {
  return (
    <div>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto p-4">
        <h2 className="font-semibold text-2xl  md:text-4xl pb-4">
          Exlpore Nearby
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* pull some data from a server - API endpoints */}
          {hotelsData.map((item, index) => {
            return <SmallCard key={index} item={item} />;
          })}
        </section>

        <h2 className="font-semibold text-2xl  md:text-4xl pb-4 mt-10">
          Live Anywhere
        </h2>
        <section className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
          {/* pull some data from a server - API endpoints */}
          {cardsData.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </section>
      </main>
    </div>
  );
}
