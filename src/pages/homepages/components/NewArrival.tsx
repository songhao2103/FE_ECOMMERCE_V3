import { motion } from "framer-motion";

const NewArrival = () => {
  return (
    <div className="mt-24 text-white">
      {/* Header */}
      <div className="mb-12">
        <p className="text-lg text-white">Featured</p>
        <p className="text-3xl font-bold text-white">New Arrival</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        {/* Item 1 */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex items-center col-span-2 row-span-2 overflow-hidden bg-gradient-to-tr from-black via-neutral-800 to-black"
        >
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/ecommerce/products/anh_png_1-removebg-preview.png"
            alt=""
            className="w-full"
          />
          <div className="absolute w-1/2 bottom-5 left-5">
            <p className="mb-3 text-3xl font-bold text-white">
              iPhone 16 Pro Max 256GB
            </p>
            <p className="mb-3 text-sm text-white">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-white border-b border-white">
                Shop Now
              </p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex items-center col-span-2 row-span-1 overflow-hidden bg-gradient-to-tr from-black via-neutral-800 to-black"
        >
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/ecommerce/products/anh_png_2-removebg-preview.png"
            alt=""
            className="w-full -scale-x-100"
          />
          <div className="absolute w-1/2 bottom-5 left-5">
            <p className="mb-3 text-3xl font-bold text-white">
              MacBook Air M3 13 inch 2024
            </p>
            <p className="mb-3 text-sm text-white">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-white border-b border-white">
                Shop Now
              </p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex items-center col-span-1 row-span-1 overflow-hidden bg-gradient-to-tr from-black via-neutral-800 to-black"
        >
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/ecommerce/products/anh_png_3-removebg-preview.png"
            alt=""
            className="w-full"
          />
          <div className="absolute w-3/4 bottom-5 left-5">
            <p className="mb-3 font-bold text-white title-h3">Apple AirPods</p>
            <p className="mb-3 text-sm text-white">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-white border-b border-white">
                Shop Now
              </p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </motion.div>

        {/* Item 4 */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex items-center col-span-1 row-span-1 overflow-hidden bg-gradient-to-tr from-black via-neutral-800 to-black"
        >
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/ecommerce/products/anh_png_4-removebg-preview.png"
            alt=""
            className="w-full"
          />
          <div className="absolute w-3/4 bottom-5 left-5">
            <p className="mb-3 text-3xl font-bold text-white">Apple AirPods</p>
            <p className="mb-3 text-sm text-white">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-white border-b border-white">
                Shop Now
              </p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewArrival;
