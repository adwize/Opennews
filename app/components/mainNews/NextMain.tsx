import Link from "next/link";
import React from "react";
interface Props {
  id: number;
  title: string;
  imgurl: string;
}
const NextMainComponents = ({ id, imgurl, title }: Props) => {
  return (
    <>
      <div className="" key={id}>
        <Link href="/">
          <div
            className="h-40 bg-cover text-center overflow-hidden bg-gray-500"
            style={{
              backgroundImage: ` url(${imgurl})`,
            }}
            title={title}
          ></div>
        </Link>
        <Link
          href="/"
          className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          {title}
        </Link>
      </div>
    </>
  );
};

export default NextMainComponents;
