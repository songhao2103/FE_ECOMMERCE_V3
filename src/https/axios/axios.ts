import axios from "axios";
import { getLocalStorageData } from "../../utils/local-storage/getData";
import { LOCAL_STORAGE_KEYS } from "../../constances/localStorage";
import { ROUTE_PATH } from "../../routes/routePath";
import { HTTP_STATUS } from "../../constances/httpStatus";
import { setLocalStorageData } from "../../utils/local-storage/setData";

const baseUrl = import.meta.env.VITE_API_URL;
const axiosConfigs = {
  baseURL: baseUrl,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
};

const instancePublic = axios.create(axiosConfigs);
instancePublic.interceptors.response.use(async (response) => {
  if (
    response.data.status === HTTP_STATUS.StatusOK ||
    response.data.statusCode === HTTP_STATUS.StatusOK ||
    response.data.statusCode === 201 ||
    response.status === HTTP_STATUS.StatusOK
  ) {
    return response.data;
  }
  return Promise.reject(response.data);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let refreshTokenPromise: any;

const instancePrivate = axios.create(axiosConfigs);

instancePrivate.interceptors.request.use(
  (config) => {
    const token = getLocalStorageData<string>(
      LOCAL_STORAGE_KEYS.ACCESS_TOKEM,
      ""
    );
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      window.location.href = ROUTE_PATH.LOG_IN as string;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instancePrivate.interceptors.response.use(
  async (response) => {
    if (
      response.data.status === HTTP_STATUS.StatusOK ||
      response.data.statusCode === HTTP_STATUS.StatusOK ||
      response.data.statusCode === 201 ||
      response.status === HTTP_STATUS.StatusOK
    ) {
      return response.data;
    }
    return Promise.reject(response.data);
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === HTTP_STATUS.StatusUnauthorized) {
      try {
        // Nếu đã có refreshTokenPromise thì dùng lại
        if (!refreshTokenPromise) {
          refreshTokenPromise = axios
            .post(`${baseUrl}/hola/token/refresh`, {
              refreshToken: getLocalStorageData(
                LOCAL_STORAGE_KEYS.REFETCH_TOKEN,
                ""
              ),
            })
            .then((res) => {
              setLocalStorageData(
                LOCAL_STORAGE_KEYS.ACCESS_TOKEM,
                res.data.accessToken
              );
              setLocalStorageData(
                LOCAL_STORAGE_KEYS.REFETCH_TOKEN,
                res.data.refetchToken
              );
              return res.data;
            })
            .catch((error) => {
              if (error.response?.data?.message === "Invalid refresh token") {
                localStorage.clear();
                window.location.href = "/auth/login";
              }
              throw error;
            })
            .finally(() => {
              refreshTokenPromise = null;
            });
        }

        // Đợi cho token mới (nếu đang refresh)
        const data = await refreshTokenPromise;
        refreshTokenPromise = null;

        // Gắn lại token mới và gửi lại request gốc
        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
        return instancePrivate(originalRequest);
      } catch (err) {
        localStorage.clear();
        window.location.href = "/auth/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export { instancePrivate as httpPrivate, instancePublic as httpPublic };
