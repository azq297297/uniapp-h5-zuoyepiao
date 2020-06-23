<template>
	<view>
		<checkbox-group @change="allChoose">
			<label style="margin-left: 5upx;">
				<checkbox value="all" :class="{'checked':allChecked}" :checked="allChecked?true:false"></checkbox> 全选
			</label>
		</checkbox-group>
		<checkbox-group class="block" @change="changeCheckbox">
			<view :class="{diflex:checheboxFlex}" >
			<view v-for="item in checkboxData" :key="item.value" style="margin: 5upx;">
				<checkbox :value="String(item.value)" :checked="checkedArr.includes(String(item.value))" :class="{'checked':checkedArr.includes(String(item.value))}"></checkbox>
				<text>{{item.title}}</text>
			</view>
			</view>
		</checkbox-group>
	</view>
</template>

<script>
	export default {
		props:{
			//选择列表
			data: {
				type: Array,
				default () {
					return []
				}
			},
			//是否换行
			checheboxFlex:{
				type:Boolean,
				default () {
					return false
				}
			}
		},
		watch: {
			data(val) {
				this.checkboxData = val;
			},
			checheboxFlex(val){
				this.checheboxFlexType = val;
			}
		},
		data() {
			return {
				spotInspectionListArr: [],
				checkedArr: [],
				checkboxData: [],
				allChecked: false,
				checheboxFlexType:false
			};
		},
		methods: {
			allChoose(e) {
				let chooseItem = e.detail.value;
				// 全选
				if (chooseItem[0] == 'all') {
					this.allChecked = true;
					for (let item of this.checkboxData) {
						let itemVal = String(item.value);
						if (!this.checkedArr.includes(itemVal)) {
							this.checkedArr.push(itemVal);
						}
					}
				} else {
					// 取消全选
					this.allChecked = false;
					this.checkedArr = [];
				}
				this.$emit('change',this.checkedArr)

			},
				// 多选复选框改变事件
						changeCheckbox(e){
							this.checkedArr = e.detail.value;
							// 如果选择的数组中有值，并且长度等于列表的长度，就是全选
							if(this.checkedArr.length>0 && this.checkedArr.length==this.checkboxData.length){
								this.allChecked=true;
							}else{
								this.allChecked=false;
							}
							this.$emit('change',this.checkedArr)
						},
	
		}
	}
</script>

<style>
.diflex{
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}
</style>
