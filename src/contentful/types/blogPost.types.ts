import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
export interface TypeBlogPostFields {
  title: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.RichText;
  catagory: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
}

export interface IContentfulAsset {
  sys: { id: string };
  fields: { file: { url: string; fileName?: string; contentType?: string } };
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  "blogPost"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
