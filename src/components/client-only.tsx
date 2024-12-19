"use client";

import { useEffect, useState } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export function ClientOnly({
  children,
  ...delegated
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...delegated}>{children}</div>;
}
