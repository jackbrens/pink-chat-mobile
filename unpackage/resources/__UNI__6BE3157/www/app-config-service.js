
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/chat/chat","pages/contacts/contacts","pages/my/my","pages/chat/chatDetail"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F6F6F6","backgroundColor":"#F6F6F6"},"tabBar":{"color":"#000","selectedColor":"#128ba6","fontSize":"12","borderStyle":"white","backgroundColor":"#ffffff","list":[{"pagePath":"pages/chat/chat","iconPath":"static/icon/message.png","selectedIconPath":"static/icon/message-active.png","text":"聊天"},{"pagePath":"pages/contacts/contacts","iconPath":"static/icon/conacts.png","selectedIconPath":"static/icon/conacts-active.png","text":"联系人"},{"pagePath":"pages/my/my","iconPath":"static/icon/my.png","selectedIconPath":"static/icon/my-active.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"pink-chat-mobile","compilerVersion":"3.6.3","entryPagePath":"pages/chat/chat","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/chat/chat","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"聊天"}},{"path":"/pages/contacts/contacts","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"联系人"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/chat/chatDetail","meta":{},"window":{"navigationBarBackgroundColor":"#FBE6E1","navigationBarTitleText":"聊天详情"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
