/**
 * 对使用ajaxSubmit提交的表单中添加encrypt=true的表单域进行加密, 重写ajaxSubmit方法
 * @author 	alex(ske@163.com)
 * @date    二○一六年九月二十八日
 * @version 1.0
 * 使用方式: 对要加密的表单域标签中添加encrypt=true,通过ajaxSubmit提交表单时自动会对该域加密
 */
$.fn.ajaxSubmit = function() {
	var f = $.fn.ajaxSubmit;
	
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(f.publicKey);
	
	return function(opt) {
		var form = this;
		var beforeSubmit = opt.beforeSubmit;
		opt.beforeSubmit = function(fields) { 
			var result = beforeSubmit && beforeSubmit.apply(this, arguments);
			
			fields.forEach(function(fieldObj, i) {
				if(!!form[0][fieldObj.name].getAttribute('encrypt') == true) { 
					fieldObj.value = encrypt.encrypt(fieldObj.value);
				}
			});
			
			return result;
		};
		return f.apply(this, arguments);
	};
}();
