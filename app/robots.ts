import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"], // Adjust disallowed paths as needed
    },
    sitemap: "https://kailloux.com/sitemap.xml",
  };
}
