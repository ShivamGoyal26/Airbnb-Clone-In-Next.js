import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-hot-toast";
import { apiTypes } from "./api";
import useLoading from "../hooks/userLoading";

// Files

const getInstance = ({
  hasImage,
  data,
  params,
  extraAdditionToHeader,
}: any) => {
  // const tokens = store.getState().auth.tokens;
  // const accessToken = store.getState().auth.accessToken;

  // const isInternet = store.getState().common.isInternet;
  const instance = axios.create({
    baseURL: "/",
  });

  const { CancelToken } = axios;
  const source = CancelToken.source();

  // function isTokenExpired() {
  //   if (!tokens) {
  //     return true;
  //   }
  //   const decodedToken: any = jwt_decode(tokens); // Assuming you are using a JWT access token
  //   const expirationTime = decodedToken.exp * 1000; // Convert expiration time to milliseconds

  //   // Compare the current time with the expiration time
  //   const currentTime = Date.now();
  //   return currentTime >= expirationTime;
  // }

  instance.interceptors.request.use(
    (request: any) => {
      request.data = data;
      request.params = params;
      request.cancelToken = source.token;
      // request.headers["UtcOffsetInSecond"] = getTimezoneOffsetInSeconds();
      if (extraAdditionToHeader) {
        request.headers = { ...request.headers, ...extraAdditionToHeader };
      }
      if (hasImage !== 0) {
        request.headers["Content-Type"] = "multipart/form-data";
      } else {
        request.headers["Content-Type"] = "application/json";
      }
      // if (tokens) {
      //   request.headers["Authorization"] = "Bearer " + tokens;
      // }
      // if (accessToken) {
      //   request.headers["accessToken"] = accessToken;
      // }

      // if (!isInternet) {
      //   source.cancel("Cancelled");
      // }
      // if (__DEV__) {
      //   info(request.url);
      // } else {
      //   info(request.url, request.data);
      // }
      return request;
    },
    (error) => {
      throw new Error(error.message);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      if (response.data.responseCode === 222) {
        // store.dispatch(signOutManager());
        throw new Error(response.data.message);
      }
      return response;
    },
    function (error) {
      if (
        error?.response?.status === 401
        // &&
        // isTokenExpired()
      ) {
        // store.dispatch(signOutManager());
        throw new Error("Session has been expired");
        // // Refresh the token and resend the original request
        // return refreshAccessToken().then(newToken => {
        //   // Update the access token
        //   updateAccessToken(newToken);

        //   // Modify the original request with the new access token
        //   const originalRequest = error.config;
        //   originalRequest.headers.Authorization = `Bearer ${newToken}`;

        //   // Retry the original request
        //   return axiosInstance(originalRequest);
        // });
      } else {
        throw new Error(error.message);
      }
    }
  );

  return instance;
};

const useApiCall = async ({
  hasImage = 0,
  type,
  url,
  data,
  params = {},
  enableLoader = true,
  extraAdditionToHeader = null,
}: any) => {
  if (enableLoader) {
    // useLoading().startLoading();
  }
  const instance = getInstance({
    hasImage,
    data,
    params,
    extraAdditionToHeader,
  });
  try {
    switch (type) {
      case apiTypes.post: {
        let response = await instance.post(url);
        return response?.data;
      }
      case apiTypes.patch: {
        let response = await instance.patch(url);
        return response?.data;
      }
      case apiTypes.put: {
        let response = await instance.put(url);
        return response?.data;
      }

      case apiTypes.delete: {
        let response = await instance.delete(url);
        return response?.data;
      }

      case apiTypes.get: {
        let response = await instance.get(url);
        return response?.data;
      }

      default: {
        let response = await instance.get(url);
        return response?.data;
      }
    }
  } catch (error: any) {
    console.log("Error in catch", error.message);
    if (error.message !== "Cancelled") {
      toast.error(error.message, {
        duration: 2000,
      });
    }
  } finally {
    // useLoading().stopLoading();
    // useLoading().stopModalLoading();
  }
};

export default useApiCall;
