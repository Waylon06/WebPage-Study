window.addEventListener('load', function () {
    // Ajax连接接口
    var btn = document.querySelector('.btn');
    var un = document.querySelector('#username');
    var psw = document.querySelector('#password');
    var checked = this.document.querySelector('.ck');
    var eye = this.document.querySelector('#eye');

    btn.addEventListener('click', function () {
        if (checked.checked === true) {
            // console.log(checked.checked);
            const connect = new XMLHttpRequest();

            connect.open('post', 'http://43.138.138.11:1110/api/users/login');
            connect.setRequestHeader('Content-Type', 'application/json');
            const PARAMS = {
                username: un.value,
                password: psw.value
            }
            
            console.log(PARAMS.username);
            console.log(PARAMS.password);
            // JSON.stringify 就是把对象的类型转换为字符串类型 后台只能接受JSON字符串类型的数据
            connect.send(JSON.stringify(PARAMS));

            connect.onreadystatechange = function () {
                if (connect.readyState === 4 && connect.status === 200) {
                    const resp = JSON.parse(connect.responseText)
                    if (resp.code === 200) {
                        console.log(resp.data);
                        // 将用户数据存入浏览器,在后续购物车和页面显示用户名中需使用
                        sessionStorage.setItem('uinfo', JSON.stringify(resp.data));
                        console.log(JSON.parse(connect.responseText));
                        window.location.href = "../index.html";
                    } else {
                        alert(resp.msg);
                    }
                } else {
                    // 打印到后台
                    console.log("请求失败:" + connect.status);
                }
            }
        } else {
            // console.log(checked.checked);
            // 弹出警示框
            alert("请先同意用户协议");
        }
    });

    // 密码隐藏显示
    var flag = 1;
    eye.onclick = function () {
        flag = !flag;
        if (flag == 0) {
            // 修改type的类型 text型能显示 password型能隐藏
            psw.type = 'text';
            eye.src = '../Images/open.png';
        } else {
            psw.type = 'password';
            eye.src = '../Images/close.png';
        }
    }

})
