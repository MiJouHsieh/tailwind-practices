import { CiTrash } from "react-icons/ci"; 
import { Select } from "../components/Select";
import { QTY, SIZES } from "../constant";

export function CartItem ({ item }) {
  return (
    <div className="cursor-pointer space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2]">
      <div className="flex space-x-2">
        {/* image */}
        <img className="h-24" src={item.src} alt="product in cart" />
        <div className="space-y-2">
          {/* title & description */}
          <div className="font-bold">{item.title}</div>
          <div className="text-sm text-gray-400">{item.description}</div>
        </div>
        {/* price */}
        <div className="font-bold">{item.price}$</div>
      </div>

      <div className="flex justify-between pl-32 outline">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold">SIZE</div>
            <Select title="" options={SIZES} className={"w-16 p-1"} />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select title="" options={QTY} className={"w-16 p-1"} />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
}