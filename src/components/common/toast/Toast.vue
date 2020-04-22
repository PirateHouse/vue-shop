<template>
	<div class="toast " v-show="isShowToast">
		<div>{{message}}</div>
	</div>
</template>

<script>
	export default{
		name:'Toast',
		data(){ 
			return{
				message:'',
				isShowToast:false
			}
		},
		methods:{
			show(message,delay){
				this.message=message
				this.isShowToast=true
				setTimeout(()=>{
					this.message=''
					this.isShowToast=false
				},delay)
			}
		}
	
	}
</script>

<style scoped>
	.toast{
		position:fixed;
		left:50%;
		top:50%;
		transform: translate(-50%,-50%);
		z-index:999;
		background-color:rgba(0,0,0,.75);
		color:#FFFFFF;
		padding:8px 10px;
	}
</style>