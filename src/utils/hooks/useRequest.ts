import axios from "axios";
import { LoginPayloadType, ResponseType } from "../types/requestTypes.ts";

export function useRequest() {
  const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1",
    withCredentials: true,
    headers: {
      "API-KEY": "51768207-6c1b-4ce3-8f65-309bb8749f38",
    },
  });

  const authMe = () => {
    return instance.get<ResponseType>("/auth/me");
  };

  const login = (payload: LoginPayloadType) => {
    return instance.post<ResponseType>("/auth/login", payload);
  };

  return {
    authMe,
    login,
  };
}
