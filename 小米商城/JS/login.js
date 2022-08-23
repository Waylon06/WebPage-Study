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
            const xhr = new XMLHttpRequest();

            xhr.open('post', 'http://43.138.138.11:1110/api/users/login');
            xhr.setRequestHeader('Content-Type', 'application/json');
            const PARAMS = {
                username: un.value,
                password: psw.value
            }
            
            console.log(PARAMS.username);
            console.log(PARAMS.password);
            // JSON.stringify 就是把对象的类型转换为字符串类型 后台只能接受JSON字符串类型的数据
            xhr.send(JSON.stringify(PARAMS));

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const resp = JSON.parse(xhr.responseText)
                    if (resp.code === 200) {
                        console.log(resp.data);
                        // 将用户数据存入浏览器,在后续购物车和页面显示用户名中需使用
                        sessionStorage.setItem('uinfo', JSON.stringify(resp.data));
                        console.log(JSON.parse(xhr.responseText));
                        window.location.href = "../index.html";
                    } else {
                        alert(resp.msg);
                    }
                } else {
                    // 打印到后台
                    console.log("请求失败:" + xhr.status);
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
