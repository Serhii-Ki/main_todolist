import axios from "axios";

export function useRequest() {
  return axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1",
    withCredentials: true,
    headers: {
      "API-KEY": "51768207-6c1b-4ce3-8f65-309bb8749f38",
    },
  });
}
