const API_Routes = {
  BASE: process.env.NEXT_PUBLIC_API_URL,
  privateApi: "/api",
  login: "/login",
  register: "/register",
  collection: "/api/collection",
  collectionSort: "/api/collectionsort",
  contact: "/api/contact",

  get LOGINROUTE() {
    return this.BASE + this.login;
  },
};

export const GetRoute = (endpoint) => {
  return API_Routes.BASE + API_Routes.endpoint;
};

export default API_Routes;
