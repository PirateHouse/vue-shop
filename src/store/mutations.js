
export default  {
	addCount(state,playLoad){
		//让原来的count+1
		playLoad.count++
	},
	addCart(state,playLoad){
		//被选中按钮为false
		playLoad.checked=false
		//将对象添加到数据中
		state.cartList.push(playLoad)
	}
	
	
}

