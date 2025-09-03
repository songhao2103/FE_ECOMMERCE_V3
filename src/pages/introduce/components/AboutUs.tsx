// import world from "../../../assets/icons/world-about-us.png";
// import car from "../../../assets/icons/car-about-us.png";
import { SEARCH_DATA_SECTION_ID } from "../../../datas/pathSearchDatas";

const AboutUs = () => {
  return (
    <div className="w-full" id={SEARCH_DATA_SECTION_ID.informationIntroduce}>
      <div className="flex flex-col gap-y-6">
        <p className="title-h2 !font-bold">
          Trần Hoàng Logistics – Giải pháp vận chuyển toàn diện tuyến Trung –
          Việt
        </p>
        {/* <p>
          Hiệu quả và độ tin cậy trong vận chuyển chính là yếu tố then chốt giúp
          kết nối doanh nghiệp – tiết kiệm chi phí – tăng tốc kinh doanh.
        </p> */}
      </div>

      <div className="flex flex-col mt-4 gap-y-4">
        <div className="flex items-center gap-x-6">
          {/* <img src={world} alt="" className="w-[80px] h-[80px] object-cover" /> */}
          <div>
            {/* <p className="title-h5">Dịch vụ quốc tế</p> */}
            <p>
              Trần Hoàng Logistics là công ty con trực thuộc Công ty Xuất Nhập
              Khẩu Tiên Phong, được thành lập với sứ mệnh kết nối hàng hóa, tối
              ưu vận chuyển và đồng hành cùng doanh nghiệp Việt trên hành trình
              vươn xa.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          {/* <img src={world} alt="" className="w-[80px] h-[80px] object-cover" /> */}
          <div>
            {/* <p className="title-h5">Dịch vụ quốc tế</p> */}
            <p>
              Với hơn 5 năm kinh nghiệm trong lĩnh vực xuất nhập khẩu, Trần
              Hoàng Logistics tự hào mang đến cho khách hàng những giải pháp
              logistics chuyên nghiệp, linh hoạt và hiệu quả. Chúng tôi hiểu
              rằng, mỗi đơn hàng không chỉ là một sản phẩm – mà là cả một cơ hội
              kinh doanh, là uy tín và là niềm tin được gửi gắm.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          {/* <img src={car} alt="" className="w-[80px] h-[80px] object-cover" /> */}
          <div>
            {/* <p className="title-h5">Dịch vụ nội địa</p> */}
            <p>
              Sở hữu đội ngũ nhân sự giàu chuyên môn – tận tâm phục vụ, Trần
              Hoàng luôn đặt lợi ích của khách hàng làm trọng tâm. Chúng tôi
              không ngừng nâng cấp dịch vụ, ứng dụng công nghệ và tối ưu quy
              trình vận hành để đảm bảo hàng hóa của bạn luôn được vận chuyển
              nhanh chóng – an toàn – tiết kiệm chi phí.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
