登录：
1. 前端发一个 `post` 请求给`/api/login` ，data格式为json, 包括 `{'phone':'xx', 'password':'xx', 'cbname':'xx'}`, 
2. `phone` 为11位数的 `'string'`
3. `password` 格式为(字母,数字,符号`'-', '_', '.' `的组合或纯字母/数字，区分大小写，不需要后端判断是否符合要求）`password` 明文传输。
4. `cbname` 为一个随机的'回调函数名'，后端返回的json，包裹在`cbname`方法内，详见百度 jsonp （解决跨域
5. 查询数据库，如果密码正确，返回 `cbname({status='success', token='xxxx', nickname='用户昵称', userid='12345'； phone='11'})`
6. 如果手机号未找到，返回 `status='wname'`
7. 如果密码错误, 返回 `status='wpswd'`

注册：
1. 前端第一次发post请求给`/api/regist` ，data格式为json，包括 `{'phone':'xx', 'cbname':'xx}' `        --第一次post验证手机号
2. `password` 格式为(字母,数字,符号'-', '_', '.' 的组合或纯字母/数字，区分大小写，不需要后端判断是否符合要求）
3. `nickname`同上并包括汉字及中文字符
4. `cbname`为一个随机的'回调函数名'，后端返回的json，包裹在`cbname`方法内，详见百度 jsonp （解决跨域
5. `phone` 为11位数的 `'string'`
6. 查询数据库检查手机号
7. 如果手机号重复，返回`status='wphone'`
8. 如果手机号不重复，发送给`'phone'`一个验证码短信，并返回`cbname({status='sms_success'，msg='验证码'}) `
9. 前端确认验证码相符后，第二次发post请求给`/api/regist_confirm`,                    --第二次post写入数据库
    data格式为json，包括 `{'phone':'xx', 'nickname':'xx', 'phone':'xx', 'cbname':'xx'}`，写入数据库
10.（第二次不需要返回token，注册成功用户自行登陆获取

