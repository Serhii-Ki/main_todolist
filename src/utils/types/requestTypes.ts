export type ResponseType<T> = {
  resultCode: number;
  messages: string[];
  data: T;
};

export type AuthMeType = {
  id: number;
  email: string;
  login: string;
};
