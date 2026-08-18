import { ReactNode } from "react";
import Navbar from "../nabar/Navbar";

export default function ContainerLayout(
  { children } : { children: ReactNode}
) {
  return (
    <section className="xl:w-[75%] w-[95%] mx-auto overflow-hidden ">
      <Navbar />
      <div className="mt-20 px-7 sm:px-0">
        {children}
      </div>
    </section>
  )
}
