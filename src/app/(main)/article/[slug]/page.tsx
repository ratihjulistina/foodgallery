"use client";

import { useState, useEffect } from "react"; //berarti dalam react file ada banyak export function pakai kurung kurawal
import { IContentfulAsset } from "@/contentful/types/blogPost.types";
import contentfulClient from "@/contentful/contentfulClient"; //cuma ada 1 function yg di export default
import Image from "next/image";
import { useParams } from "next/navigation";
import RichText from "@/components/global/RichText";
import Navbar from "@/components/layout/Navbar";
import { Lato, Poppins } from "next/font/google";

// const mulish = Mulish({
//   subsets: ["latin"],
//   variable: "--font-mulish",
//   weight: ["400", "700"],
// });

// const playfair = Playfair({
//   subsets: ["latin"],
//   variable: "--font-playfair",
//   weight: ["900"],
// });

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

export default function Article() {
  //fitur next bisa langsung akses slug dari params
  const params = useParams<{ slug: string }>();
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const [article, setArticle] = useState<any>();

  const fetchArticles = async () => {
    try {
      const data = await contentfulClient.getEntries({
        content_type: "blogPost",
        limit: 1,
        "fields.slug": params.slug,
      });

      setArticle(data.items[0].fields);
    } catch (err) {
      console.log;
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      {article && (
        <div>
          <Navbar />
          <div className="w-full h-[50vh] bg-[#CDBDB0] flex flex-col justify-end mb-5">
            <div
              className={`${lato.variable} font-serifs w-[87.4%] mx-auto text-4xl font-extrabold mb-10 `}
            >
              {article?.title}
            </div>
          </div>
          <div className="w-100% bg-white">
            <div className="w-[87.4%] m-auto">
              <div className="relative h-[400px] w-[70%] mx-auto mb-10 ">
                <Image
                  src={`https:${
                    (article?.image as IContentfulAsset)?.fields.file.url
                  }`}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="article-image"
                />
              </div>
              <div className={`text-0.5xl ${poppins.variable} font-secondary`}>
                <RichText document={article?.body} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
