window.addEventListener('load', function () {
    // Ajax连接接口
    var btn = document.querySelector('.btn');
    var un = document.querySelector('#username');
    var psw = document.querySelector('#password');
    btn.addEventListener('click', function () {
        const connect = new XMLHttpRequest();
        connect.onreadystatechange = function () {
            if (connect.readyState === 4 && connect.status === 200) {
                // console.log(connect.response.data);
                console.log(JSON.parse(connect.responseText));
                window.location.href = "../index.html";
            } else {
                console.log("请求失败:" + connect.status);
            }
        }
        connect.open('post', 'http://43.138.138.11:1110/api/users/login');
        connect.setRequestHeader('Content-Type', 'application/json');
        const PARAMS = {
            username: un.value,
            password: psw.value
        }
        console.log(PARAMS.username);
        console.log(PARAMS.password);
        connect.send(JSON.stringify(PARAMS));
    });
    
})
