import client from "../api/client";

export async function register(name, email, password, confirmPassword) {
  var request = { name, email, password, confirmPassword };
  const res = await client.post("user/register", request);
  return res.status == 200;
}

export async function signIn(email, password) {
  var request = { email, password };
  const res = await client.post("token", request);
  if (res.status == 200) {
    localStorage.setItem("user-params", res.data.data);
    return true;
  }
  return false;
}

export function getUserParams() {
  const userParams = localStorage.getItem("user-params");
  if (userParams) return JSON.parse(userParams);
}

export function clearUserParams() {
  localStorage.removeItem("user-params");
}
