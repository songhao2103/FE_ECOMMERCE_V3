import { create } from "zustand";
import { type IAlertStore } from "./popupAlert.type";
import { type TTypePopupAlert } from "../../components/popup-alert/PopupAlert";

const usePopupAlertStore = create<IAlertStore>((set) => ({
  isOpen: false,
  message: "",
  type: "info",
  isLoading: false,
  setLoading: (isLoading: boolean) => {
    set(() => ({ isLoading }));
  },
  showPopupAlert: (message: string, type?: TTypePopupAlert) =>
    set(() => {
      return { isOpen: true, message: message, type: type || "info" };
    }),
  closePopupAlert: () => {
    set(() => {
      return { isOpen: false };
    });
  },
}));

export default usePopupAlertStore;
