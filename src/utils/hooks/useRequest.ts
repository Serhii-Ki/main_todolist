import axios from "axios";
import { AuthMeType, ResponseType } from "../types/requestTypes.ts";

export function useRequest() {
  const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1",
  });

  const authMe = () => {
    return instance.get<ResponseType<AuthMeType>>("/auth/me");
  };

  return {
    authMe,
  };
}
