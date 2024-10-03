import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";


function App() {
  const url =
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
  const [cafes, setCafes] = useState([]);
  const [filterActive, setFilterActive] = useState("all");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCafes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filtrar los cafés según el filtro activo
  const filteredCafes = cafes.filter((cafe) => {
    if (filterActive === "available") {
      return cafe.available;
    }
    return true; // Mostrar todos los productos si el filtro es "all"
  });

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto translate-y-10  xl:translate-y-52">
        <main className=" relative bg-bgLayout rounded-xl py-20 px-8 overflow-hidden text-center m-4">
          <img
            src="../src/assets/vector.svg"
            alt="Vector Svg"
            className="absolute top-10 right-[-3.875rem] sm:top-6 sm:left-[48.5%] "
          />

          <h1 className="text-[32px] text-colorTxt font-bold mb-4">
            Our Collection
          </h1>

          <p className="relative text-secondary text-center w-full max-w-[26rem] mx-auto mb-4 lg:max-w-[32rem] sm:text-center">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small{" "}
            <span className="text-center  sm:inline ">
              batches and shipped fresh weekly.
            </span>{" "}
          </p>

          <div className="flex justify-between md:justify-center md:gap-8 m-6 text-colorTxt">
            <button
              className={`text-[16px] ${
                filterActive === "all" ? "bg-secondary" : ""
              } hover:bg-secondary font-bold px-4 py-3 rounded-xl transition-all duration-500 ease-in-out`}
              type="button"
              onClick={() => setFilterActive("all")}
            >
              All Products
            </button>

            {/* Botón para mostrar solo productos disponibles */}
            <button
              className={`text-[16px] ${
                filterActive === "available" ? "bg-secondary" : ""
              } hover:bg-secondary font-bold px-4 py-3 rounded-xl transition-all duration-500 ease-in-out`}
              type="button"
              onClick={() => setFilterActive("available")}
            >
              Available Now
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {filteredCafes.length > 0 &&
              filteredCafes.map((cafe) => <Card key={cafe.id} coffee={cafe} />)}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
