import { ConfigProvider } from "antd";

import type { ReactNode } from "react";
import { mainTheme } from "../../utils/antTheme";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ConfigProvider theme={mainTheme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
