import InputCommon from "../../components/input/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import CustomSelect from "../../components/selects/CustomSelect";
import ButtonCustom from "../../components/button/ButtonCustom";
import { omit } from "lodash";
import axios from "axios";
import usePopupAlertStore from "../../store/popup-alert/store";
import { formatCurrencyInput } from "../../utils/transform/transformNumber";
const apiUrl = import.meta.env.VITE_API_URL;

const initialFormikValue = {
  placeOfShipmentLabel: "",
  placeOfShipmentId: 0,
  placeOfReceipt: "",
  productName: "",
  length: 0,
  width: 0,
  heigth: 0,
  weight: 0,
  customerName: "",
  phoneNumber: "",
  note: "",
};

const placeOfShipmentList = [
  {
    id: 1,
    label: "Kho Bằng Tường",
  },
  {
    id: 2,
    label: "Nhà cung cấp",
  },
];

const validationSchema = Yup.object().shape({
  customerName: Yup.string().required("Vui lòng nhập họ và tên"),
  phoneNumber: Yup.string()
    .required("Vui lòng nhập số điện thoại")
    .test("is-valid-phone", "Số điện thoại không hợp lệ", (value) => {
      if (!value) return false;

      const vietnamPhoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
      const chinaPhoneRegex = /^(?:\+86)?1[3-9]\d{9}$/;

      return vietnamPhoneRegex.test(value) || chinaPhoneRegex.test(value);
    }),
});

interface IFormContactProps {
  onClose: () => void;
}
const FormContact: React.FC<IFormContactProps> = ({ onClose }) => {
  const { showPopupAlert, setLoading } = usePopupAlertStore();

  const formik = useFormik({
    initialValues: initialFormikValue,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      onClose();
      setLoading(true);

      const payload = {
        customerName: values.customerName,
        phoneNumber: values.phoneNumber,
        placeOfShipment: values.placeOfShipmentLabel,
        dispatchBox: values.placeOfReceipt,
        weigth: values.weight,
        note: values.note,
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
        formik.resetForm();
        setLoading(false);
      }
    },
  });

  const handleFormChange = (field: string, value: number | string) => {
    formik.setFieldValue(field, value);
  };

  return (
    <div>
      <p className="title-h3 text-center mb-6 ">Tra cước vận chuyển</p>
      <div className="shadow-xl rounded-md p-3 border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:gap-4">
          <InputCommon
            labelStyle="text-sm font-semibold text-gray-600"
            value={formik.values.customerName}
            label="Họ và tên"
            placeholder="Nhập họ và tên"
            required
            {...omit(formik.getFieldProps("customerName"), [
              "onChange",
              "value",
            ])}
            onChange={(value) => handleFormChange("customerName", value)}
            helperText={
              formik.touched.customerName && formik.errors.customerName
                ? formik.errors.customerName
                : ""
            }
          />
          <InputCommon
            labelStyle="text-sm font-semibold text-gray-600"
            {...omit(formik.getFieldProps("phoneNumber"), [
              "onChange",
              "value",
            ])}
            value={formik.values.phoneNumber}
            label="Số điện thoại"
            placeholder="Nhập số điện thoại"
            required
            onChange={(value) => handleFormChange("phoneNumber", value)}
            helperText={
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? formik.errors.phoneNumber
                : ""
            }
          />
          <CustomSelect
            labelStyle="text-sm font-semibold text-gray-600"
            placeholder="Chọn nơi gửi hàng"
            value={{
              id: formik.values.placeOfShipmentId,
              label: formik.values.placeOfShipmentLabel,
            }}
            options={placeOfShipmentList}
            getEqualOption={(option, value) => option?.id === value?.id}
            getLabel={(option) => option?.label || ""}
            onChange={(option) => {
              if (option.id === formik.values?.placeOfShipmentId) return;
              formik.setFieldValue("placeOfShipmentId", option.id);
              formik.setFieldValue("placeOfShipmentLabel", option.label);
            }}
            label="Chọn nơi gửi hàng"
          />
          <InputCommon
            labelStyle="text-sm font-semibold text-gray-600"
            value={formik.values.placeOfReceipt}
            label="Nơi nhận hàng"
            placeholder="Nhập địa điểm nhận hàng hàng"
            onChange={(value) => handleFormChange("placeOfReceipt", value)}
          />

          <InputCommon
            labelStyle="text-sm font-semibold text-gray-600"
            value={formatCurrencyInput.display(formik.values.weight)}
            label="Khối lượng (kg)"
            onChange={(value) =>
              handleFormChange("weight", formatCurrencyInput.setState(value))
            }
          />
        </div>
        <div className="mt-3 lg:mt-4">
          <InputCommon
            labelStyle="text-sm font-semibold text-gray-600"
            value={formik.values.note}
            label="Ghi chú"
            multiple
            placeholder="Thông tin chi tiết hàng hoá"
            rows={3}
            onChange={(value) => handleFormChange("note", value)}
          />
        </div>
      </div>

      <div className="mt-4">
        <ButtonCustom
          label="GỬI YÊU CẦU"
          fullWidth
          onClick={formik.handleSubmit}
        />
      </div>
    </div>
  );
};

export default FormContact;
