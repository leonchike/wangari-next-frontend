const API_Routes = {
  BASE: process.env.NEXT_PUBLIC_API_URL,
  privateApi: "/api",
  login: "/login",
  register: "/register",
  collection: "/api/collection",
  collectionSort: "/api/collectionsort",
  contact: "/api/contact",
  cv: "/api/cv",
  dataOrder: "/api/dataOrder",
  press: "/api/press",
  about: "/api/about",
  image: "/api/upload",
  asset: "/api/asset",
  currentUser: "/api/user/getcurrent",
  updateCurrentUser: "/api/user/updatecurrent",
  updatePassword: "/passwordUpdate",

  get LOGINROUTE() {
    return this.BASE + this.login;
  },
};

export const GetRoute = (endpoint: string) => {
  return API_Routes.BASE + API_Routes[endpoint];
};

export default API_Routes;
