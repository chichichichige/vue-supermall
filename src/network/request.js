import axios from 'axios'

export function request(config) {
  //1、创建axios的实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
  //2、axios的拦截器的作用
  instance.interceptors.request.use(config => {
    console.log(config)
    //1.config中的一些信息不符合服务器的要求
    //2.每次发送网络请求时，希望出现请求动画
    //3.某些网络请求(比如登录(token)),必须携带一些特殊的信息
    return config
  },err => {
    console.log(err)
  });//请求拦截

  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
  }, err => {
    console.log(err)
  });//响应拦截

  //3、发送真正的网络请求
    return instance(config)
}
