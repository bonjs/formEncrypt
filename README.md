# formEncrypt

jquery.form.js中是对原生form表单验证提交进行了封装的一个插件,使用起来非常的方便,但是我们经常有对密码域加密码的需求,而jquery.form.js并没实现这一功能,下面我们来对它进行扩展来实现这一功能.

### 启动
``` javascript
git clone https://github.com/bonjs/formEncrypt.git
node app
```

### 使用方式
#### 表单(在要加密码的表单域中添加encrypt=true)
```html
<form id=f>
	<input type="text" name="username" /><br>
	<input type="password" name="password" encrypt=true /><br>
	<button type="button">提交</button>
</form>
```

#### 调用
```javascript
$('button').click(function() {
	$('#f').ajaxSubmit({
		success: function() {
			console.log('ok');
		}
	})
})
```

通过ajaxSubmit提交表单时,添加了encrypt=true的字段发送的数据会自动进行加密

<img src="http://www.bonjs.com/image/formEncryp.png">
