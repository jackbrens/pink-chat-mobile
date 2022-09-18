<template>
	<view class="chatDetail">
		<view ref="container" @touchmove="hideKeyboard" class="container">
			<view class="chat">
				<image class="chat-avatar" src="../../static/avatar.jpg" alt="" />
				<view class="chat-container">super爱豆的笑容都没你的甜~~~~</view>
			</view>
			<view class="chat">
				<image class="chat-avatar" src="../../static/avatar.jpg" alt="" />
				<view class="chat-container">super爱豆的笑容都没你的甜~~~~</view>
			</view>
			<view class="chat">
				<image class="chat-avatar" src="../../static/avatar.jpg" alt="" />
				<view class="chat-container">对对对，讲的都对对对对，讲的都对对对对。</view>
			</view>
			<view class="chat my-chat">
				<image class="chat-avatar" src="../../static/avatar.jpg" alt="" />
				<view class="chat-container">super爱豆的笑容都没你的甜</view>
			</view>
			<view class="chat">
				<image class="chat-avatar" src="../../static/avatar.jpg" alt="" />
				<view class="chat-container">super爱豆的笑容都没你的甜~~~~</view>
			</view>
			<view class="chat">
				<image class="chat-avatar" src="../../static/avatar.jpg" alt="" />
				<view class="chat-container">super爱豆的笑容都没你的甜~~~~</view>
			</view>
			<view class="chat my-chat">
				<image class="chat-avatar" src="../../static/avatar.jpg" alt="" />
				<view class="chat-container">super爱豆的笑容都没你的甜</view>
			</view>
			<view class="chat">
				<image class="chat-avatar" src="../../static/avatar.jpg" alt="" />
				<view class="chat-container">super爱豆的笑容都没你的甜~~~~</view>
			</view>
			<view class="chat my-chat">
				<image class="chat-avatar" src="../../static/avatar.jpg" alt="" />
				<view class="chat-container">super爱豆的笑容都没你的甜</view>
			</view>
			<view class="chat my-chat">
				<image class="chat-avatar" src="../../static/avatar.jpg" alt="" />
				<view class="chat-container">super爱豆的笑容都没你的甜</view>
			</view>
			<view class="chat my-chat">
				<image class="chat-avatar" src="../../static/avatar.jpg" alt="" />
				<view class="chat-container">super爱豆的笑容都没你的甜</view>
			</view>
		</view>
		<view class="work">
			<view class="input">
				<input value="今天是个伟大日子" placeholder="" />
			</view>
			<view class="button">
				<image src="../../static/icon/send.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			hideKeyboard(e) {
				uni.hideKeyboard()
			},

			// 获取元素高度
			getHight() {
				const query = uni.createSelectorQuery().in(this)
				query.select('.work').boundingClientRect()
				query.exec(res => {
					console.log(res[0].height) // 元素高度
					return res[0].height
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chatDetail {
		.container {
			background-image: linear-gradient(to bottom, #f3dcd0, #eac6e1, #dbdae0);
			flex: 1;
			padding: 20px;
			padding-bottom: 80px;
			.chat {
				display: flex;
				margin-bottom: 30px;

				&.my-chat {
					flex-direction: row-reverse;
				}

				&.my-chat .chat-avatar {
					margin-right: 0;
					margin-left: 10px;
				}

				&.my-chat .chat-container {
					border-radius: 15px;
					border-top-right-radius: 0;
					color: #ffffff;
					background-image: linear-gradient(to right, $uni-mychat-bg-color1, $uni-mychat-bg-color2);
				}

				.chat-avatar {
					flex-shrink: 0;
					width: 40px;
					height: 40px;
					border-radius: 50%;
					margin-right: 10px;
				}

				.chat-container {
					max-width: 76%;
					box-sizing: border-box;
					color: #666666;
					padding: 10px;
					background-color: #ffffff;
					margin-top: 10px;
					border-radius: 8px;
					border-top-left-radius: 0;
				}
			}
		}

		.work {
			position: fixed;
			bottom: 0;
			width: 100%;
			padding: 20px;
			box-sizing: border-box;
			background-color: $uni-actice-color;
			display: flex;

			.input {
				border-radius: 15px;
				background-color: #ffffff;
				padding: 5px 10px;
				flex: 1;
				margin-right: 10px;
			}

			.button {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background-image: linear-gradient(to right, $uni-mychat-bg-color1, $uni-mychat-bg-color2);

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
