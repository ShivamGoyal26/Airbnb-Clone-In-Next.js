import { apiTypes } from "../api";
import { REGISTER } from "../endpoints";
import useApiCall from "../useApiCall";

export const useRegisterAPI = async (data: any) => {
  console.log(">S>>S>S>S>S>", data);
  const res = await useApiCall({
    type: apiTypes.post,
    url: REGISTER,
    data: data,
  });
  return res;
};
