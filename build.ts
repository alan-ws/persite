// generate children routes for router
// generate sitemap
// generate helmet
import axios from "axios";
import { writeFile } from "fs";
import { blogRoutes, blogLayout } from "./src/pages/blog/index";

type SitemapProps = {
  endpoint: string;
  lastMod: string;
  changeFreq: string;
  priority: string;
};

const query = `{
  blogMdnCollection {
    items {
      title
      body {
        json
      }
    }
  }
}`;

async function getContent() {
  type BlogResponse = {
    data: {
      blogMdnCollection: {
        items: {
          title: string;
          body: {
            json: any;
          };
        }[];
      };
    };
  };

  const res = await axios.post<BlogResponse>(
    "https://graphql.contentful.com/content/v1/spaces/b0d7sayrt6rr/",
    JSON.stringify({ query }),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer NwTLrvrLMw0QepzmB0RRIuyF93r0EEki8gCs6e6icus",
      },
    }
  );
  return res.data.data.blogMdnCollection.items;
}

const generateSitemap = (props: SitemapProps) => {
  const siteMapTemplateString = `
    <url>
      <loc>${props.endpoint}</loc>
      <lastmod>${props.lastMod}</lastmod>
      <changefreq>${props.changeFreq}</changefreq>
      <priority>${props.priority}</priority>
    </url>
  `;

  return siteMapTemplateString;
};

const addToSitemap = (content: string) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${content}
    </urlset> `;
};

async function buildRoutes(
  content: {
    title: string;
    body: {
      json: any;
    };
  }[]
) {
  content.forEach((value) => {
    blogRoutes.push({
      path: value.title.split(" ").join("-").toLowerCase(),
      element: blogLayout(value),
    });
  });
}

async function main() {
  const content = await getContent();
  buildRoutes(content);
  // const sitemapContent = content.map((value) => {
  //   const url = `https://persite.com/blog/${value.title.split(" ").join("-").toLowerCase()}`;
  //   const lastMod = "2021-08-27";
  //   const changeFreq = "yearly";
  //   const priority = "1.0";

  //   return generateSitemap({ endpoint: url, lastMod, changeFreq, priority });
  // });

  // writeFile("./public/sitemap.xml", addToSitemap(sitemapContent.toString()), (err) =>
  //   console.log(err)
  // );
}

main();
