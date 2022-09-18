<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	
	@import 'static/style/mixin.scss';
	
	// 文本溢出 scss 变量混合
	.text-overflow {
		@include text-overflow(1);
	}
</style>
