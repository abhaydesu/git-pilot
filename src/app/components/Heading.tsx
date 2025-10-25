// components/Heading.tsx
import React, { PropsWithChildren } from "react";

type HeadingProps = PropsWithChildren<{
  className?: string;
}>;

export const Heading = ({ children, className = "" }: HeadingProps) => {
  return (
    <div className={`md:text-8xl text-6xl tracking-tight [text-shadow:var(--shadow-custom)] text-white font-bold text-center mx-auto ${className} -right-10`}>
      {children}
    </div>
  );
};

export default Heading;
