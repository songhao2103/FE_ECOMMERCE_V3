import InputCommon from "../../../components/input/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import ButtonCustom from "../../../components/button/ButtonCustom";
import { omit } from "lodash";
import usePopupAlertStore from "../../../store/popup-alert/store";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const initialFormikValues = {
  customerName: "",
  phone: "",
  content: "",
};

const validationFormik = Yup.object({
  customerName: Yup.string().required("Vui lòng nhập họ tên của bạn"),

  phone: Yup.string()
    .required("Vui lòng nhập số điện thoại của bạn")
    .matches(
      /^(?:\+?84|0)(3|5|7|8|9)\d{8}$|^(?:\+?86)?1[3-9]\d{9}$/,
      "Số điện thoại không hợp lệ (chỉ chấp nhận VN hoặc TQ)"
    ),

  content: Yup.string().required("Vui lòng nhập nội dung"),
});
const FormContact = () => {
  const { showPopupAlert, setLoading } = usePopupAlertStore();

  const formik = useFormik({
    initialValues: initialFormikValues,
    validationSchema: validationFormik,
    onSubmit: async (values) => {
      setLoading(true);

      const payload = {
        customerName: values.customerName,
        phoneNumber: values.phone,
        placeOfShipment: "",
        dispatchBox: "",
        weigth: 0,
        note: values.content,
      };

      try {
        const response = await axios.post(apiUrl + "/send-to-email", payload);

        if (!response.data.success) {
          showPopupAlert("Gửi thất bại!", "error");
        } else {
          showPopupAlert("Gửi thành công", "success");
        }
      } catch (err: unknown) {
        console.log(err);
        showPopupAlert("Gửi thất bại!", "error");
      } finally {
        setLoading(false);
        formik.resetForm();
      }
    },
  });

  const handleFormikChange = (field: string, value: string) => {
    formik.setFieldValue(field, value);
  };

  return (
    <div className="w-full">
      <p className="mb-4 title-h2">Gửi tin nhắn</p>
      <div className="flex flex-col gap-y-4">
        <InputCommon
          {...omit(formik.getFieldProps("customerName"), ["value", "onChange"])}
          placeholder="Nhập họ và tên"
          label="Họ và tên"
          id="customerName"
          value={formik.values.customerName}
          onChange={(value: string) =>
            handleFormikChange("customerName", value)
          }
          helperText={
            formik.touched.customerName && formik.errors.customerName
              ? formik.errors.customerName
              : ""
          }
        />
        <InputCommon
          placeholder="Nhập số điện thoại"
          {...omit(formik.getFieldProps("phone"), ["value", "onChange"])}
          label="Số điện thoại"
          id="phone"
          value={formik.values.phone}
          onChange={(value: string) => handleFormikChange("phone", value)}
          helperText={
            formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : ""
          }
        />
        <InputCommon
          placeholder="Nhập nội dung"
          label="Nhập nội dung"
          id="content"
          rows={3}
          onChange={(value: string) => handleFormikChange("content", value)}
          value={formik.values.content}
          multiple
        />

        <div className="flex">
          <ButtonCustom label="Gửi tin nhắn" onClick={formik.handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default FormContact;
