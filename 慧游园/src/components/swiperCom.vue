<template>
	<div class="swiper" @mouseover="overHd" @mouseout="auto">
		<div class="swiper-item" v-for="(item,ind) in gallery" :key="item" v-show="ind==index">
			<img :src="item" width="100%">
		</div>
 
		<div class="thumbs">
			<span class="thumb" :class="{'active' :item==index+1}" v-for="item in 4" :key='item'
				@click="index=item-1">{{item}}</span>
		</div>
	</div>
</template>
 
<script>
	export default {
		props: {
			gallery: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				//默认显示 
				index: 0,
				stopID: null,
			}
		},
		// 当组件挂载完毕 执行自动播放
		created() {
			this.auto();
		},
 
		methods: {
 
			//鼠标一开  auto自动执行
			auto() {
 
				this.stopID = setInterval(() => {
					this.index++;
					this.check();
				}, 1000)
			},
			overHd() {
				clearInterval(this.stopID);
 
			},
			//检查边界
			check() {
				if (this.index == this.gallery.length) {
					this.index = 0;
				}
			}
		}
	}
</script>
 
<style scoped="scoped">
	.swiper {
		position: relative;
	}
 
	.swiper .thumbs {
		position: absolute;
		bottom: 10px;
		width: 10px;
		text-align: center;
	}
 
	/* .thumb {
		width: 10px;
		height: 10px;
		display: inline-block;
		border-radius: 15px;
		text-indent: 9999em;
		margin: 0 5px;
		background-color: #fff;
	} */
 
	.thumb:hover {
		cursor: pointer;
		background-color: rgb(248, 247, 246);
 
	}
 
	.active {
		background-color: rgb(224, 221, 217);
 
	}
</style>