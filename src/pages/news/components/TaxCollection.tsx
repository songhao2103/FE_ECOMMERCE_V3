import image_1 from "../../../assets/images/news/Ban_tin_3.1.png";
import image_2 from "../../../assets/images/news/Ban_tin_3.2.png";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Question from "./Question";
import Title from "./Title";

const TaxCollection = () => {
  return (
    <div>
      <p className="title-h4 mb-6 lg:mb-8 xl:mb-10 !font-bold">
        6 ĐIỀU HỘ KINH DOANH CẦN LÀM NGAY ĐỂ TRÁNH BỊ TRUY THU THUẾ TỪ THÁNG
        8/2025
      </p>
      <Paragraph>
        Từ tháng 8/2025, các hộ kinh doanh cá thể – đặc biệt là nhóm nhập hàng
        từ Trung Quốc – sẽ đối mặt với các đợt kiểm tra thực địa, đối chiếu
        doanh thu và kê khai thuế từ cơ quan chức năng. Nếu không tuân thủ các
        quy định mới, hộ kinh doanh có thể bị truy thu thuế, xử phạt hành chính,
        thậm chí mất quyền tiếp tục hoạt động.
      </Paragraph>
      <Paragraph>
        Là đơn vị vận chuyển Trung Việt chính ngạch chuyên nghiệp, Trần Hoàng
        Logistics khuyến nghị các chủ shop, đại lý bán buôn – đặc biệt là nhóm
        nhập hàng Trung Quốc chính ngạch – cần lưu ý 6 điều quan trọng dưới đây
        để bảo vệ hoạt động kinh doanh và tránh rủi ro pháp lý.
      </Paragraph>

      <Title>1. Đăng ký kinh doanh và mã số thuế theo đúng quy định mới </Title>
      <Paragraph>
        Từ tháng 7/2025, hộ kinh doanh có doanh thu từ 100 triệu đồng/năm trở
        lên bắt buộc phải:
      </Paragraph>
      <Paragraph hasDot>Đăng ký hộ kinh doanh cá thể hợp pháp</Paragraph>
      <Paragraph hasDot>
        Cập nhật mã số thuế (sẽ được thay thế bằng số định danh cá nhân)
      </Paragraph>
      <Paragraph>
        Việc đồng bộ số thuế với định danh cá nhân giúp cơ quan chức năng quản
        lý thuế minh bạch và sát thực tế hơn, đặc biệt với hộ kinh doanh nhập
        hàng Trung Quốc qua dịch vụ vận chuyển Trung Việt chính ngạch.{" "}
      </Paragraph>

      <Image image={image_1} />

      <Title>2. Chấm dứt áp dụng phương pháp thuế khoán</Title>
      <Paragraph>
        Kể từ ngày 01/06/2025, nếu hộ kinh doanh có doanh thu từ 1 tỷ đồng/năm
        trở lên, hoặc có nhiều giao dịch lớn qua ngân hàng, ví điện tử, sàn
        thương mại điện tử, thì sẽ phải:
      </Paragraph>

      <Paragraph hasDot>Kê khai thuế theo doanh thu thực tế</Paragraph>
      <Paragraph hasDot>
        Không được tiếp tục áp dụng thuế khoán như trước
      </Paragraph>
      <Paragraph>
        Nếu kê khai sai thực tế, bạn có thể bị truy thu thuế và phạt nặng theo
        luật quản lý thuế sửa đổi. Hộ kinh doanh sử dụng dịch vụ ghép container
        chính ngạch từ Trung Quốc cần đặc biệt lưu ý khoản mục giá trị hàng
        nhập.
      </Paragraph>

      <Title>3. Bắt buộc sử dụng hóa đơn điện tử có mã từ máy tính tiền</Title>

      <Paragraph>Một số lĩnh vực như:</Paragraph>
      <Paragraph hasDot>Ăn uống</Paragraph>
      <Paragraph hasDot>Bán lẻ</Paragraph>
      <Paragraph hasDot>Khách sạn, lưu trú</Paragraph>

      <Paragraph>
        sẽ bắt buộc áp dụng hóa đơn điện tử có mã, kết nối trực tiếp với cơ quan
        thuế thông qua máy tính tiền. Nếu bạn là hộ kinh doanh có lượng đơn hàng
        lớn từ Trung Quốc và bán sỉ/lẻ qua cửa hàng, sàn thương mại, bạn cần:
      </Paragraph>
      <Paragraph hasDot>Cài đặt hệ thống máy tính tiền đúng chuẩn</Paragraph>
      <Paragraph hasDot>Sử dụng hóa đơn điện tử có mã</Paragraph>
      <p className="italic font-normal">
        Việc không thực hiện có thể bị xem là hành vi trốn thuế.{" "}
      </p>

      <Image image={image_2} />

      <Title>4. Chủ động điều chỉnh khi doanh thu tăng đột biến</Title>

      <Paragraph>
        Trong quá trình kinh doanh, nếu doanh thu tăng trên 50% so với mức đã kê
        khai hoặc đã tính thuế khoán thì hộ kinh doanh phải điều chỉnh ngay với
        cơ quan thuế. Không điều chỉnh kịp thời có thể bị:{" "}
      </Paragraph>
      <Paragraph hasDot>
        Truy thu thuế cho toàn bộ phần chênh lệch doanh thu
      </Paragraph>
      <Paragraph hasDot>Phạt hành chính và cấm hoạt động</Paragraph>
      <Paragraph>
        Đặc biệt với các hộ chuyên nhập hàng Trung Quốc giá rẻ số lượng lớn theo
        hình thức ghép container chính ngạch, biến động doanh thu xảy ra rất
        thường xuyên khi vào mùa cao điểm.
      </Paragraph>

      <Title>
        5. Lưu trữ chứng từ, hóa đơn và thanh toán không dùng tiền mặt
      </Title>

      <Paragraph>
        Để được tính chi phí hợp lý khi quyết toán thuế, mọi khoản chi từ 5
        triệu đồng trở lên cần:
      </Paragraph>
      <Paragraph hasDot>Thanh toán qua ngân hàng, chuyển khoản</Paragraph>
      <Paragraph hasDot> Có đầy đủ hóa đơn, chứng từ hợp lệ </Paragraph>
      <Paragraph>Ngoài ra, cần lưu giữ:</Paragraph>
      <Paragraph hasDot>Hóa đơn vận chuyển chính ngạch </Paragraph>
      <Paragraph hasDot> Hợp đồng vận tải, bảng kê lô hàng, mã đơn</Paragraph>
      <Paragraph hasDot>Báo giá dịch vụ logistics đi kèm</Paragraph>

      <p className="italic font-normal">
        Trần Hoàng Logistics luôn hỗ trợ đầy đủ chứng từ chính ngạch chuyên
        nghiệp cho các khách hàng nhập hàng Trung Quốc – giúp việc kê khai,
        quyết toán với cơ quan thuế thuận lợi hơn.{" "}
      </p>

      <Title>6. Phối hợp đầy đủ và nhanh chóng với cơ quan thuế</Title>

      <Paragraph>Cuối cùng, khi được cơ quan thuế yêu cầu:</Paragraph>
      <Paragraph hasDot>
        Hộ kinh doanh cần giải trình kịp thời, rõ ràng
      </Paragraph>
      <Paragraph hasDot>
        Cung cấp đầy đủ chứng từ, hóa đơn, sổ sách liên quan{" "}
      </Paragraph>
      <Paragraph>
        Việc phối hợp nghiêm túc giúp giảm thiểu rủi ro pháp lý, đồng thời bảo
        vệ quyền lợi chính đáng của bạn trong quá trình kiểm tra, đối chiếu
        doanh thu.{" "}
      </Paragraph>

      <Question>Hộ kinh doanh nhập hàng Trung Quốc cần chuẩn bị gì?</Question>
      <Paragraph>
        Năm 2025 đánh dấu bước chuyển mạnh trong quản lý thuế và minh bạch hóa
        hoạt động hộ kinh doanh. Với các chủ shop, tổng kho, đại lý nhập hàng
        Trung Quốc qua đường vận chuyển Trung Việt chính ngạch, đây là thời điểm
        quan trọng để:
      </Paragraph>
      <Paragraph hasDot>Rà soát lại mô hình kinh doanh</Paragraph>
      <Paragraph hasDot>Kê khai thuế đúng thực tế</Paragraph>
      <Paragraph hasDot>Lưu trữ chứng từ hợp pháp</Paragraph>
      <Paragraph>
        Lựa chọn đơn vị vận chuyển chuyên nghiệp – có cung cấp hóa đơn, chứng từ
        đầy đủ như Trần Hoàng Logistics{" "}
      </Paragraph>
      <Paragraph>
        Việc tuân thủ các quy định mới không chỉ giúp bạn tránh bị truy thu thuế
        mà còn xây dựng hình ảnh hộ kinh doanh uy tín, bền vững trong thời đại
        chuyển đổi số.
      </Paragraph>
      <Paragraph>
        Trần Hoàng Logistics – Chuyên vận chuyển Trung Việt chính ngạch, hỗ trợ
        đầy đủ chứng từ thuế – giá rẻ – chuyên nghiệp – uy tín:
      </Paragraph>

      <Paragraph hasDot>
        {" "}
        Hỗ trợ tìm nguồn hàng uy tín, thương lượng giá tốt với nhà cung cấp{" "}
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

      <p className="mt-10">
        📞 Liên hệ Trần Hoàng Logistics ngay hôm nay để được tư vấn miễn phí và
        báo giá ghép container chính ngạch nhanh chóng!
      </p>
    </div>
  );
};

export default TaxCollection;
