import { createSitemap } from "sitemap";

const urls = [
  {
    url: "/",
    changefreq: "daily",
    priority: 1,
    lastmod: new Date(),
  },
  {
    url: "/about",
    changefreq: "monthly",
    priority: 0.8,
    lastmod: new Date(),
  },
  {
    url: "/resources",
    changefreq: "weekly",
    priority: 0.8,
    lastmod: new Date(),
  },
];

export default async function generateSitemap(req, res) {
  try {
    // Create the sitemap
    const sitemap = createSitemap({
      hostname: "https://www.devfort.tech/",
      urls,
    });

    // Set the response headers
    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "public, max-age=86400, must-revalidate");

    // Send the sitemap as the response
    res.status(200).send(sitemap.toString());
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send("Error generating sitemap");
  }
}
