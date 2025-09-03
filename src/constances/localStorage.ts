export const LOCAL_STORAGE_KEYS = {
  THEME: "THEME",
  ACCESS_TOKEM: "ACCESS_TOKEN",
  REFETCH_TOKEN: "REFETCH_TOKEN",
} as const;

export type LOCAL_STORAGE_KEYS_TYPE =
  (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];

export const LOCAL_STORAGE_DEFAULT_VALUES = {
  [LOCAL_STORAGE_KEYS.THEME]: "light", // light | dark
} as const;
