import { ReactNode, useState } from "react";
import SpinnerComponent from "@/components/SpinnerComponent";

interface LoadingSwitchProps {
  children: ReactNode;
  size?: string;
}

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

  const LoadingSwitch: React.FC<LoadingSwitchProps> = ({ children, size }) => {
    return loading ? <SpinnerComponent size={size} /> : children;
  };

  return { loading, load, LoadingShow, LoadingSwitch };
}
