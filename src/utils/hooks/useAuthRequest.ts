import { useRequest } from "./useRequest.ts";
import { LoginPayloadType, ResponseType } from "../types/requestTypes.ts";

export function useAuthRequest() {
  const instance = useRequest();

  const authMe = () => {
    return instance.get<ResponseType>("/auth/me");
  };

  const login = (payload: LoginPayloadType) => {
    return instance.post<ResponseType>("/auth/login", payload);
  };

  const logout = () => {
    return instance.delete<ResponseType>("/auth/login");
  };

  return {
    authMe,
    login,
    logout,
  };
}
