/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://typing.avinashsuthar.in", // Change this to your website URL
  generateRobotsTxt: true, // Automatically generates robots.txt
  exclude: ["/admin", "/dashboard"], // Pages to exclude from the sitemap
};
