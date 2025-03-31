
import { Icon } from "@iconify/react/dist/iconify.js";
import Colorpicker from "./colorpicker";
import Size from "./button";

export default function Aside() {
  return (
    <aside className="hidden w-72 h-[1220px] md:flex flex-col justify-start gap-6 my-16 mx-0 py-4 px-4 rounded-3xl float-left border-2 border-s-[#dcdcdc]">
      <div className="w-64 h-7 flex justify-between">
        <h2 className="w-14 h-7 font-extrabold">Filters </h2>
        <Icon id="rot" icon="mage:filter" width={24} height={24} />
      </div>
      <hr />
      <div className="w-64 h-40 flex flex-col gap-5 justify-start">
        <div className="w-64 h-4 flex justify-between">
          <li className="w-14 h-4">T-shirts</li>
          <Icon className="shift" icon="lucide:chevron-right" />
        </div>
        <div className="w-64 h-4 flex justify-between">
          <li className="w-14 h-4">Shorts</li>
          <Icon className="shift" icon="lucide:chevron-right" />
        </div>
        <div className="w-64 h-4 flex justify-between">
          <li className="w-14 h-4">Shirts</li>
          <Icon className="shift" icon="lucide:chevron-right" />
        </div>
        <div className="w-64 h-4 flex justify-between">
          <li className="w-14 h-4">Hoodie</li>
          <Icon className="shift" icon="lucide:chevron-right" />
        </div>
        <div className="w-64 h-4 flex justify-between">
          <li className="w-14 h-4">Jeans</li>
          <Icon className="shift" icon="lucide:chevron-right" />
        </div>
      </div>
      <hr />
      <div className="w-64 h-24 flex flex-col justify-between gap-5">
        <h2 className="w-14 h-7 font-extrabold">Price</h2>
        <Icon className="shift" icon="lucide:chevron-right" />
        <img src="" alt="" />
      </div>
      <hr />
      <div className="w-64 h-72 flex flex-col justify-between">
        <h2 className="w-14 h-7 font-extrabold">Size</h2>
        <div className="w-64 flex justify-start flex-wrap gap-2">
          <Size id='XX-Small'/>
          <Size id='X-Small' />
          <Size id='Small' />
          <Size id='Medium'/>
          <Size id='Large'/>
          <Size id='X-Large'/>
          <Size id='XX-Large'/>
          <Size id='3X-Large'/>
          <Size id='4X-Large'/>
        </div>
      </div>
      <hr />
      <div>
        <h2>Color</h2>
        <div className="w-64 h-24 flex flex-col justify-between gap-4">
          <div className="w-64 h-10 flex justify-between gap-1">
            <div className="bg-[#00c12b] w-8 h-8 rounded-full border-2 border-green-700">
              <Colorpicker />
            </div>
            <div className="bg-[#f50606] w-8 h-8 rounded-full border-2 border-red-700">
              <Colorpicker />
            </div>
            <div className="bg-[#f5dd06] w-8 h-8 rounded-full border-2 border-yellow-700">
              <Colorpicker />
            </div>
            <div className="bg-[#f57906] w-8 h-8 rounded-full border-2 border-yellow-700">
              <Colorpicker />
            </div>
            <div className="bg-[#06caf5] w-8 h-8 rounded-full">
              <Colorpicker />
            </div>
          </div>
          <div className="w-64 h-10 flex justify-between gap-1">
            <div className="bg-[#063af5] w-8 h-8 rounded-full">
              <Colorpicker />
            </div>
            <div className="bg-[#7d06f5] w-8 h-8 rounded-full">
              <Colorpicker />
            </div>
            <div className="bg-[#f506a4] w-8 h-8 rounded-full">
              <Colorpicker />
            </div>
            <div className="bg-white w-8 h-8 rounded-full border-2 border-slate-200">
              <Colorpicker />
            </div>
            <div className="bg-black w-8 h-8 rounded-full border-2 border-black">
              <Colorpicker />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h2>Dress Style</h2>
        <div className="w-64 h-40 flex flex-col gap-5 justify-start">
          <div className="w-64 h-4 flex justify-between">
            <li className="w-14 h-4">Casual</li>
            <Icon className="shift" icon="lucide:chevron-right" />
          </div>
          <div className="w-64 h-4 flex justify-between">
            <li className="w-14 h-4">Formal</li>
            <Icon className="shift" icon="lucide:chevron-right" />
          </div>
          <div className="w-64 h-4 flex justify-between">
            <li className="w-14 h-4">Party</li>
            <Icon className="shift" icon="lucide:chevron-right" />
          </div>
          <div className="w-64 h-4 flex justify-between">
            <li className="w-14 h-4">Gym</li>
            <Icon className="shift" icon="lucide:chevron-right" />
          </div>
        </div>
        <button
          type="button"
          className="w-64 h-12 bg-black rounded-full text-white"
        >
          Apply Filter
        </button>
      </div>
    </aside>
  );
}
