"use client";
import { FC } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  return <div>{children}</div>;
};

export default Sidebar;
