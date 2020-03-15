import axios from "axios";
import cookie from "react-cookies";

let v = 0;
axios.interceptors.request.use(
  async config => {
    const token = await cookie.load("access_token");
    if (token != null) {
      config.headers = { auth_token: token };
      if (IsExpired()) {
        await UpdateToken();
      }
    }

    // Or when you don't need an HTTP request just resolve
    return config;

    // Do something before request is sent
  },
  error => {
    //console.log("Do something with request error");
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  async function(response) {
    // Do something with response data
    // if (response.data.status === "error") {
    //  await UpdateToken();
    //}
    return response;
  },
  async function(error) {
    //console.log("Do something with response error", error);
    //await UpdateToken();
    // Do something with response error
    return Promise.reject(error);
  }
);

async function UpdateToken() {
  const token = await cookie.load("refress_token");
  const flag = await cookie.load("flag");
  const url = "http://localhost:5023/token_" + flag;
  if (v === 0) {
    v = 1;
    await axios.post(url, { refress_token: token }).then(async res => {
      const result = res.data;
      if (result.status !== "error") {
        await cookie.save("access_token", result.access_token, {
          path: "/"
        });
        await cookie.save("refress_token", result.refress_token, {
          path: "/"
        });
      }
    });
  }
}

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload).exp;
}

function IsExpired() {
  const token = parseJwt(cookie.load("access_token"));
  var current_time = new Date().getTime() / 1000;
  // console.log("current_time", current_time);
  //console.log("diafora", token - current_time);
  if (current_time > token) {
    //console.log(v++);
    //console.log("expired ");
    return true;
  } else {
    //console.log("mpompxa ");
    return false;
  }
}
export default axios;
