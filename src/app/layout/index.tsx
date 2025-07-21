import { type ReactNode } from "react";
import { Footer } from "../../shared/components";
import { MainHeader } from "../../widgets/MainHeader";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const styles = {
    layout: {
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      minHeight: "100vh",
      width: "100%",
    } as const,
  };

  return (
    <div style={styles.layout}>
      <MainHeader />
      {children}
      <Footer />
    </div>
  );
};
