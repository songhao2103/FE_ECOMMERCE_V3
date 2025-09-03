export const formatCurrencyInput = {
  /**
   * Hiển thị cho người dùng:
   * - Dấu . phân tách hàng nghìn (format phần nguyên)
   * - Dấu , nối phần thập phân, giữ nguyên chuỗi sau dấu thập phân
   */
  display: (value: string | number): string => {
    if (value === null || value === undefined || value === "") {
      return "";
    }

    const str = value.toString();
    const [intPart, decimalPart] = str.split(".");

    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return decimalPart !== undefined
      ? `${formattedInt},${decimalPart}`
      : formattedInt;
  },

  /**
   * Chuẩn hóa input người dùng thành chuỗi số chuẩn JS:
   * - Bỏ tất cả ký tự không phải 0–9, dấu . hoặc ,
   * - Nếu raw === "0" hoặc raw.startsWith("0,") → giữ nguyên
   * - Ngược lại → loại bỏ hết số 0 đầu dòng
   * - Bỏ dấu . (hàng nghìn)
   * - Đổi , thành . (thập phân)
   */
  setState: (value: string): string => {
    if (!value) return "";

    // 1) Giữ 0–9, . và ,
    let raw = value.replace(/[^0-9.,]/g, "");

    // 2) Nếu không phải "0" đứng một mình, và không bắt đầu bằng "0,",
    //    thì xoá hết số 0 ở đầu
    if (raw !== "0" && !raw.startsWith("0,")) {
      raw = raw.replace(/^0+/, "");
    }

    // 3) Bỏ dấu . (hàng nghìn)
    raw = raw.replace(/\./g, "");

    // 4) Đổi dấu , thành . (thập phân)
    raw = raw.replace(/,/g, ".");

    return raw;
  },
};
