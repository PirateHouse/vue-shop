import {request} from'./request'

export function getDetail(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
	
}

export function GetRecommendItem(){
	return request({
	url:'/recommend'
	})
}



export class DetailTitles{
	constructor(itemInfo,columns,services){
		this.price=itemInfo.lowNowPrice
		this.desc =itemInfo.desc
		this.oldPrice=itemInfo.oldPrice
		this.title=itemInfo.title
		this.discountDesc=itemInfo.discountDesc
		this.columns=columns
		this.services=services
	}
	
}


export class DetailShop{
	constructor(shopInfo){
		this.name=shopInfo.name
		this.cGoods=shopInfo.cGoods
		this.cSells=shopInfo.cSells
		this.shopLogo=shopInfo.shopLogo
		this.score=shopInfo.score
	}
}


export class DetailParamsInfo{
	constructor(info,rule){
		this.set=info.set
		this.tables=rule.tables[0]
		
	}
}


