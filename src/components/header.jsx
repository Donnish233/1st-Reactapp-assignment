import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header() {
  return (
    <header className="h-16 px-8 flex flex-nowrap justify-between align-middle mx-auto py-2 gap-8">
      <h1 className="w-40 h-5 leading-5 text-black my-auto font-bold">
        SHOP.CO
      </h1>
      <nav className="hidden md:flex w-64 h-6 my-auto">
        <ul className="w-64 h-6 flex justify-between gap-1">
          <li>
            Shop
            <Icon icon="lucide:chevron-right" />
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
      </nav>
      <div className="w-[400px] h-12 rounded-[60px] px-4 py-3 bg-[#f0f0f0] flex justify-start gap-3 my-auto mx-0">
        <Icon icon="proicons:search" />
        <input
          id="search"
          type="text"
          placeholder="Search for products..."
          className="text-black bg-inherit w-96"
        />
      </div>
      <div className="w-16 h-6 flex justify-between my-auto mx-0">
        <Icon icon="eva:shopping-cart-outline" width={25} height={25} />
        <Icon icon="pajamas:profile" width={25} height={25} />
      </div>
    </header>
  );
}
