import { GoShieldCheck } from "react-icons/go";
import { MdOutlineHeadphones } from "react-icons/md";
import { PiTruckDuotone } from "react-icons/pi";

const ShopServices = () => {
  return (
    <div className="flex justify-between py-10 mt-24 bg-background">
      {/* Service 1 */}
      <div className="flex flex-col items-center w-1/3 text-center">
        <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gray-300 rounded-full">
          <div className="flex items-center justify-center text-4xl text-surface bg-foreground w-[60px] h-[60px] rounded-full w-15 h-15">
            <PiTruckDuotone />
          </div>
        </div>
        <div>
          <div className="mb-2 text-xl font-semibold">
            FREE AND FAST DELIVERY
          </div>
          <p className="text-gray-700">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>

      {/* Service 2 */}
      <div className="flex flex-col items-center w-1/3 text-center">
        <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gray-300 rounded-full">
          <div className="flex items-center justify-center text-4xl rounded-full text-surface bg-foreground w-[60px] h-[60px]">
            <MdOutlineHeadphones />
          </div>
        </div>
        <div>
          <div className="mb-2 text-xl font-semibold">
            24/7 CUSTOMER SERVICE
          </div>
          <p className="text-gray-700">Friendly 24/7 customer support</p>
        </div>
      </div>

      {/* Service 3 */}
      <div className="flex flex-col items-center w-1/3 text-center">
        <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gray-300 rounded-full">
          <div className="flex items-center justify-center text-4xl rounded-full text-surface bg-foreground w-[60px] h-[60px]">
            <GoShieldCheck />
          </div>
        </div>
        <div>
          <div className="mb-2 text-xl font-semibold">MONEY BACK GUARANTEE</div>
          <p className="text-gray-700">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default ShopServices;
