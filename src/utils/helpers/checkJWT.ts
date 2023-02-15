import jwt_decode from "jwt-decode";

interface Decoded {
  _id: string;
  email: string;
  iat: number;
  exp: number;
}

export const checkForExpiredJWT = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decoded: Decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return null;
    }
    return true;
  }
  return null;
};
