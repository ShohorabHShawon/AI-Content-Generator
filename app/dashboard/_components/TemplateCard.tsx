import React from "react";
import { TEMPLATE } from "./TemplateSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={"/dashboard/generate/" + item?.slug}>
      <div
        className="m-3 p-5 rounded-lg shadow-lg border bg-white flex flex-col
      gap-3 cursor-pointer hover:shadow-xl transition duration-300 hover:scale-105"
      >
        <Image src={item.icon} alt="item.name" width={50} height={50} />
        <h2 className="font-bold text-lg line-clamp-1">{item.name}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
      </div>
    </Link>
  );
}
export default TemplateCard;
