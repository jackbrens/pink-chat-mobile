<template>
	<view class="chat">
		<view class="chat-row" v-for="item in list" @click="handleToDetail(item.id)">
			<image class="chat-avatar" :src="item.img" mode="widthFix"></image>
			<view class="chat-container">
				<text>{{ item.name }}</text>
				<p>{{ item.desc }}</p>
			</view>
			<view class="notice">
				<text class="tips">{{ item.tips }}</text>
				<text class="time">{{ item.time }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			for (let i = 0; i < 15; i++) {
				this.list.push({
					id: i + 1,
					name: '聂先生',
					desc: '你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗',
					tips: '2',
					time: '12:52',
					img: '../../static/avatar.jpg',
				})
			}
		},
		methods: {
			handleToDetail(id) {
				console.log(id);
				uni.navigateTo({
					url: '/pages/chat/chatDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chat {
		background-color: $theme-bg-color;

		// height: 100vh;
		.chat-row {
			display: flex;
			padding: 20px;
			border-bottom: 1px solid $border-color; 
			&:active {
				background-color: $uni-actice-color;
			}
			&:last-of-type {
				border-bottom: 0;
			}

			.chat-avatar {
				border-radius: 50%;
				width: 50px;
				height: 50px;
				object-fit: cover;
			}

			.chat-container {
				flex: 1;
				margin-left: 20px;
				margin-right: 20px;
				font-size: 18px;
				p {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					line-clamp: 1;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					color: $desc-font-color;
					font-size: 14px;
				}
			}
			.notice {
				font-size: 12px;
				position: relative;
				width: 16px;
				.tips {
					border-radius: 50%;
					width: 16px;
					height: 16px;
					background-color: $tips-color;
					color: #ffffff;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.time {
					position: absolute;
					bottom: 5px;
					left: 50%;
					transform: translateX(-50%);
					color: $desc-font-color;
				}
			}
		}
	}
</style>
