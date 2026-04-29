import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlForImage(source: any) {
  return builder?.image(source);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlForImageString(source: any, width = 1200, height = 630): string {
  if (!builder) return "";
  return builder.image(source).width(width).height(height).auto("format").url();
}
