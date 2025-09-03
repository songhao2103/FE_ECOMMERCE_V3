import image_1 from "../../../assets/images/news/Ban_tin_2.1.png";
import image_2 from "../../../assets/images/news/Ban_tin_2.2.jpg";
import image_3 from "../../../assets/images/news/Ban_tin_2.3.png";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Title from "./Title";

const OriginFraud = () => {
  return (
    <div>
      <p className="title-h4 mb-6 lg:mb-8 xl:mb-10 !font-bold">
        GIAN LẬN XUẤT XỨ: DOANH NGHIỆP CÓ THỂ BỊ XỬ LÝ RA SAO?
      </p>
      <Title>
        1. Gian lận xuất xứ là gì và vì sao doanh nghiệp dễ vi phạm?
      </Title>
      <Paragraph>
        Gian lận xuất xứ là hành vi cố tình khai báo sai hoặc làm giả thông tin
        về nguồn gốc xuất xứ hàng hóa nhằm trốn thuế, giảm chi phí, hoặc vượt
        qua các rào cản thương mại. Trong hoạt động nhập hàng Trung Quốc, do sự
        khác biệt về thuế suất và tiêu chuẩn kiểm định giữa các quốc gia, nhiều
        doanh nghiệp vì lợi ích ngắn hạn đã vi phạm quy định này.
      </Paragraph>
      <Paragraph>
        Tuy nhiên, việc làm này không chỉ vi phạm pháp luật mà còn có thể gây
        hậu quả nghiêm trọng lâu dài, ảnh hưởng đến hoạt động kinh doanh và uy
        tín doanh nghiệp.
      </Paragraph>

      <Image image={image_1} />

      <Title>2. Cơ quan nào giám sát và xử lý hành vi gian lận xuất xứ?</Title>
      <Title>2. Nhập hàng chính ngạch – an toàn pháp lý</Title>
      <Paragraph>
        <p>
          <span className="font-bold">Cục Hải quan Việt Nam:</span>
          Là cơ quan chính thực hiện kiểm tra, giám sát hàng hóa nhập khẩu,
          trong đó có việc xác minh xuất xứ hàng hóa khi làm thủ tục nhập khẩu
          chính ngạch.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          <span className="font-bold">
            Quản lý thị trường (Bộ Công Thương):
          </span>
          Thực hiện kiểm tra, kiểm soát thị trường, phát hiện và xử lý các hành
          vi gian lận thương mại.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          Cơ quan thanh tra chuyên ngành khác như
          <span className="font-bold">Bộ Nông nghiệp, Bộ Y tế...</span>
          tùy loại mặt hàng sẽ kiểm tra, xác nhận tính hợp pháp, xuất xứ.
        </p>
      </Paragraph>
      <Paragraph>
        Việc phối hợp giữa các cơ quan này giúp tăng cường kiểm soát, đảm bảo
        doanh nghiệp tuân thủ đúng quy định pháp luật.
      </Paragraph>

      <Image image={image_2} />

      <Title>3. Hậu quả kinh tế khi bị phát hiện gian lận xuất xứ </Title>
      <Paragraph>
        Ngoài các hình thức xử phạt hành chính, doanh nghiệp còn chịu nhiều tổn
        thất kinh tế sau khi bị phát hiện gian lận xuất xứ, cụ thể:
      </Paragraph>

      <Paragraph hasDot>
        Chi phí phạt vi phạm hành chính rất lớn, có thể lên đến hàng trăm triệu
        đồng tùy mức độ vi phạm.
      </Paragraph>
      <Paragraph hasDot>
        Chi phí hàng hóa bị tịch thu hoặc tiêu hủy khiến vốn bị mất trắng.
      </Paragraph>
      <Paragraph hasDot>
        Mất hợp đồng, mất đối tác do mất uy tín. Nhiều khách hàng, nhà cung cấp
        và đối tác vận chuyển có thể từ chối hợp tác với doanh nghiệp vi phạm.
      </Paragraph>
      <Paragraph hasDot>
        Chi phí pháp lý và thời gian xử lý tranh chấp phát sinh khi phải đối mặt
        với các thủ tục xử phạt hoặc kiện tụng.
      </Paragraph>

      <Title>
        4. Gian lận xuất xứ và ảnh hưởng tới vận chuyển Trung Việt chính ngạch
      </Title>

      <Paragraph>
        Hoạt động vận chuyển chính ngạch đòi hỏi doanh nghiệp phải cung cấp đầy
        đủ chứng từ hợp lệ, trong đó giấy chứng nhận xuất xứ (CO, C/O) là bắt
        buộc. Nếu khai báo sai xuất xứ, lô hàng có thể bị giữ lại tại cửa khẩu
        hoặc bị từ chối nhập khẩu, làm gián đoạn chuỗi cung ứng, ảnh hưởng lớn
        đến tiến độ giao hàng.
      </Paragraph>
      <Paragraph>
        Hơn nữa, việc này còn ảnh hưởng xấu đến hồ sơ hải quan của doanh nghiệp,
        làm khó khăn trong các lần nhập khẩu tiếp theo.
      </Paragraph>

      <Title>
        5. Làm thế nào để tránh rủi ro gian lận xuất xứ khi nhập hàng Trung
        Quốc?
      </Title>
      <Paragraph>
        <span className="font-bold">Chọn nhà cung cấp uy tín </span>
        có giấy tờ chứng nhận xuất xứ rõ ràng, tránh mua hàng trôi nổi không rõ
        nguồn gốc.
      </Paragraph>
      <Paragraph>
        <span className="font-bold">Kiểm tra kỹ chứng từ xuất xứ </span>
        (C/O) trước khi ký hợp đồng, vận chuyển.
      </Paragraph>

      <Paragraph>
        <span className="font-bold">Tuân thủ nghiêm ngặt quy trình</span>
        nhập khẩu chính ngạch, không nên cố tình khai báo sai lệch để trốn thuế.
      </Paragraph>
      <Paragraph>
        <span className="font-bold">
          Sử dụng dịch vụ vận chuyển chính ngạch
        </span>
        uy tín để được tư vấn, hỗ trợ hoàn thiện thủ tục đúng quy định, giảm
        thiểu rủi ro pháp lý.
      </Paragraph>
      <Image image={image_3} />

      <Title>
        6. Dịch vụ nhập hàng Trung Quốc và vận chuyển chính ngạch tại Trần Hoàng
        Logistics{" "}
      </Title>

      <Paragraph>
        Trần Hoàng Logistics cung cấp giải pháp toàn diện cho doanh nghiệp nhập
        khẩu hàng Trung Quốc, bao gồm:
      </Paragraph>

      <Paragraph hasDot>
        Tư vấn thủ tục pháp lý, chứng từ xuất xứ hợp pháp
      </Paragraph>
      <Paragraph hasDot>
        Vận chuyển chính ngạch nhanh chóng, an toàn, đảm bảo đúng quy trình hải
        quan
      </Paragraph>
      <Paragraph hasDot>
        Hỗ trợ xử lý phát sinh và giải quyết các vấn đề liên quan đến gian lận
        xuất xứ nếu có
      </Paragraph>
      <Paragraph hasDot>
        Với Trần Hoàng Logistics, doanh nghiệp sẽ yên tâm vận chuyển hàng hóa
        hợp pháp, minh bạch, tránh các rủi ro pháp lý đáng tiếc và tối ưu chi
        phí kinh doanh.
      </Paragraph>

      <p className="mt-10">
        Liên hệ ngay với Trần Hoàng Logistics để nhận tư vấn miễn phí, báo giá
        cụ thể và bắt đầu hành trình kinh doanh hiệu quả cùng dịch vụ nhập hàng
        Trung Quốc an toàn – nhanh chóng – tiết kiệm!
      </p>
    </div>
  );
};

export default OriginFraud;
