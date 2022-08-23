window.addEventListener('load', function () {
    var btn = document.querySelector('.btn');
    var ipt = document.querySelector('.table-main .number input');
    var checked = document.querySelector('.table-main .ck');
    btn.addEventListener('click', function () {
        if (checked.checked === true) {
            // console.log(checked.checked);
            const xhr = new XMLHttpRequest();

            xhr.open('post', 'http://43.138.138.11:1110/api/users/register');
            xhr.setRequestHeader('Content-Type', 'application/json');
            const PARAMS = {
                username: 'rty',
                password: 123456,
                phone: ipt.value
            }
            console.log(PARAMS.username);
            console.log(PARAMS.password);
            console.log(PARAMS.phone);
            xhr.send(JSON.stringify(PARAMS));

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        const resp = JSON.parse(xhr.responseText)
                        if (resp.code === 200) {
                            console.log(resp.data);
                            console.log(JSON.parse(xhr.responseText));
                            window.location.href = "../index.html";
                        } else {
                            alert(resp.msg);
                        }
                    } else {
                        console.log("请求失败:" + xhr.status);
                    }
                }
            }
        } else {
            // console.log(checked.checked);
            alert("请先同意用户协议");
        }
    })
})