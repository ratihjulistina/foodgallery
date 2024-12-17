import contentfulClient from "@/contentful/contentfulClient";
import {
  TypeBlogPostSkeleton,
  IContentfulAsset,
} from "@/contentful/types/blogPost.types";
import Image from "next/image";
import Link from "next/link";
import { Mulish, Playfair, Lato, Poppins } from "next/font/google";
import { getBlogPostsContentful } from "./Request";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["400", "700"],
});

const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["900"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-Lato",
  weight: ["900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-Poppins",
  weight: ["400"],
});

export async function Catagory({ filterKey }: { filterKey: string }) {
  //pakai async itu karna mau ngambil data di API, berarti itu promis jadi nunggu dlu, data ada di software lain nih.
  const posts = await getBlogPostsContentful();

  return (
    <div className="w-[87.4%] mx-auto bg-[rgb(160,135,111)] opacity-0.4 h-[130vh] ">
      <div
        className={`${playfair.variable} font-serif text-5xl text-black pt-10 text-center py-5 `}
      >
        {filterKey}
      </div>
      <div className=" w-[90%] pb-10 mx-auto  desktop:grid grid-rows-2 grid-cols-3 gap-5 ">
        {posts &&
          posts.items
            ?.filter((post) => post.fields.catagory === filterKey)
            .map((blog, idx) => (
              <div
                key={idx}
                className=" shadow-md h-[100vh] max-w-sm bg-white  "
              >
                <Link className=" " href={`article/${blog.fields.slug}`}>
                  <div className="h-[40%] w-full">
                    {" "}
                    <Image
                      src={`https:${
                        (blog.fields.image as IContentfulAsset)?.fields.file.url
                      }`}
                      alt="gambar"
                      height={300}
                      width={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className=" w-[90%] h-[60%] flex flex-col justify-between m-auto pb-3">
                    <div
                      className={`${lato.variable} font-serifs text-2xl tracking-tigh font-extrabold mb-2 pt-3 h-[30%]`}
                    >
                      {blog.fields.title}
                    </div>
                    <div
                      className={`${poppins.variable} font-secondary text-0.25xl font-extralight text-gray-700 mb-3 `}
                    >
                      {" "}
                      These blueberry baby muffins are sweetened with fruits
                      only and loaded with nutrition! They are incredibly soft
                      and moist, making them the perfect first muffins for
                      babies. But rest assured, they will also be loved by
                      toddlers, older kids, and adults alike!
                    </div>
                    <Link href={`article/${blog.fields.slug}`}>
                      <div
                        className={`${mulish.variable} font-sans text-black bg-[rgb(159,135,111)] font-semibold hover:bg-[rgb(150,95,52)] focus:ring-4 focus:ring-black  rounded-lg text-sm px-3 py-2 text-center inline-flex items-center`}
                      >
                        Read More
                      </div>
                    </Link>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
