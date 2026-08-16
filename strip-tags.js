// Remove HTML tags from a string, returning plain text.
export function stripHtmlTags(input) {
  if (typeof input !== "string") return "";
  return input.replace(/<[^>]*>/g, "");
}
