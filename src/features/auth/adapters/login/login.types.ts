export type LoginAdapterParams = {
  email: string;
  password: string;
};

export type LoginAdapterResponse = { authToken: string };

export type LoginAdapter = (
  params: LoginAdapterParams,
  callback: (params: LoginAdapterResponse) => void
) => Promise<void>;
