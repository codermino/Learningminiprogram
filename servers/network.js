import {baseURL} from "./config.js"

// 如果是default可以在导入的时候起另外一个名字
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL+options.url,
      method: options.method || "get",
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}