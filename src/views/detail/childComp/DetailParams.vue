<template>
	<div class="detail-params" v-if="Object.keys(paramsInfo).length!==0">
		<table class="params-tables">
			<tr  class="params-tr" v-for="tr in paramsInfo.tables">
				<td class="params-td" v-for="item in tr">{{item}}</td>
			</tr>
		</table>
		<table class="params-set">
			<tr v-for="item in paramsInfo.set" class="set-item">
				<td class="item-key">{{item.key}}</td>
				<td class="item-value">{{item.value}}</td>
			</tr>
		</table>
		
	</div>
</template>

<script>
	export default{
		name:'DetailParams',
		props:{
			paramsInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.detail-params{
		padding-bottom: 20px;
		border-bottom: 8px solid #eee;
	}
	.params-tables{
		padding:8px;
		width:100%;
	}
	.params-tr{
		display: flex;
		justify-content:space-around;
	}
	.params-td{
		flex:1;
		font-size:14px;
		height:40px;
		line-height: 40px;
		text-align: center;
		border-bottom: 1px solid  rgba(100,100,100,.1);
		
	}
	.params-set{
			padding:8px;
	}
	.set-item{
		height:40px;
		font-size:14px;
	
	}
	.item-key{
		width:30%;
		border-bottom: 1px solid  rgba(100,100,100,.1);
	}
	.item-value{
		width:70%;
		color:var(--color-high-text);
		border-bottom: 1px solid  rgba(100,100,100,.1);
	}
</style>