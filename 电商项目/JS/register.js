window.addEventListener('load', function () {
    var un = document.querySelector('#username');
    var psw = document.querySelector('#password');
    var btn = document.querySelector('.btn');
    var url = 'http://8080:'
    btn.addEventListener('click', function () {
        const xhr = new XMLHttpRequest();
        xhr.open('post', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        const PARAMS = {
            username: un.value,
            password: psw.value
        }
        console.log(PARAMS.username);
        console.log(PARAMS.password);
        xhr.send(JSON.stringify(PARAMS));
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const resp = JSON.parse(connect.responseText);
                    if (resp.code === 200) {
                        console.log(resp.data);
                    }
                }
            }
        }
    })
})