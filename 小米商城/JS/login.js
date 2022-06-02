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
            connect.send(JSON.stringify(PARAMS));

            connect.onreadystatechange = function () {
                if (connect.readyState === 4 && connect.status === 200) {
                    const resp = JSON.parse(connect.responseText)
                    if (resp.code === 200) {
                        console.log(resp.data);
                        sessionStorage.setItem('uinfo', JSON.stringify(resp.data));
                        console.log(JSON.parse(connect.responseText));
                        window.location.href = "../index.html";
                    } else {
                        alert(resp.msg);
                    }
                } else {
                    console.log("请求失败:" + connect.status);
                }
            }
        } else {
            // console.log(checked.checked);
            alert("请先同意用户协议");
        }
    });

    // 密码隐藏显示
    var flag = 1;
    eye.onclick = function () {
        flag = !flag;
        if (flag == 0) {
            psw.type = 'text';
            eye.src = '../Images/open.png';
        } else {
            psw.type = 'password';
            eye.src = '../Images/close.png';
        }
    }

})
