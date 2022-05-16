import axios from "axios";

const getDefaultPath = () => {
  return "http://localhost:8000"
}

const transformResponse = (input: string) => {
  try {
    return JSON.parse(input);
  } catch {
    //  Ignore ;
  }
};

const buildHeader = (obj = {}) => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  Object.assign(header, obj);
  return header;
};

const apiFactory = (baseUrl: string = getDefaultPath(), header = {}) => {
  const service = axios.create({
    baseURL: baseUrl,
    headers: buildHeader(header),
    transformResponse: [
      (data) => {
        if (typeof data === "string") {
          return transformResponse(data);
        }
        return data;
      },
    ],
  });

  service.interceptors.request.use(
    (config: any) => {
      const token = sessionStorage.getItem("_token")
      if (token) {
        config.headers.Authorization = "Bearer " + token; 
      }
      return config;
    },
    (_error) => {
      return _error;
    }
  );

  return service;
};

export default apiFactory;