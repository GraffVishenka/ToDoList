import { Layout as AntLayout } from "antd";
import styles from "../styles/Layout.module.css";
import { Header } from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      <AntLayout.Content className={styles.table}>{children}</AntLayout.Content>
    </div>
  );
};
