<template>
	<view 
		ref="editor" 
		class="divEditable" 
		:contenteditable="flag"
		@input="inputText" 
		@blur="inputBlur" 
		@focus="inputFocus"
	>
	</view>
</template>

<script>
	export default {
		name: 'divEditable',
		props: ['value'],
		data() {
			return {
				isBlur: true, // 解决赋值时光标自动定位到起始位置
				flag: false
			}
		},
		watch: {
		    value(val) {
				
				if (this.isBlur) {
					this.$refs.editor.$el.innerHTML = val;
				}
		    }
		},
		methods: {
			// 监听输入框内容
			inputText() {
				this.$emit('input', this.$refs.editor.$el.innerHTML);
			},
			inputFocus() {
				this.isBlur = false;
			},
			inputBlur() {
				this.isBlur = true;
			},
			clearDivEditor () {
				const _div = this.$refs.editor.$el
				console.log(_div.childNodes);
				Array.from(_div.childNodes).forEach(item => {
					_div.removeChild(item)
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.divEditable {
		border-radius: 15px;
		background-color: #ffffff;
		padding: 5px 10px;
		flex: 1;
		margin-right: 10px;
		outline: none;
	}
</style>
