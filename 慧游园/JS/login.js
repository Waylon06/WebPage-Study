window.addEventListener('load', function() {
    function confirm() {
        var username = $('#username').val();
        var password = $('#password').val();
        // var jsonData = {"userName":userName,"passWord":passWord};//.net后台处理的数据
        console.log('hhhhhhhhh');
        console.log($('#username').val());
        if (userName == "" || passWord == "") {
            layer.msg('账号密码均不能为空！', { icon: 5 });
        } else {
            $.ajax({
                url: '',
                type: 'post',
                data: {
                    "username": username,
                    "password": passWord,
                },
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    if (data.code == 200) {
                        alert('登录成功')
                        // var info = data.ErrorInfo;
                        // var userId = data.UserId;
                        // var useName = data.UserName;
                        // var deptId = data.DeptId;
                        // var deptName = data.DeptName;
                        // var isAudio = data.IsAudio;
                        // var admin = data.Admin;
                        // var guid = data.GUID;
                        localStorage.setItem("userName", userName);
                        localStorage.setItem("passWord", passWord);
                        localStorage.setItem("guid", guid);
                        localStorage.setItem("userId", userId);
                        window.location.href = './home.html';
                    } else {
                        layer.msg('用户名或账号输入错误！', { icon: 5 });
                    }
                }
            })
        }
    }
    $('#submit').click(function () {
        confirm();
        return false;
    })
})