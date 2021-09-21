import { VFC, ReactNode } from "react";
import Top from "../images/Top.png";

interface PROPS {
  children: ReactNode;
}

export const Layout: VFC<PROPS> = ({ children }) => {
  return (
    <div className="App">
      <div className="top top-layer">
        <img
          src={Top}
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
        <div className="top top-content"></div>
      </div>
      <div className="wrapper">{children}</div>
    </div>
  );
};
