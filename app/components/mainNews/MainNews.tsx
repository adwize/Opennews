import { MainSec, NextMain } from "@/data";
import NextMainComponents from "./NextMain";
import Link from "next/link";
const MainNews = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
          {MainSec.map((item) => (
            <div className="sm:col-span-5" key={item.id}>
              <a href="#">
                <div
                  className="bg-cover text-center overflow-hidden"
                  style={{
                    minHeight: "300px",
                    backgroundImage: ` url(${item.image})`,
                  }}
                  title={item.title}
                ></div>
              </a>
              <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                  <Link
                    href="/"
                    className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    {item.categories}
                  </Link>
                  <Link
                    href="/"
                    className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                  >
                    {item.title}
                  </Link>
                  <p className="text-gray-700 text-base mt-2">{item.lead}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
            {NextMain.map((item) => (
              <NextMainComponents
                id={item.id}
                title={item.title}
                imgurl={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
