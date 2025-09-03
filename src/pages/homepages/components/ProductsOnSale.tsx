import { useRef } from "react";
import ButtonArrow from "../../../components/button/ButtonArrow";
import ProductCart from "../../../components/cards/ProductCart";
import CountdownTimer from "../../../components/countdown/Countdown";
import BoxSection from "./BoxSection";
import useWindowWidth from "../../../hooks/dom/useWindownWidth";
import ButtonCustom from "../../../components/button/ButtonCustom";

const deadline = new Date("2025-10-15T00:00:00").getTime();
interface IProductInfoOnCard {
  id: number;
  productName: string;
  productImage: string;
  discount: number;
  price: number;
  rating: number;
  sold?: number;
}

const fakeProducts: IProductInfoOnCard[] = [
  {
    id: 1,
    productName: "Tai nghe Bluetooth Gaming",
    productImage:
      "http://res.cloudinary.com/dbsz3mavr/image/upload/v1737143389/product_images/4cf803b0-dc3b-41de-9021-3a5bb1f7222f.webp",
    discount: 20,
    price: 599000,
    rating: 4.5,
    sold: 120,
  },
  {
    id: 2,
    productName: "Chuột không dây RGB",
    productImage:
      "http://res.cloudinary.com/dbsz3mavr/image/upload/v1737143391/product_images/2646f7ad-7161-4246-9598-0675389f7962.webp",
    discount: 15,
    price: 399000,
    rating: 4.2,
    sold: 80,
  },
  {
    id: 3,
    productName: "Bàn phím cơ LED",
    productImage:
      "http://res.cloudinary.com/dbsz3mavr/image/upload/v1737143391/product_images/73769eae-620f-4bc7-9aa2-b9aa80c867ce.webp",
    discount: 30,
    price: 899000,
    rating: 4.8,
    sold: 200,
  },
  {
    id: 4,
    productName: "Màn hình Gaming 27 inch",
    productImage:
      "http://res.cloudinary.com/dbsz3mavr/image/upload/v1737143391/product_images/0c844459-3e1b-4fb4-b779-28622ef52284.webp",
    discount: 10,
    price: 5499000,
    rating: 4.7,
    sold: 50,
  },
  {
    id: 5,
    productName: "Tai nghe Bluetooth Gaming",
    productImage:
      "http://res.cloudinary.com/dbsz3mavr/image/upload/v1737143389/product_images/4cf803b0-dc3b-41de-9021-3a5bb1f7222f.webp",
    discount: 20,
    price: 599000,
    rating: 4.5,
    sold: 120,
  },
  {
    id: 6,
    productName: "Chuột không dây RGB",
    productImage:
      "http://res.cloudinary.com/dbsz3mavr/image/upload/v1737143391/product_images/2646f7ad-7161-4246-9598-0675389f7962.webp",
    discount: 15,
    price: 399000,
    rating: 4.2,
    sold: 80,
  },
  {
    id: 7,
    productName: "Bàn phím cơ LED",
    productImage:
      "http://res.cloudinary.com/dbsz3mavr/image/upload/v1737143391/product_images/73769eae-620f-4bc7-9aa2-b9aa80c867ce.webp",
    discount: 30,
    price: 899000,
    rating: 4.8,
    sold: 200,
  },
  {
    id: 8,
    productName: "Màn hình Gaming 27 inch",
    productImage:
      "http://res.cloudinary.com/dbsz3mavr/image/upload/v1737143391/product_images/0c844459-3e1b-4fb4-b779-28622ef52284.webp",
    discount: 10,
    price: 5499000,
    rating: 4.7,
    sold: 50,
  },
  {
    id: 9,
    productName: "Tai nghe Bluetooth Gaming",
    productImage:
      "http://res.cloudinary.com/dbsz3mavr/image/upload/v1737143389/product_images/4cf803b0-dc3b-41de-9021-3a5bb1f7222f.webp",
    discount: 20,
    price: 599000,
    rating: 4.5,
    sold: 120,
  },
  {
    id: 10,
    productName: "Chuột không dây RGB",
    productImage:
      "http://res.cloudinary.com/dbsz3mavr/image/upload/v1737143391/product_images/2646f7ad-7161-4246-9598-0675389f7962.webp",
    discount: 15,
    price: 399000,
    rating: 4.2,
    sold: 80,
  },
  {
    id: 11,
    productName: "Bàn phím cơ LED",
    productImage:
      "http://res.cloudinary.com/dbsz3mavr/image/upload/v1737143391/product_images/73769eae-620f-4bc7-9aa2-b9aa80c867ce.webp",
    discount: 30,
    price: 899000,
    rating: 4.8,
    sold: 200,
  },
  {
    id: 12,
    productName: "Màn hình Gaming 27 inch",
    productImage:
      "http://res.cloudinary.com/dbsz3mavr/image/upload/v1737143391/product_images/0c844459-3e1b-4fb4-b779-28622ef52284.webp",
    discount: 10,
    price: 5499000,
    rating: 4.7,
    sold: 50,
  },
];

const ProductsOnSale = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();

  const handleScroll = (type: 1 | -1) => {
    if (windowWidth > 340 && windowWidth < 640) {
      containerRef.current?.scrollBy({
        left: containerRef.current.offsetWidth / 3,
        behavior: "smooth",
      });
    }

    containerRef.current?.scrollBy({
      left: containerRef.current.offsetWidth * type,
      behavior: "smooth",
    });
  };

  return (
    <BoxSection title="To day's">
      <div>
        <div className="flex flex-col items-center justify-center lg:items-end gap-x-6 xl:flex-row">
          <p className="flex-shrink-0 title-h2 ">Flash Sales</p>

          <div className="flex items-center justify-between w-full">
            <CountdownTimer deadline={deadline} />
            <div className="items-center hidden gap-3 lg:flex">
              <ButtonArrow
                type="left"
                onClick={() => {
                  handleScroll(-1);
                }}
              />
              <ButtonArrow type="right" onClick={() => handleScroll(1)} />
            </div>
          </div>
        </div>

        <div className="relative mt-6">
          {/* Wrapper */}
          <div
            ref={containerRef}
            className="flex py-3 overflow-x-hidden scrollbar-hide snap-x snap-mandatory"
          >
            {fakeProducts.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-1/2 px-3 snap-start sm:w-1/3 lg:w-1/5"
              >
                <div>
                  <ProductCart productInfo={item} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <ButtonCustom label="View all products" hideIcon size="lg" />
        </div>
      </div>
    </BoxSection>
  );
};

export default ProductsOnSale;
