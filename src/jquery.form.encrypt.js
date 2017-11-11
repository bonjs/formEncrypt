/**
 * 对使用ajaxSubmit提交的表单中添加encrypt=true的表单域进行加密, 重写ajaxSubmit方法
 * @author 	alex(ske@163.com)
 * @date    二○一六年九月二十八日
 * @version 1.0
 * 使用方式: 对要加密的表单域标签中添加encrypt=true,通过ajaxSubmit提交表单时自动会对该域加密
 */
$.fn.ajaxSubmit = function() {
	var originalAjaxSubmit = $.fn.ajaxSubmit;
	
	var FD_f1342fFDFdsaf = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDkAh06uqqrA8qIsyd98/E1p4oL0GAzUiwNuPMwxINM86GmRnuYgvke+VNJHvgD3+znHqTi9Ek1O2A0ZhbosOZpCwAdrh+I77Ws14u2UJWz4cBNnZBnS5hX/kWeUizGkPbW2AKR7bXK3W71l7U7VN/+1ohd0kuFLbnjTCbp8nTJUQIDAQAB';
	var encrypt = new JSEncrypt();
	encrypt.setPublicKey(FD_f1342fFDFdsaf);
	
	return function(opt) {
		var form = this;
		var originalBeforeSubmit = opt.beforeSubmit || function() {};
		opt.beforeSubmit = function(fields) { 
			var result = originalBeforeSubmit.apply(this, arguments);
			
			fields.forEach(function(fieldObj, i) {
				if(!!form[0][fieldObj.name].getAttribute('encrypt') == true) { 
					fieldObj.value = encrypt.encrypt(fieldObj.value);
				}
			});
			
			return result;
		};
		originalAjaxSubmit.apply(this, arguments);
	};
}();
