import axios from "axios";
import cookie from "react-cookies";

let v = 0;
axios.interceptors.request.use(
  async config => {
    //console.log("interceptors");
    //await cookie.save("access_token", "2", { path: "/" });
    const token = await cookie.load("access_token");
    //console.log("token", token);
    if (token != null) {
      config.headers = { auth_token: token };
    }
    // let token = cookie.load("access_token");
    // //console.log("access_token ", token);
    // if (token != null) {
    //   token = parseJwt(cookie.load("access_token"));

    //   var current_time = new Date().getTime() / 1000;
    //   // console.log("current_time", current_time);
    //   //console.log("diafora", token - current_time);
    //   if (current_time > token) {
    //     //console.log(v++);
    //     // console.log("expired ");
    //     await UpdateToken();
    //   } else {
    //     // console.log("mpompxa ");
    //   }
    // }
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
    //console.log("Do something with response data", response);
    // Do something with response data
    //console.log(response);
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

/*function parseJwt(token) {
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
}*/

async function UpdateToken() {
  //console.log(v++);
  //console.log("UpdateToken arxi");
  //console.log("UpdateToken ");
  const token = await cookie.load("refress_token");
  //console.log("refress_token", v);
  if (v === 0) {
    v = 1;
    await axios
      .post("http://localhost:5023/token", { refress_token: token })
      .then(async res => {
        //console.log("UpdateToken axios");
        //console.log(res.data);
        const result = res.data;
        if (result.status !== "error") {
          // alert("Επιτυχής καταχώρηση");
          await cookie.save("access_token", result.access_token, {
            path: "/"
          });
          await cookie.save("refress_token", result.refress_token, {
            path: "/"
          });
          //return;
        } else {
          //alert("Ανεπιτυχής καταχώρηση");
        }
      });
    //await sleep(2000);
  }
  //console.log("UpdateToken telos");
  //cookie.save("access_token", "result.access_token", { path: "/" });
  //cookie.save("refress_token", "result.refress_token", { path: "/" });
}

export default axios;
