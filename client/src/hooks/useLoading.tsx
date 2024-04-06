import { ReactNode, useState } from "react";
import SpinnerComponent from "@/components/SpinnerComponent";
export default function useLoading() {
  const [loading, setLoading] = useState(false);

  const load = async (promise: Promise<any>) => {
    setLoading(true);
    try {
      return await promise;
    } finally {
      setLoading(false);
    }
  };

  const LoadingShow = () => loading && <SpinnerComponent />;

  const LoadingSwitch: React.FC<{ children: ReactNode }> = ({ children }) => {
    return loading ? <SpinnerComponent /> : <>{children}</>;
  };

  return { loading, load, LoadingShow, LoadingSwitch };
}
