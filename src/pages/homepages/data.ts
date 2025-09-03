import type {
  ICategoryItem,
  IFeedbackItem,
  IIntroduceSectionItem,
  IMoreAboutUs,
  IServiceOverviewItem,
  IWorkflowStep,
} from "./homepage.type";
import { PiHeadphones, PiWarehouse } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoIosFlash } from "react-icons/io";
import thanh_toan from "../../assets/images/services/thanh_toan.jpg";
import van_chuyen from "../../assets/images/services/van_chuyen.jpg";
import tim_nguon_hang from "../../assets/images/services/tim_nguon_hang.jpg";

import avatar_dinh_tu from "../../assets/images/feedbacks/avatar_dinh_tu.jpg";
import avatar_duc_anh from "../../assets/images/feedbacks/avatar_duc_anh.jpg";
import avatar_my_kieu from "../../assets/images/feedbacks/avatar_my_kieu.jpg";
import avatar_thanh_ha from "../../assets/images/feedbacks/avatar_thanh_ha.jpg";
import avatar_tien_dat from "../../assets/images/feedbacks/avatar_tien_dat.jpg";

import WorkflowImage_1 from "../../assets/images/work-flow/buoc_1.jpg";
import WorkflowImage_2 from "../../assets/images/work-flow/buoc_2.jpg";
import WorkflowImage_3 from "../../assets/images/work-flow/buoc_3.png";
import WorkflowImage_4 from "../../assets/images/work-flow/buoc_4.jpg";
import WorkflowImage_5 from "../../assets/images/work-flow/buoc_5.jpg";
import WorkflowImage_6 from "../../assets/images/work-flow/buoc_6.png";

import { LuPackageSearch } from "react-icons/lu";
import { PiFireTruck } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { ROUTE_PATH } from "../../routes/routePath";

import { FaApple } from "react-icons/fa";
import { SiDell } from "react-icons/si";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline, IoGameControllerOutline } from "react-icons/io5";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Banner data
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const banners = [
  {
    id: 1,
    store: "Apple",
    storeIcon: FaApple,
    title: "Apple MacBook Air M2 2024",
    sale: "Up to 10% off Voucher",
    img: "https://songhao2103.github.io/IMG_du_an_REACT/ecommerce/products/anh_png_2-removebg-preview.png",
    gradient:
      "linear-gradient(129deg, rgba(0, 0, 0, 1) 40%, rgba(2, 1, 13, 1) 40%, rgba(9, 29, 45, 1) 65%, rgba(5, 19, 31, 1) 65%, rgba(2, 32, 38, 1) 100%)",
  },
  {
    id: 2,
    store: "DELL",
    storeIcon: SiDell,
    title: "Laptop Dell Inspiron 15",
    sale: "Up to 13% off Voucher",
    img: "https://songhao2103.github.io/IMG_du_an_REACT/ecommerce/media/banner_3.png",
    gradient:
      "linear-gradient(298deg, rgba(0, 0, 0, 1) 23%, rgba(2, 1, 13, 1) 23%, rgba(9, 29, 45, 1) 67%, rgba(5, 19, 31, 1) 67%, rgba(2, 32, 38, 1) 100%)",
  },
  {
    id: 3,
    store: "Logitech",
    storeIcon: "Logitech",
    title: "Gaming Logitech G102 LightSync Gen 2",
    sale: "Up to 15% off Voucher",
    img: "https://songhao2103.github.io/IMG_du_an_REACT/ecommerce/media/6736f195909d2.png",
    gradient:
      "linear-gradient(156deg, rgba(36, 9, 32, 1) 23%, rgba(42, 14, 2, 1) 23%, rgba(9, 29, 45, 1) 67%, rgba(26, 27, 1, 1) 67%, rgba(2, 32, 38, 1) 100%)",
  },
  {
    id: 4,
    store: "Apple",
    storeIcon: FaApple,
    title: "Apple AirPods Max 2024",
    sale: "Up to 17% off Voucher",
    img: "https://songhao2103.github.io/IMG_du_an_REACT/ecommerce/media/Lovepik_com-401422578-black-and-red-headphone-wireless-headset.png",
    gradient:
      "linear-gradient(11deg, rgba(36, 9, 32, 1) 23%, rgba(69, 21, 0, 1) 23%, rgba(9, 29, 45, 1) 67%, rgba(59, 61, 1, 1) 67%, rgba(1, 62, 1, 1) 100%)",
  },
  {
    id: 5,
    store: "Sumsung",
    storeIcon: "Samsung",
    title: "Samsung Galaxy Z Fold6",
    sale: "Up to 20% off Voucher",
    img: "https://songhao2103.github.io/IMG_du_an_REACT/ecommerce/products/anh_png_1-removebg-preview.png",
    gradient:
      "linear-gradient(286deg, rgba(36, 9, 32, 1) 23%, rgba(20, 7, 1, 1) 23%, rgba(9, 29, 45, 1) 67%, rgba(28, 29, 2, 1) 67%, rgba(1, 62, 1, 1) 100%)",
  },
];

export const CATEGORIES_DATA: ICategoryItem[] = [
  {
    id: 1,
    title: "Phones",
    icon: HiMiniDevicePhoneMobile,
  },
  {
    id: 2,
    title: "Computers",
    icon: HiOutlineDesktopComputer,
  },
  {
    id: 3,
    title: "SmartWatch",
    icon: BsSmartwatch,
  },
  {
    id: 4,
    title: "Cameras",
    icon: IoCameraOutline,
  },
  {
    id: 5,
    title: "Headphones",
    icon: PiHeadphones,
  },
  {
    id: 6,
    title: "Accessories",
    icon: IoGameControllerOutline,
  },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Thông tin về chúng tôi
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const INTRODUCE_SECTIONS_DATA: IIntroduceSectionItem[] = [
  {
    icon: PiWarehouse,
    title: "Kho bãi Trung-Việt",
    description:
      "Sở hữu kho hàng tại Trung Quốc và Việt Nam hoàn toàn chủ động nguồn hàng, xử lý nhanh chóng",
  },
  {
    icon: VscWorkspaceTrusted,
    title: "Trách nhiệm, tận tâm",
    description:
      "Luôn theo sát từng đơn hàng, đồng hành cùng khách đến khi hàng về an toàn, đúng tiến độ",
  },
  {
    icon: IoIosFlash,
    title: "Uy tín, nhanh chóng",
    description:
      " Vận chuyển chính ngạch, cung cấp hóa đơn VAT, hồ sơ pháp lý rõ ràng hỗ trợ hoàn thuế và kiểm toán dễ dàng",
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Thông tin thêm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const MORE_ABOUT_US_DATA: IMoreAboutUs = {
  title: "Trần Hoàng Logistics giải pháp vận chuyển Trung – Việt",
  descriptions: [
    "Trách nhiệm, tận tâm: Luôn theo sát từng đơn hàng, đồng hành cùng khách đến khi hàng về an toàn, đúng tiến độ.",
    "Uy tín, nhanh chóng: Vận chuyển chính ngạch, cung cấp hóa đơn VAT, hồ sơ pháp lý rõ ràng – hỗ trợ hoàn thuế và kiểm toán dễ dàng",
  ],
  buttonLabel: "Chi tiết",
  imageUrl: "../../../assets/images/introduces/introduce_homepage.jpg",
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Danh sách dịch vụ
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const SERVICES_OVERVIEW_DATA: IServiceOverviewItem[] = [
  {
    icon: LuPackageSearch,
    title: "Tìm nguồn hàng Trung Quốc",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: tim_nguon_hang,
    path: ROUTE_PATH.FIND_SOURCE_GOODS,
  },
  {
    icon: PiFireTruck,
    title: "Vận chuyển chính ngạch",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: van_chuyen,
    path: ROUTE_PATH.OFFICIAL_TRANSPORTATION,
  },

  {
    icon: RiSecurePaymentLine,
    title: "Thanh toán hộ",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: thanh_toan,
    path: ROUTE_PATH.PAY_ON_BEHALF,
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Quy trình làm việc
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WORKFLOW_STEPS: IWorkflowStep[] = [
  {
    title: "Tiếp nhận và tư vấn",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    imageUrl: WorkflowImage_1,
  },
  {
    title: "Thu gom hàng tại Trung Quốc",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    imageUrl: WorkflowImage_2,
  },
  {
    title: "Thủ tục hải quan",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    imageUrl: WorkflowImage_3,
  },
  {
    title: "Vận chuyển qua biên",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    imageUrl: WorkflowImage_4,
  },
  {
    title: "Giao hàng tại Việt Nam",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    imageUrl: WorkflowImage_5,
  },
  {
    title: " Theo dõi và hỗ trợ  ",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    imageUrl: WorkflowImage_6,
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Feedback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const FAKE_FEEDBACK_DATAS: IFeedbackItem[] = [
  {
    userImage: avatar_tien_dat,
    content:
      "Anh đã có trải nghiệm tuyệt vời khi sử dụng dịch vụ vận chuyển của các bạn. Các bạn giúp anh rất nhiều khi giao hàng đến nơi một các an toàn và kịp thời. Anh đã mở rộng thị trường xuất khẩu và xây dựng mối quan hệ kinh doanh lâu dài với các đối tác quốc tế. Hi vọng tương lai, anh và Trần Hoàng sẽ có nhiều cơ hội hợp tác bền vừng và thuận lợi.",
    userName: "Mr. Trần Tiến Đạt",
    note: "Business Ngành Hàng Thương Mại",
  },
  {
    userImage: avatar_my_kieu,
    content:
      "Trần Hoàng Logistics không chỉ cung cấp dịch vụ vận chuyển chất lượng mà còn có giá cả hợp lý. Mình luôn tin tưởng và lựa chọn Trần Hoàng cho mọi nhu cầu vận chuyển của mình. Sự linh hoạt trong các gói dịch vụ và cam kết đáp ứng đúng hẹn đã khiến mình trở thành một khách hàng trung thành của Trần Hoàng Logistics",
    userName: "Ms. Mỹ Kiều",
    note: "Business ngành hàng nội thất",
  },
  {
    userImage: avatar_dinh_tu,
    content:
      "Nhân viên của Trần Hoàng Logistics ai cũng thân thiện và nhiệt tình. Các bạn luôn sẵn lòng giải đáp mọi thắc mắc và bảo đảm quá trình vận chuyển luôn suôn sẻ. Đặc biệt, mình cảm thấy các bạn luôn sẵn lòng hỗ trợ khi có vấn đề phát sinh trong quá trình vận chuyển, giúp mình rất nhiều trong việc giải quyết mọi tình huống một cách nhanh chóng và hiệu quả.  ",
    userName: "Mr. Nguyễn Đình Tú",
    note: "Bussiness Ngành hàng máy móc công nghiệp",
  },
  {
    userImage: avatar_duc_anh,
    content:
      "Anh sử dụng dịch vụ vận chuyển của Trần Hoàng Logistics đã được một thời gian và rất hài lòng với sự chuyên nghiệp của Trần Hoàng. Hàng hóa được giao đúng hẹn và đảm bảo. Anh rất ấn tượng với quy trình kiểm tra hàng trước khi giao và rất yên tâm về chất lượng hàng hóa mỗi khi làm việc với Trần Hoàng.  ",
    userName: "Mr. Nguyễn Đức Anh",
    note: "Business Ngành hàng nội thất",
  },
  {
    userImage: avatar_thanh_ha,
    content:
      "Trần Hoàng Logistics đã giúp tớ tiết kiệm thời gian và công sức khi order hàng. Quy trình đặt hàng cũng thuận tiện cho mình thao tác và giao nhận cũng khó nhanh chóng. Hơn nữa, các bạn cung cấp các dịch vụ bổ sung như bảo hiểm hàng hóa và theo dõi đơn hàng trực tuyến, giúp tớ cảm thấy an tâm hơn khi gửi hàng",
    userName: "Ms. Thanh Hà",
    note: "Business ngành hàng trang trí",
  },
];
