export interface IUserIdContext {
  userId: string | null;
  setUserId: (value: string) => void;
  handleResetUserId: () => Promise<void>;
}

export interface IUser{
  name: string;
  email: string;
  role: string[];
  externalId: string;
}

export interface ICredentials {
  login: string;
  password: string;
}

export interface IJwtPayload {
  sub: string
  name: string
  role: string[];
  externalId: string
}

export interface IAuthContextType {
  user: IUser | null;
  signOut: () => void;
  signIn: (credentials: ICredentials) => Promise<void>;
}