import React, {
  createContext,
  memo,
  useEffect,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";

import { UserResponseProps } from "@/views/Login/Login.type";

interface ContextProps {
  user: UserResponseProps["user"] | null;
}


const useAuchContext = createContext<ContextProps | undefined>(undefined);
useAuchContext.displayName = "useAuchContext";

interface Props {
  children: ReactNode;
}

const AuthProviders: React.FC<Props> = memo(({ children }: Props) => {

  const [user, setUser] = useState<UserResponseProps["user"] | null>(null);
  return (
    <useAuchContext.Provider value={{ user}}>
      {children}
    </useAuchContext.Provider>
  );
})

const useAuth = () => {
  const context = useContext(useAuchContext);
  if (!context) {
    throw new Error("useAuth必须在provider中使用");
  } else {
    return context as ContextProps;
  }
};

export { AuthProviders, useAuth };