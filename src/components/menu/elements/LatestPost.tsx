import { IContentfulAsset } from "@/contentful/types/blogPost.types";
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

export async function LatestPost() {
  //pakai async itu karna mau ngambil data di API, berarti itu promis jadi nunggu dlu, data ada di software lain nih.
  const posts = await getBlogPostsContentful();
  const category = "blogPost";
  const filteredData = posts?.items.filter(
    (post) => post.sys.contentType.sys.id === category
  );
  return (
    <div className="w-[100%] mx-auto ">
      <div
        className={`${playfair.variable} font-serif text-5xl text-[rgb(150,95,52)] pt-10 text-left pb-3`}
      >
        Latest Recipes
      </div>
      <div className=" w-[100%] pb-10 mx-auto  desktop:grid grid-rows-2 grid-cols-3 gap-5">
        {filteredData &&
          filteredData.slice(0, 6).map((blog, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between shadow-md border border-gray-200 max-h-[600px] max-w-1/3 gap-0 p-5"
            >
              <div className="w-full h-[40%]">
                <Image
                  src={`https:${
                    (blog.fields.image as IContentfulAsset)?.fields.file.url
                  }`}
                  alt="gambar"
                  height={300}
                  width={300}
                  className="w-full h-[100%] object-cover"
                />
              </div>
              <div className="flex flex-col justify-between h-[40%]">
                <div
                  className={`${lato.variable} font-serifs text-2xl tracking-tigh font-extrabold`}
                >
                  {blog.fields.title}
                </div>
                <div
                  className={`${poppins.variable} font-secondary text-0.25xl font-extralight text-gray-700`}
                >
                  {" "}
                  These blueberry baby muffins are sweetened with fruits only
                  and loaded with nutrition! They are incredibly soft and moist,
                  making them the perfect first muffins for babies. But rest
                  assured, they will also be loved by toddlers, older kids, and
                  adults alike!
                </div>
              </div>

              <Link href={`article/${blog.fields.slug}`}>
                <div
                  className={`${mulish.variable} font-sans text-black bg-[rgb(159,135,111)] font-semibold hover:bg-[rgb(150,95,52)] focus:ring-4 focus:ring-black  rounded-lg text-sm px-3 py-2 text-center inline-flex items-center`}
                >
                  Read More
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
