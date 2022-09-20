<template>
	<view class="chatDetail">
		<view ref="container" @click="hideKeyboard" @touchmove="hideKeyboard" class="container">
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
			<div-editable ref="editable" v-model="inputValue"></div-editable>
			<view class="button" @touchend.prevent="handleSend">
				<image src="../../static/icon/send.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import DivEditable from '@/components/divEditable.vue'
	export default {
		components: {
			DivEditable
		},
		data() {
			return {
				inputValue: '',
				user: {}
			}
		},
		onLoad(data) {
			this.user = JSON.parse(data.content)
		},
		mounted() {
			uni.setNavigationBarTitle({
				title: this.user.name
			})
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
			},

			handleInput(e) {
				console.log(e.target.value)
			},

			// 点击发送按钮
			handleSend(e) {
				const dom = document.querySelector('.my-chat').cloneNode(true)
				dom.childNodes[1].innerHTML = this.inputValue
				this.$refs.container.$el.appendChild(dom)
				this.inputValue = ''
				this.$refs.editable.clearDivEditor()
				window.scrollTo(0, this.$refs.container.$el.clientHeight)
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
			background-color: rgba(255, 255, 255, 0.8);
			backdrop-filter: blur(20px);
			display: flex;

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
