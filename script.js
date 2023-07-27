// 获取按钮和二维码元素
var qqBtn = document.getElementById("qq-btn");
var wechatBtn = document.getElementById("wechat-btn");
var qqCode = document.getElementById("qq-code");
var wechatCode = document.getElementById("wechat-code");

// 点击QQ按钮显示QQ二维码
qqBtn.onclick = function() {
	qqCode.style.display = "block";
}

// 点击微信按钮显示微信二维码
wechatBtn.onclick = function() {
	wechatCode.style.display = "block";
}

// 点击二维码区域隐藏二维码
qqCode.onclick = function() {
	qqCode.style.display = "none";
}

wechatCode.onclick = function() {
	wechatCode.style.display = "none";
}