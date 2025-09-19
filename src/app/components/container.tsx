// components/Container.tsx
import React, { ElementType, PropsWithChildren } from "react";

type ContainerProps<T extends ElementType = "div"> = PropsWithChildren<{
  as?: T;
  className?: string;
}>;

const Container = <T extends ElementType = "div">({
  as,
  children,
  className = "",
}: ContainerProps<T>) => {
  const Component = as ?? "div";
  const base = "relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8";
  return <Component className={`${base} ${className}`}>{children}</Component>;
};

export default Container;
