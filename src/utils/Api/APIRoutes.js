const API_Routes = {
  BASE: process.env.NEXT_PUBLIC_API_URL,
  login: "/login",
  REGISTER: "/register",

  get LOGINROUTE() {
    return this.BASE + this.login;
  },
};

export const GetRoute = (endpoint) => {
  return API_Routes.BASE + API_Routes.endpoint;
};

export default API_Routes;
