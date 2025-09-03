import { SEARCH_DATA_SECTION_ID } from "./pathSearchDatas";
import type { ISearchDatas } from "./data.type";
import { ROUTE_PATH } from "../routes/routePath";

export const SEARCH_DATAS: ISearchDatas[] = [
  //Homepage
  {
    id: 1,
    title: "Trần Hoàng Logistics giải pháp vận chuyển Trung – Việt",
    path: ROUTE_PATH.HOME,
    sectionId: SEARCH_DATA_SECTION_ID.informationHomepage,
    content:
      "Trách nhiệm, tận tâm: Luôn theo sát từng đơn hàng, đồng hành cùng khách đến khi hàng về an toàn, đúng tiến độ. Uy tín, nhanh chóng: Vận chuyển chính ngạch, cung cấp hóa đơn VAT, hồ sơ pháp lý rõ ràng – hỗ trợ hoàn thuế và kiểm toán dễ dàng",
  },
  {
    id: 2,
    title: "Dịch vụ của chúng tôi",
    path: ROUTE_PATH.HOME,
    sectionId: SEARCH_DATA_SECTION_ID.serviciesHomepage,
    content:
      "Tìm nguồn hàng Trung Quốc, vận chuyển chính ngạch, ghép Container chính ngạch, thanh toán hộ",
  },
  {
    id: 3,
    title: "Quy trình thực hiện",
    path: ROUTE_PATH.HOME,
    sectionId: SEARCH_DATA_SECTION_ID.workflowHomepage,
    content:
      "Tiếp nhận và tư vấn, thu gom hàng tại Trung Quốc, thủ tục hải quan, vận chuyển qua biên, giao hàng tại Việt Nam, theo dõi và hỗ trợ",
  },
  {
    id: 4,
    title: "Khách hàng nói về chúng tôi",
    path: ROUTE_PATH.HOME,
    sectionId: SEARCH_DATA_SECTION_ID.feedbackHomePage,
    content: "Khách hàng nói về chúng tôi",
    description: "feedback, đánh giá",
  },
  {
    id: 5,
    title: "Số liệu ấn tượng",
    path: ROUTE_PATH.HOME,
    sectionId: SEARCH_DATA_SECTION_ID.statisticsHomepage,
    content:
      "10.000+ khách hàng, 50.000+ đơn hàng, 50.000 tấn hàng hóa được vận chuyển",
    description: "Số liệu ấn tượng",
  },

  //Introduce
  {
    id: 6,
    title:
      "Trần Hoàng Logistics – Giải pháp vận chuyển toàn diện tuyến Trung – Việt",
    path: ROUTE_PATH.INTRODUCE,
    sectionId: SEARCH_DATA_SECTION_ID.informationIntroduce,
    content:
      "Hiệu quả và độ tin cậy trong vận chuyển chính là yếu tố then chốt giúp kết nối doanh nghiệp – tiết kiệm chi phí – tăng tốc kinh doanh.",
    description: "Thông tin về công ty",
  },
  {
    id: 7,
    title: "Quy trình thực hiện",
    path: ROUTE_PATH.INTRODUCE,
    sectionId: SEARCH_DATA_SECTION_ID.workflowIntroduce,
    content:
      "Tiếp nhận và tư vấn, thu gom hàng tại Trung Quốc, thủ tục hải quan, vận chuyển qua biên, giao hàng tại Việt Nam, theo dõi và hỗ trợ",
  },
  {
    id: 8,
    title: "Lịch sử công ty",
    path: ROUTE_PATH.INTRODUCE,
    sectionId: SEARCH_DATA_SECTION_ID.companyHistoryIntroduce,
    content:
      "Thành lập công ty, phát triển kho bãi và đội ngũ vận hành, triển khai dịch vụ chính ngạch, mở rộng hệ thống kho và dịch vụ vận chuyển đường biển, số hóa quy trình & nâng cấp dịch vụ khách hàng, định hướng phát triển bền vững",
  },
  {
    id: 8,
    title: "Số liệu thống kê",
    path: ROUTE_PATH.INTRODUCE,
    sectionId: SEARCH_DATA_SECTION_ID.statisticsIntroduce,
    content:
      "10.000+ khách hàng, 50.000+ đơn hàng, 50.000 tấn hàng hóa được vận chuyển",
  },

  //Servicices
  {
    id: 9,
    title: "Vận chuyển chính ngạch",
    path: ROUTE_PATH.OFFICIAL_TRANSPORTATION,
    sectionId: SEARCH_DATA_SECTION_ID.official_transportation,
    content:
      "Một số loại phí khi vận chuyển hàng hoá từ Trung Quốc về Việt Nam. Các khoản phí cố định (phí bắt buộc phải trả khi mua hàng Trung Quốc). Trên thực tế, mỗi đơn hàng đặt mua từ các sàn TMĐT của Trung Quốc và vận chuyển về đến Việt Nam sẽ trải qua rất nhiều thủ tục và phải chi trả cho rất nhiều khoản chi phí khác nhau. Việc nắm rõ các mức phí này sẽ giúp các chủ shop dễ dàng hoạch định được kế hoạch kinh doanh của mình, đồng thời tránh phát sinh chi phí quá lớn khi nhập hàng kinh doanh. Hiện tại, với một đơn hàng vận chuyển từ Trung Quốc về đến Việt Nam, chủ shop sẽ phải chi trả cho những khoản phí sau đây.",
  },

  {
    id: 10,
    title: "Tìm nguồn hàng",
    path: ROUTE_PATH.FIND_SOURCE_GOODS,
    sectionId: SEARCH_DATA_SECTION_ID.findSourseGoods,
    content:
      "Tìm nguồn hàng Trung Quốc. Đặt hàng trực tiếp từ xưởng và chợ đầu mối tại Trung Quốc. Đặt hàng qua các nền tảng thương mại điện tử Trung Quốc. Kết nối nguồn hàng từ chợ đầu mối và chợ cửa khẩu tại Việt Nam",
  },
  {
    id: 11,
    title: "Thanh toán hộ",
    path: ROUTE_PATH.PAY_ON_BEHALF,
    sectionId: SEARCH_DATA_SECTION_ID.payOnBehalf,
    content:
      "Dịch vụ thanh toán hộ Alipay hỗ trợ mua hàng Taobao Tmall 1688. Thanh toán qua Alipay đang được rất nhiều người tiêu dùng ở Trung Quốc lựa chọn khi mua hàng trên Taobao, 1688, Tmall… Tuy nhiên, không phải người tiêu dùng Việt nào cũng có thể dùng hình thức này, thường xuyên gặp khó khăn, bị khóa tài khoản. Vậy sử dụng dịch vụ thanh toán hộ Alipay hỗ trợ mua hàng Taobao, Tmall, 1688 được xem là giải pháp tốt nhất.",
  },
];
