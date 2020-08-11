import axios from 'axios'

// export function request(config, success, failure) {
//   // 1 创建axios实例
//   const instance = axios.create({
//     url: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 2 发送网络请求
//   instance(config).then((res) => {
//     // 将结果回调出去
//     success(res)
//   }).catch((err) => {
//     failure(err)
//   })
// }

// export function request2(config) {
//   // 1 创建axios实例
//   const instance = axios.create({
//     url: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 2 发送网络请求
//   instance(config.baseConfig).then((res) => {
//     // 将结果回调出去
//     config.success(res)
//   }).catch((err) => {
//     config.failure(err)
//   })
// }

// 使用Promise封装
// export function request3(config) {
//   return new Promise((resolve, reject) => {
//     // 1 创建axios实例
//     const instance = axios.create({
//       url: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     // 2 发送网络请求
//     instance(config).then((res) => {
//       // 将结果回调出去
//       resolve(res)
//     }).catch((err) => {
//       reject(err)
//     })
//   })
// }

// axios本身的返回值就是Promise，可以不用自己再包装Promise
export function requestMall(config) {
  // 1 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 拦截器
  // 请求拦截
  instance.interceptors.request.use((config) => {
    return config
  }, (err) => {
    console.log(err);
  })

  // // 响应拦截
  instance.interceptors.response.use((res) => {
    return res.data
  }, (err) => {
    console.log(err);
  })

  // 2 发送网络请求，instance(config)本身返回的就是Promise
  return instance(config)
}

// axios.defaults.widthCredentials = true



export function request(config) {
  // 1 创建axios实例
  const instance = axios.create({
    // 聚合数据
    // baseURL: 'http://apis.juhe.cn/goodbook/',
    // fastmock模拟数据
    // baseURL: "https://www.fastmock.site/mock/e03be9d99c3a7755ad47ed909c72a820/goodbook"
    // 黑马程序员
    baseURL: "https://api-hmugo-web.itheima.net/api/public/v1"
    
    // ,timeout: 10000
  })

  // 为了解决跨域问题，联合vue.config.js中的devServer配置
  // instance.defaults.baseURL = '/goodbook'
  // instance.defaults.headers.post['Content-Type'] = 'application/json';


  // 请求拦截
  instance.interceptors.request.use((config) => {
    return config
  }, (err) => {
    console.log(err);
  })

  // // 响应拦截
  instance.interceptors.response.use((res) => {
    return res
  }, (err) => {
    console.log(err);
  })

  // 2 发送网络请求，instance(config)本身返回的就是Promise
  return instance(config)
}
