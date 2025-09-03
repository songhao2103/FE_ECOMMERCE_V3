import type { IBlogItem } from "./new.type";
import image_1 from "../../assets/images/news/Ban_tin_1.1.png";
import image_2 from "../../assets/images/news/Ban_tin_2.1.png";
import image_3 from "../../assets/images/news/Ban_tin_3.1.png";
import CombineContainers from "./components/CombineContainers";
import OriginFraud from "./components/OriginFraud";
import TaxCollection from "./components/TaxCollection";

export const BLOGS_DATA: IBlogItem[] = [
  {
    id: 1,
    component: CombineContainers,
    mainImage: image_1,
    createAt: new Date().toISOString(),
    title: "DỊCH VỤ GHÉP CONTAINER CHÍNH NGẠCH CHUYÊN TUYẾN BẰNG TƯỜNG– HÀ NỘI",
    subTitle:
      "Bạn đang tìm một giải pháp vận chuyển hàng hóa từ Bằng Tường về Việt Nam vừa tiết kiệm chi phí, vừa đảm bảo đúng tuyến chính ngạch? Trần Hoàng Logistics mang đến cho bạn dịch vụ ghép container chính ngạch chuyên tuyến Bằng Tường – Việt Nam, giúp tối ưu hóa chi phí, an toàn tuyệt đối và thông quan trơn tru. ",
  },

  {
    id: 2,
    component: OriginFraud,
    mainImage: image_2,
    createAt: new Date().toISOString(),
    title: "GIAN LẬN XUẤT XỨ: DOANH NGHIỆP CÓ THỂ BỊ XỬ LÝ RA SAO?",
    subTitle:
      "Gian lận xuất xứ là hành vi cố tình khai báo sai hoặc làm giả thông tin về nguồn gốc xuất xứ hàng hóa nhằm trốn thuế, giảm chi phí, hoặc vượt qua các rào cản thương mại. ",
  },

  {
    id: 3,
    component: TaxCollection,
    mainImage: image_3,
    createAt: new Date().toISOString(),
    title:
      "6 ĐIỀU HỘ KINH DOANH CẦN LÀM NGAY ĐỂ TRÁNH BỊ TRUY THU THUẾ TỪ THÁNG 8/2025",
    subTitle:
      "Từ tháng 8/2025, các hộ kinh doanh cá thể – đặc biệt là nhóm nhập hàng từ Trung Quốc – sẽ đối mặt với các đợt kiểm tra thực địa, đối chiếu doanh thu và kê khai thuế từ cơ quan chức năng.",
  },
];
