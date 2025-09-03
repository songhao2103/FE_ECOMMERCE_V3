import { type TTypePopupAlert } from "../../components/popup-alert/PopupAlert";

export interface IAlertStore {
  isOpen: boolean;
  message: string;
  type?: TTypePopupAlert;
  showPopupAlert: (message: string, type?: TTypePopupAlert) => void;
  closePopupAlert: () => void;
  isLoading?: boolean;
  setLoading: (isLoading: boolean) => void;
}
