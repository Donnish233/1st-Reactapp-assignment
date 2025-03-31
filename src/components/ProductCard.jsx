import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProductCard({ image, title, rating, price }) {
  return (
    <div className="w-72 h-96 flex flex-col justify-start items-start gap-4 m-3">
        <img
          src={image}
          alt={title}
          aria-label={title}
          aria-labelledby={title}
          className="object-fill w-44 h-44 md:w-64 md:h-72 rounded-3xl"
        />

      <div>
        <h3 className="w-40 h-6 md:w-64 md:h-7 text-base md:text-xl text-nowrap leading-3 font-bold text-left line-clamp-1">{title}</h3>
        <div className="flex gap-5">
          <div className="w-fit h-5 gap-1 flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <Icon key={i} icon="openmoji:star" />
              ))}
          </div>
          <p className="text-left">{rating}/5</p>
        </div>
        <p className="font-bold text-2xl text-left">${price}</p>
      </div>
    </div>
  );
}
