<template>
	<!--
	<inputSearch :dataSource="dataSource" @select="handleChange" placeholder="请输入商品名称" />
	//数据源
	dataSource: [{
			id: 1,
			name: '耐克1'
		},
		{
			id: 2,
			name: '耐克2'
		}
	],
	 
	 //用户点击获取的数据
	 handleChange(data) {
	 	console.log(data)
	 }
	 
	 -->
	<view class="input-group">
		<input :placeholder="placeholder" @input="search"  v-model="name" @focus='focus' @blur='hideList' />
		<view class="ul">
			<view class="li" v-for="(item,index) in list" :key="index" @tap="select(item)">{{item.code}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: String, //默认提示
			searchKey: String, //模糊搜索的key值
			dataSource: {
				type: Array,
				default: function() { //数据源
					return [];
				}
			}
		},
		data() {
			return {
				list: [],
				name: '',
				backName: ''
			};
		},
		destroyed() {
			clearTimeout(this.t);
		},
	
		methods: {
			focus(){
				this.list=this.dataSource
			},
			search(e) {
				let val = e.detail.value;
				let {
					dataSource
				} = this;
				let arr = [];
				for (let i = 0; i < dataSource.length; i++) {
					if (dataSource[i].code.indexOf(val) !== -1) {
						arr.push(dataSource[i]);
					}
				}
				// console.log(arr)
				if (!val) {
					this.list = [];
				} else {
					this.list = arr;
				}

			},
			select(item) {
				this.backName = item.code;
				console.log(this.backName)
				
				this.hideList()
			},
			hideList() {
				console.log("QQQQQQQQQQQQQQQQ")
				this.name = this.backName;
			
				setTimeout(() => {
						this.list=[]
				}, 0);
			}
		}
	}
</script>


<style lang="scss">
	.input-group {
		position: relative;
		input {
			padding-left: 10upx;
				
		font-size: 18upx;
			box-sizing: border-box;
		}

		.ul {
			position: absolute;
			left: 0;
			top: 100%;
			z-index: 999;
			width: 100%;
			background: #fff;

			.li {
				border-bottom: 1upx solid gray;
				line-height: 60upx;
			}
		}
	}
</style>
