import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://iulidragos.com/",
    title: "Iulian, not Lulian",
    description: "Scala developer geek, Spark contributor",
    author: "Iulian Dragos",
    profile: "https://iulidragos.com/about/",
    lang: "en",
    timezone: "Europe/Zurich",
    dir: "ltr",
  },
  posts: {
    perPage: 10,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/dragos" },
    { name: "x",        url: "https://x.com/jaguarul" },
    { name: "linkedin", url: "https://www.linkedin.com/in/iuliandragos" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
