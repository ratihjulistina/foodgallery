import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogPostSkeleton } from "@/contentful/types/blogPost.types";

export const getBlogPostsContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>();

    // console.log("Filtered data ", filteredData);
    return data;
  } catch (err) {
    console.log(err);
  }
};
