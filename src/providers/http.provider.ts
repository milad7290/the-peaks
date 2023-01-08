import axios, { AxiosPromise, AxiosRequestConfig, ResponseType } from "axios";

export const HttpProvider = <T>({
  base = process.env.REACT_APP_REST_ENDPOINT,
  url,
  data,
  params,
  method = "GET",
  onUploadProgress,
  contentType = "application/json",
  responseType = "json",
}: {
  base?: string;
  url: string;
  data?: any;
  params?: any;
  method?: HttpMethod;
  onUploadProgress?: any;
  contentType?: string;
  responseType?: ResponseType;
}): AxiosPromise<T> => {
  const apiKey = process.env.REACT_APP_REST_ENDPOINT_API_KEY;
  const fullUrl = `${base}${url}api-key=${apiKey}`;
  const config: AxiosRequestConfig = {
    method,
    responseType,
    headers: {
      Accept: contentType,
      "Content-Type": contentType,
    },
    onUploadProgress,
  };
  if (params) {
    config.params = params;
  }
  if (data) {
    config.data = data;
  }

  return axios(fullUrl, config);
};

export const HttpProviderPutFileWithFetch = <T>({
  url,
  data,
  contentType,
}: {
  url: string;
  data?: any;
  params?: any;
  method?: HttpMethod;
  contentType: string;
}): Promise<Response> => {
  return fetch(url, {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": contentType,
    },
  });
};

export const FetchResultType = {
  ServerError: "server_error",
  FetchError: "fetch_error",
  Success: "success",
};

export type HttpMethod = "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
