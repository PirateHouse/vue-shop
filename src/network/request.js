import axios from 'axios'

 export function request(config){
	
	//创建axios实例
	const instance =axios.create({
		baseURL:'',
		timeout:50000,
	})
		//响应成功后axios拦截做一些处理，在返回，例如登录页面获取token值
	instance.interceptors.response.use(response =>{
		return response.data
	})
	
	//调用实例并返回
	return instance(config)
}
 
 
 
 
