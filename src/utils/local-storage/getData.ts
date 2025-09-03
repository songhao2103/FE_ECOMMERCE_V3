import type { LOCAL_STORAGE_KEYS_TYPE } from "../../constances/localStorage";

export const getLocalStorageData = <T>(
  key: LOCAL_STORAGE_KEYS_TYPE,
  defaultValue: T
): T => {
  if (typeof window === "undefined") return defaultValue;
  return JSON.parse(localStorage.getItem(key) ?? "null") ?? defaultValue;
};
