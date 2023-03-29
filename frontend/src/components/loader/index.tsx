import { defaultTheme } from "@/styles/themes";
import { PuffLoader } from "react-spinners";

export interface LoaderProps {
  loading?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <PuffLoader
      color={defaultTheme.colors.primary}
      cssOverride={{ margin: "0 auto" }}
      size={60}
      loading={loading}
    />
  );
};
