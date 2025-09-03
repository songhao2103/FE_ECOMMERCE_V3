import image_1 from "../../../assets/images/news/Ban_tin_1.1.png";
import image_2 from "../../../assets/images/news/Ban_tin_1.2.png";
import image_3 from "../../../assets/images/news/Ban_tin_1.3.png";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Question from "./Question";
import Title from "./Title";

const CombineContainers = () => {
  return (
    <div>
      <p className="title-h4 mb-6 lg:mb-8 xl:mb-10 !font-bold">
        DỊCH VỤ GHÉP CONTAINER CHÍNH NGẠCH CHUYÊN TUYẾN BẰNG TƯỜNG– HÀ NỘI
      </p>
      <Paragraph>
        <p>
          Bạn đang tìm một giải pháp vận chuyển hàng hóa từ Bằng Tường về Việt
          Nam vừa tiết kiệm chi phí, vừa đảm bảo đúng tuyến chính ngạch? Trần
          Hoàng Logistics mang đến cho bạn dịch vụ{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            ghép container chính ngạch
          </span>{" "}
          chuyên tuyến Bằng Tường – Việt Nam, giúp tối ưu hóa chi phí, an toàn
          tuyệt đối và thông quan trơn tru.
        </p>
      </Paragraph>
      <Image image={image_1} />
      <Question>
        Vì sao nên chọn ghép container chính ngạch từ Bằng Tường?
      </Question>
      <Title>1. Tối ưu chi phí vận chuyển</Title>
      <Paragraph>
        Thay vì phải thuê nguyên một container, bạn có thể ghép hàng với các đơn
        vị khác trên cùng tuyến Bằng Tường – Việt Nam. Điều này giúp chia nhỏ
        chi phí container, tiết kiệm đến 40% so với thuê nguyên cont.
      </Paragraph>
      <Title>2. Nhập hàng chính ngạch – an toàn pháp lý</Title>
      <Paragraph>
        Toàn bộ hàng hóa đều được Trần Hoàng Logistics thực hiện kê khai đúng mã
        HS, nộp thuế đầy đủ, thông quan theo đường chính ngạch hợp pháp. Cam kết
        không bị giữ hàng, không lo truy quét, đảm bảo quyền lợi cho cả nhà nhập
        khẩu lẫn khách bán lẻ.
      </Paragraph>

      <Title>3. Tuyến chuyên biệt – thời gian nhanh chóng</Title>
      <Paragraph>
        Với hệ thống kho chính chủ tại Bằng Tường, Trần Hoàng Logistics tập
        trung xây dựng tuyến chuyên Bằng Tường – Hà Nội, thời gian về kho chỉ
        3–5 ngày, xử lý nhanh cả hàng nhỏ lẻ và hàng công nghiệp cồng kềnh.
      </Paragraph>

      <Image image={image_2} />
      <Question>
        Vì sao nên chọn ghép container chính ngạch từ Bằng Tường?
      </Question>

      <Title>Đối tượng phù hợp với dịch vụ ghép container chính ngạch</Title>

      <Paragraph hasDot>
        Chủ shop thời trang, phụ kiện, giày dép, túi xách...
      </Paragraph>
      <Paragraph hasDot>
        Chủ xưởng máy móc, linh kiện điện tử, đồ điện gia dụng
      </Paragraph>
      <Paragraph hasDot>
        Các tổng kho tại Hà Nội, Hải Phòng, Lạng Sơn, Vĩnh Phúc...
      </Paragraph>
      <Paragraph hasDot>
        Doanh nghiệp nhập hàng Trung Quốc theo đơn lớn, nhưng chưa đủ cont riêng
      </Paragraph>
      <Paragraph hasDot>
        Người kinh doanh online cần hàng nhanh – rẻ – hợp pháp
      </Paragraph>

      <Title>Đối tượng phù hợp với dịch vụ ghép container chính ngạch</Title>

      <Title>1. Chủ động nguồn hàng – không qua trung gian </Title>
      <Paragraph>
        Trần Hoàng Logistics có kho chính chủ tại Trung Quốc, không qua trung
        gian, dễ dàng gom hàng, kiểm hàng, dán mã, đóng kiện trực tiếp tại kho.
      </Paragraph>

      <Title>2. Quy trình minh bạch – khai báo rõ ràng</Title>
      <Paragraph>
        Mỗi đơn hàng đều được kê khai mã HS chính xác, có chứng từ rõ ràng, phù
        hợp với từng mặt hàng. Hạn chế tối đa rủi ro bị kiểm hóa, truy xuất hay
        phạt hành chính.
      </Paragraph>

      <Title>3. Hỗ trợ trọn gói A–Z </Title>
      <Paragraph>
        Từ tìm nguồn hàng, đàm phán giá, gom hàng, vận chuyển, khai báo hải
        quan, đến giao hàng nội địa – Trần Hoàng Logistics đồng hành cùng bạn
        xuyên suốt hành trình.
      </Paragraph>

      <Image image={image_3} />
      <Title>Khi nào nên chọn hình thức ghép container chính ngạch? </Title>

      <table className="w-full border-collapse border border-gray-300 text-sm shadow-md mt-4">
        <thead className="bg-dark text-white">
          <tr>
            <th className="p-4 border border-gray-300 text-center">
              TRƯỜNG HỢP
            </th>
            <th className="p-4 border border-gray-300 text-center">
              GIẢI PHÁP
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-gray-50 hover:bg-gray-100 transition">
            <td className="p-4 border border-gray-300">
              Hàng hoá từ 3m<sup>3</sup> hoặc dưới 2 tấn
            </td>
            <td className="p-4 border border-gray-300">
              Nên ghép container để tiết kiệm chi phí
            </td>
          </tr>
          <tr className="even:bg-gray-50 hover:bg-gray-100 transition">
            <td className="p-4 border border-gray-300">
              Cần vận chuyển nhiều loại hàng khác nhau
            </td>
            <td className="p-4 border border-gray-300">
              Ghép container linh hoạt gom nhiều đơn, dễ khai báo
            </td>
          </tr>
          <tr className="even:bg-gray-50 hover:bg-gray-100 transition">
            <td className="p-4 border border-gray-300">
              Muốn vận chuyển chính ngạch nhưng không đủ container
            </td>
            <td className="p-4 border border-gray-300">
              Ghép container vẫn đảm bảo nhập chính ngạch, hợp pháp
            </td>
          </tr>
          <tr className="even:bg-gray-50 hover:bg-gray-100 transition">
            <td className="p-4 border border-gray-300">
              Cần giao hàng nhiều nơi tại Việt Nam
            </td>
            <td className="p-4 border border-gray-300">
              Ghép cont dễ chia hàng và phân phối nội địa
            </td>
          </tr>
        </tbody>
      </table>

      <Title>Câu hỏi thường gặp về ghép container chính ngạch </Title>
      <Question>
        Ghép container có chậm hơn so với thuê nguyên cont không?
      </Question>
      <Paragraph>
        Không. Với tuyến chuyên Bằng Tường – Việt Nam, thời gian ghép cont tại
        Trần Hoàng Logistics vẫn đảm bảo từ 3–5 ngày, tương đương thuê cont
        riêng.
      </Paragraph>

      <Question>
        Ghép container có chậm hơn so với thuê nguyên cont không?
      </Question>
      <Paragraph>
        Không. Với tuyến chuyên Bằng Tường – Việt Nam, thời gian ghép cont tại
        Trần Hoàng Logistics vẫn đảm bảo từ 3–5 ngày, tương đương thuê cont
        riêng.
      </Paragraph>

      <Question>Hàng hóa của tôi có bị trộn lẫn hay thất lạc?</Question>
      <Paragraph>
        Không. Trần Hoàng Logistics sử dụng mã vận đơn riêng cho từng khách,
        hàng được đóng gói – dán nhãn – kiểm tra kỹ lưỡng trước khi ghép, đảm
        bảo không nhầm lẫn.
      </Paragraph>

      <Question>
        Có thể gửi hàng lẻ, hàng mẫu qua ghép container không?
      </Question>
      <Paragraph>
        Hoàn toàn có thể. Trần Hoàng Logistics hỗ trợ từ đơn nhỏ đến đơn lớn,
        đặc biệt không giới hạn số lượng tối thiểu cho khách hàng nhập hàng
        thường xuyên.
      </Paragraph>

      <Title>
        Trần Hoàng Logistics – Đối tác tin cậy cho tuyến Bằng Tường – Hà Nội
      </Title>
      <Paragraph>
        Tại Trần Hoàng Logistics, chúng tôi sở hữu kho bãi chính chủ tại Trung
        Quốc và hệ thống vận hành chuyên nghiệp. Ngoài dịch vụ ghép container
        chính ngạch Trung Việt, tại Trần Hoàng có:
      </Paragraph>
      <div>
        <Paragraph hasDot>
          Hỗ trợ tìm nguồn hàng uy tín, thương lượng giá tốt với nhà cung cấp
        </Paragraph>
        <Paragraph hasDot>
          Kho hàng chính chủ tại Bằng Tường tối ưu thời gian gom và giao hàng.
        </Paragraph>
        <Paragraph hasDot>
          Hỗ trợ làm thủ tục hoàn thuế lên đến 10% cho hàng hóa đủ điều kiện
        </Paragraph>
        <Paragraph hasDot>
          Hỗ trợ khai báo hải quan chuyên nghiệp cho mọi loại mặt hàng.
        </Paragraph>
        <Paragraph hasDot>
          Bảo hiểm hàng hóa, cam kết đền bù thỏa đáng trong trường hợp có sự cố
        </Paragraph>
        <Paragraph hasDot>
          Ghép cont chính ngạch – tối ưu chi phí cho mọi quy mô doanh nghiệp
        </Paragraph>
      </div>

      <p className="mt-10">
        👉 Liên hệ Trần Hoàng Logistics ngay hôm nay để được tư vấn miễn phí và
        nhận báo giá chính xác cho lô hàng của bạn!
      </p>
    </div>
  );
};

export default CombineContainers;
