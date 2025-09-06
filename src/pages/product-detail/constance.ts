import type { IProductDetail } from "../../https/apis/products/type";

export const fakeProducts: IProductDetail = {
  id: 2,
  productName: "Giày sneaker classic",
  description: "Giày sneaker phong cách tối giản, dễ phối đồ",
  price: 599000,
  images: [
    {
      id: 3,
      colorName: "Đỏ",
      colorCode: "#e24646",
      url: "https://picsum.photos/400?random=3",
      quantity: 8,
    },
    {
      id: 4,
      colorName: "Xanh navy",
      colorCode: "#1F3A93",
      url: "https://picsum.photos/400?random=4",
      quantity: 5,
    },
    {
      id: 5,

      url: "https://picsum.photos/400?random=4",
    },
    {
      id: 6,

      url: "https://picsum.photos/400?random=4",
    },
    {
      id: 7,

      url: "https://picsum.photos/400?random=4",
    },
  ],
};
