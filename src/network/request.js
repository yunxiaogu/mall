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

export function request2(config) {
  // 1 创建axios实例
  const instance = axios.create({
    url: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2 发送网络请求
  instance(config.baseConfig).then((res) => {
    // 将结果回调出去
    config.success(res)
  }).catch((err) => {
    config.failure(err)
  })
}

// 使用Promise封装
export function request3(config) {
  return new Promise((resolve, reject) => {
    // 1 创建axios实例
    const instance = axios.create({
      url: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    // 2 发送网络请求
    instance(config).then((res) => {
      // 将结果回调出去
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// axios本身的返回值就是Promise，可以不用自己再包装Promise
export function request(config) {
  // 1 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // instance.defaults.baseURL = 'http://123.207.32.32:8000;

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
