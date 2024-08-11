"use client"
 import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaAngleRight } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import React from "react";

export default function BreadcrumbBar() {
  const pathname = usePathname();
  if (!pathname) return null; // Add this null check
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/"><IoHomeOutline/></BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments.map((segment:string, index:number) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator>
                <FaAngleRight />
              </BreadcrumbSeparator>
              <BreadcrumbItem className="capitalize text-[#41c13f]">
                <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}