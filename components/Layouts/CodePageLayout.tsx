import React, { ReactNode } from "react";

export interface CodePageLayout {
  children: ReactNode;
}

const CodePageLayout = ({ children }: CodePageLayout) => {
  return (
    <div>
      CodePageLayout
      {children}
    </div>
  );
};

export default CodePageLayout;
