<template>
	<view class="my">
		<view class="my-background">
			<image src="../../static/my-background3.jpeg"></image>
		</view>
		<view class="container">
			<image class="my-avatar" src="../../static/avatar.jpg" mode="widthFix"></image>
			<text class="nickname">你没有打火机</text>
		</view>
		<view class="more">
			<view class="more-item">
				<label for="">👶</label>
				<view class="value">
					<text>男</text>
					<text>18岁</text>
					<text>双鱼座</text>
				</view>
				<view class="right-arrow"> > </view>
			</view>
			<view class="more-item">
				<label for="">🖋</label>
				<view class="value text-overflow">
					原谅我这一生不羁放纵爱自由。asdasdsaddddaaaaaaaaaa
				</view>
				<view class="right-arrow"> > </view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
	.my {
		background-color: $theme-bg-color;
		height: 100vh;
		overflow: hidden;

		.my-background {
			position: fixed;
			overflow: hidden;

			image {
				width: 750rpx;
				height: 100vh;
				object-fit: cover;
			}
		}

		.container {
			position: relative;
			z-index: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 34vh auto 0;
			color: #ffffff;

			.my-avatar {
				box-sizing: border-box;
				width: 100px;
				height: 100px;
				object-fit: cover;
				border-radius: 50%;
				border: 10px solid rgba(255, 255, 255, 0.8);
				box-shadow: 0 0 10px #ccc;
				margin-bottom: 10px;
			}
		}

		.more {
			position: relative;
			z-index: 1;
			padding: 30px 40px 30px 20px;
			background: rgba(172,197,199, 0.5);
			margin: 0 20px;
			border-radius: 16px;
			color: #ffffff;
			margin-top: 10px;
			.more-item {
				display: flex;
				margin-bottom: 20px;
				&:last-of-type {
					margin-bottom: 0;
				}
				.value {
					margin-left: 10px;
					flex: 1;
					text {
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
