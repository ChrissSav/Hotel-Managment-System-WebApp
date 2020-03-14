import axios from "axios";
import cookie from "react-cookies";

let v = 0;
axios.interceptors.request.use(
  async config => {
    const token = await cookie.load("access_token");
    if (token != null) {
      config.headers = { auth_token: token };
    }
    // Or when you don't need an HTTP request just resolve
    return config;

    // Do something before request is sent
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  async function(response) {
    // Do something with response data
    if (response.data.status === "error") {
      //  await UpdateToken();
    }
    return response;
  },
  async function(error) {
    //console.log("Do something with response error", error);
    await UpdateToken();
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

export default axios;
