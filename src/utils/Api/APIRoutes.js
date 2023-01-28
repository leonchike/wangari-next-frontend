const API_Routes = {
  BASE: process.env.NEXT_PUBLIC_API_URL,
  login: "/login",
  REGISTER: "/register",

  get LOGINROUTE() {
    return this.BASE + this.login;
  },
};

export default API_Routes;
