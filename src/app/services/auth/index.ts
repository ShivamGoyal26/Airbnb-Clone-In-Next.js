import { apiTypes } from "../api";
import { REGISTER } from "../endpoints";
import apiCall from "../apiCall";

export const registerApi = async (data: any) => {
  console.log(">S>>S>S>S>S>", data);
  const res = await apiCall({
    type: apiTypes.post,
    url: REGISTER,
    data: data,
  });
  return res;
};
