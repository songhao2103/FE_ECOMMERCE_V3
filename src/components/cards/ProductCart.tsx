import React from "react";
import { motion } from "framer-motion";
import BoxPrice from "../prices/BoxPrice";
import Ratings from "../ratings/Ratings";

export interface IProductInfoOnCard {
  id: number;
  productName: string;
  productImage: string;
  discount: number;
  price: number;
  rating: number;
  sold?: number;
}

interface IProductCartProps {
  productInfo: IProductInfoOnCard;
  onClick?: (productId: number) => void;
}

const ProductCart: React.FC<IProductCartProps> = ({ productInfo, onClick }) => {
  return (
    <motion.div
      onClick={() => onClick && onClick(productInfo.id)}
      className="w-full rounded-lg cursor-pointer bg-surface group"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { boxShadow: "0 4px 10px rgba(0,0,0,0.15)", transform: "none" },
        hover: {
          boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
          transform: "translateY(-4px)",
        },
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Box chứa ảnh (phải overflow-hidden để Add to cart trồi lên) */}
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-tl-md rounded-tr-md">
        {/* Product Image */}
        <motion.img
          src={productInfo.productImage}
          alt={productInfo.productName}
          className="object-contain w-full h-full rounded-tl-md rounded-tr-md"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.1 },
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Discount Badge */}
        <div className="absolute flex items-center justify-center w-12 h-6 text-sm font-semibold rounded-md text-surface bg-secondary top-2 left-2">
          -{productInfo.discount}%
        </div>

        {/* Add to cart */}
        <motion.div
          className="absolute bottom-0 left-0 w-full py-2 font-semibold text-center bg-foreground text-surface hover:bg-secondary hover:text-surface"
          variants={{
            rest: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Add to cart
        </motion.div>
      </div>

      <div className="px-4 pb-4">
        {/* Product Name */}
        <p className="transition-colors duration-300 title-h5 group-hover:text-secondary">
          {productInfo.productName}
        </p>

        <BoxPrice price={productInfo.price} discount={productInfo.discount} />
        <div className="flex items-center gap-2 mt-2 text-sm">
          <Ratings rating={productInfo.rating} />
          {productInfo.sold && (
            <span className="text-foreground-muted">({productInfo.sold})</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCart;
