const obj={}
import Toast from'./Toast'

obj.install=function(Vue){
	const toastConst =Vue.extend(Toast)
	
	const toast= new toastConst()
	
	toast.$mount(document.createElement('div'))
	
	document.body.appendChild(toast.$el)
	
	Vue.prototype.$toast=toast
	
}

export default obj
