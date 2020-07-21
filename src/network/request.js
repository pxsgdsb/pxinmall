import axios from 'axios'

export function request(config){
	// return new Promise((resolve, reject)=>{
		//1.创建实例
		const instance = axios.create({
		     baseURL:'http://123.207.32.32:8000',
			 timeout:5000
		})
		//2.axios拦截器
		   //instance.interceptors.request //拦截请求
		instance.interceptors.request.use(config=>{
			// console.log(config)
			return config
		},err=>{
			// console.log(err)
		})
		   //instance.interceptors.response //拦截响应
		instance.interceptors.response.use(res=>{
			// console.log(res)
			return res.data
		},err=>{
			// console.log(err)
		})
		   
		//3.创建真正的网络请求
		return instance(config)
		
	
}