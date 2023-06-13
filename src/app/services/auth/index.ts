import { apiTypes } from "../api";
import { LISTING, REGISTER } from "../endpoints";
import apiCall from "../apiCall";

export const registerApi = async (data: any) => {
  const res = await apiCall({
    type: apiTypes.post,
    url: REGISTER,
    data: data,
  });
  return res;
};

export const listingPropertyApi = async (data: any) => {
  const res = await apiCall({
    type: apiTypes.post,
    url: LISTING,
    data: data,
  });
  return res;
};
