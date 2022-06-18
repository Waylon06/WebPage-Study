window.addEventListener('load', function () {
    var btn = document.querySelector('.btn');
    var ipt = document.querySelector('.table-main .number input');
    var checked = document.querySelector('.table-main .ck');
    btn.addEventListener('click', function () {
        if (checked.checked === true) {
            // console.log(checked.checked);
            const connect = new XMLHttpRequest();

            connect.open('post', 'http://43.138.138.11:1110/api/users/register');
            connect.setRequestHeader('Content-Type', 'application/json');
            const PARAMS = {
                username: 'rty',
                password: 123456,
                phone: ipt.value
            }
            console.log(PARAMS.username);
            console.log(PARAMS.password);
            console.log(PARAMS.phone);
            connect.send(JSON.stringify(PARAMS));

            connect.onreadystatechange = function () {
                if (connect.readyState === 4) {
                    if (connect.status >= 200 && connect.status < 300) {
                        const resp = JSON.parse(connect.responseText)
                        if (resp.code === 200) {
                            console.log(resp.data);
                            console.log(JSON.parse(connect.responseText));
                            window.location.href = "../index.html";
                        } else {
                            alert(resp.msg);
                        }
                    } else {
                        console.log("请求失败:" + connect.status);
                    }
                }
            }
        } else {
            // console.log(checked.checked);
            alert("请先同意用户协议");
        }
    })
})