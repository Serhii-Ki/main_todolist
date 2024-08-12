export type ResponseType<T = {}> = {
  resultCode: number;
  messages: string[];
  data: T;
};

export type LoginPayloadType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
