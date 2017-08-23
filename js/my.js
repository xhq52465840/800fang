
var regs = {
		userNameReg: /^(([\u4e00-\u9fa5])|[a-zA-Z0-9-_]){4,20}$/,
		pwdReg:/.{6,20}/,
		numReg:/\d/,
		strReg:/[a-zA-Z]/,
		tsReg:/[^u4e00-\u9fa5a-zA-Z0-9]/,
		emailReg:/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
		mobileReg: /^0?(13[0-9]|15[012356789]|18[0-9]|17[0-9])[0-9]{8}$/,
	}
window.onload=function(){
	var pwd = $(".password");
	var mobile = $(".mobile");
	var ck = $(".submit-btn");
	mobile.onfocus = mobile.onblur = mobile.onkeyup=function(e){
		var e = e||window.event;
		checkMobile(e);
	}
	function checkMobile(e){
		var type;
		if (e) {
			type = e.type;
		}
		var value = mobile.value;
		var box = mobile.parentNode;
		var tip = box.nextElementSibling;
		var span = tip.lastElementChild;
		if (type == "focus") {
			if (value=="") {
				box.className = "box";
				tip.className = "tip default";
				span.innerHTML = "请输入手机号码";
				return false;
			}
		}
		if(type == "blur"){
			if (value=="") {
				box.className = "box";
				tip.className = "tip hide";
				return false;
			}
		}
		if (regs.mobileReg.test(value)) {
			box.className = "box right";
			tip.className = "tip hide";
			return true;
		}else if (value=="") {
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "手机号码不能为空";
			return false;
		}else{
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "手机号码填写不正确";
			return false;
		}
	}
pwd.onfocus=pwd.onblur=pwd.onkeyup=function(evt){
		var e = evt||window.event;
		checkPassword(e)
	}
	function checkPassword(e){
		var type;
		if (e) {
			type = e.type;
		}
		var value = pwd.value;
		var box = pwd.parentNode;
		var tip = box.nextElementSibling;
		var span = tip.lastElementChild;
		if (type == "focus") {
			if (value == "") {
				box.className = "box";
				tip.className = "tip default";
				span.innerHTML = "任意字符的6到20位";
				return false;
			}
		}
		if(type == "blur"){
			if (value=="") {
				box.className = "box";
				tip.className = "tip hide";
				return false;
			}
		}
		if (value=="") {
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "密码不能为空";
			return false;
		}else if(regs.pwdReg.test(value)){
			box.className = "box right";
			span.innerHTML = "密码强度";
			var level = getPwdlevel(value);
			switch (level){
				case 1:
					tip.className = "tip ruo";
					break;
				case 2:
					tip.className = "tip zhong";
					break;
				case 3:
					tip.className = "tip qiang";
					break;
			}
			return true;
			
		}else{
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "格式错误，密码应该为6到20位的任意字符";
			return false;
		}
	}
	$("btn").onclick=function(){
		ck.onclick = function(){
		var box = ck.parentNode;
		var tip = box.nextElementSibling;
		var span = tip.lastElementChild;
		if(ck.checked) {
			tip.className = "tip hide";
		}
		}
		var box = ck.parentNode;
		var tip = box.nextElementSibling;
		var span = tip.lastElementChild;
		if(ck.checked){
			if(checkUserName()&&checkPassword()&&compainPwd()&&checkEmail()&&checkMobile()){
				location.href = "index1.html";
			}
			else{
				return false;
			}
		}else {
			tip.className = "tip error";
			span.innerHTML = "请同意协议";
			return false;
	  }
		}
	}
