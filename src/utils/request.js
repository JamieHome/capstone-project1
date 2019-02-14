import axios from "axios";
import router from "../router/index";
import {
  Notification,
  Loading
} from "element-ui";
var getOrPost = (options) => {
  if (typeof options !== "object" && options === null) {
    throw new Error("options must be an object");
  }

  var setting = Object.assign({
      hasMutipleStatus: false,
      method: "get",
      headers: {
        "content-type": "application/json"
      }
    },
    options
  );
  var loadingInstance = Loading.service({
    fullscreen: true
  });
  return new Promise((resolve, reject) => {
    axios(setting)
      .then((res) => {
        setTimeout(() => {
          loadingInstance.close();
        }, 200);
        var content = res.data.data;
        var data = res.data;
        var res = res;
        if (res.data.status == 1) {
          resolve(content, data, res);
        } else if(res.data.status == 2) {
          if (setting.hasMutipleStatus) {
            resolve(content, data, res);
          } else {
            return Promise.reject(res.data.message, res);
          }
        }else if(res.data.status == 10){
          router.push("/");
          return Promise.reject("请登录", res);
        }
      })
      .catch(message => {
        setTimeout(() => {
          loadingInstance.close();
        }, 200);
        Notification({
          type: "error",
          message: message
        });
      })
  })
}


export default getOrPost;
