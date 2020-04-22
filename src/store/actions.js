export default {
	addToCart(context,playLoad){
		//先查找里边有没有一样的iid
		let oldPlayLoad =context.state.cartList.find(item =>item.iid===playLoad.iid)
		//如果oldPlayLoad有值，那就让count+1
		if(oldPlayLoad){
			context.commit('addCount',oldPlayLoad)
		}else{
			playLoad.count=1;
			context.commit('addCart',playLoad)
		}
		
	}
	
}
