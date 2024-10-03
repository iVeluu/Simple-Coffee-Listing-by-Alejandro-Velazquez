import PropTypes from "prop-types";

export default function Card({ coffee }) {
  return (
    <section className="mx-auto">
      <div className="mb-16">
        <div className="flex flex-col">
          <img
            src={coffee.image}
            alt={`Imagen del cafe ${coffee.name}`}
            className="relative rounded-xl"
          />
          {coffee.popular ? (
            <p className="absolute ml-2.5 mt-2.5 text-xs font-bold bg-popular py-1 px-2 rounded-xl">
              Popular
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="flex justify-between mt-2.5">
          <p className="text-colorTxt text-base font-bold">{coffee.name}</p>
          <p className="bg-price text-[12px] p-1 font-extrabold rounded-md ">
            {coffee.price}
          </p>
        </div>

        <div className="flex text-colorTxt gap-1 justify-between mt-1">
          {coffee.votes === 0 ? (
            <div className="flex items-center text-sm gap-1">
              <img src="/Star.svg" alt="Star Svg" className="" />
              <p className="">No ratings</p>
            </div>
          ) : (
            <div className="flex items-center text-sm gap-1">
              <img
                src="/Star_fill.svg"
                alt="Star Svg"
                className=""
              />
              <p className="font-bold">{coffee.rating}</p>
              <p className="text-secondary">({coffee.votes} votes)</p>
            </div>
          )}

          {!coffee.available && <p className="text-xs my-auto font-bold text-soldOut">Sold out</p>}
        </div>
      </div>
    </section>
  );
}

// Validación de props
Card.propTypes = {
  coffee: PropTypes.object.isRequired,
};