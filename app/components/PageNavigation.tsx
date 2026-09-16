"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages=["/","/hakkimizda","/projeler","/iletisim"];

export default function PageNavigation(){
  const pathname=usePathname();
  const index=pages.indexOf(pathname);
  const prev=index>0?pages[index-1]:null;
  const next=index>=0&&index<pages.length-1?pages[index+1]:null;

  return(
    <>
      {prev&&<Link href={prev} className="page-arrow page-arrow-left" aria-label="Önceki sayfa">‹</Link>}
      {next&&<Link href={next} className="page-arrow page-arrow-right" aria-label="Sonraki sayfa">›</Link>}
    </>
  );
}