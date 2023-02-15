// This object genrates the static links for the navigation bar and admin dashboard.
export const staticLinks = [
  { name: "About", path: "/art/about", dashPath: "/admin/about" },
  { name: "CV", path: "/art/cv", dashPath: "/admin/cv" },
  { name: "Press", path: "/art/press", dashPath: "/admin/press" },
  {
    name: "Contact",
    path: "/art/contact",
    dashPath: "/admin/contact",
  },
];

export const routes = {
  home: "/",
  about: "/art/about",
  cv: "/art/cv",
  press: "/art/press",
  contact: "/art/contact",
  adminIndex: "/admin",
  adminAbout: "/admin/about",
  adminCv: "/admin/cv",
  adminPress: "/admin/press",
  adminContact: "/admin/contact",
  adminCollections: "/admin/collections",
  adminCollection: "/admin/collections/[id]",
  settings: "/admin/settings",
};
