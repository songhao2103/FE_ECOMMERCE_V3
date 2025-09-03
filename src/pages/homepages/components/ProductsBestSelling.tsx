import BoxSection from "./BoxSection";
import ButtonCustom from "../../../components/button/ButtonCustom";
import ProductCart from "../../../components/cards/ProductCart";

const fakeData = [
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
];
const ProductsBestSelling = () => {
  return (
    <BoxSection title="This month">
      <div>
        <div className="flex items-center justify-between mb-8">
          <p className="title-h2">Best Selling Products</p>
          <ButtonCustom label="View all" hideIcon />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {fakeData.map((item) => {
            return (
              <div key={item.id}>
                <ProductCart productInfo={item} />
              </div>
            );
          })}
        </div>
      </div>
    </BoxSection>
  );
};

export default ProductsBestSelling;
