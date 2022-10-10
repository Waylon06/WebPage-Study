<template>
  <div class="register">
    <!-- logo部分 -->
    <div class="logo">
      <img src="../Upload/logo+word.png" alt="" />
    </div>
    <div class="detils"><span>欢迎使用慧游园</span></div>

    <!-- 注册部分 -->
    <div class="login-table">
      <div class="user">
        <input type="text" placeholder="账号" id="username" />
      </div>
      <div class="psw">
        <input type="password" placeholder="密码" id="password" />
      </div>
    </div>
    <div class="more">
      <span> 已有账号？<a href="login.html">登录</a> </span>
    </div>
    <div class="register">
      <button class="btn">注 册</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
    display: flex;
    margin-top: 50px;
    height: 100px;
    justify-content: center;
    flex-wrap: wrap;
}

.logo img {
    height: 100%;
}

.detils {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 50px;
}
.detils span {
    font-size: 14px;
}

.login-table {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.user {
    height: 30px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    background-color: #ebebeb;
    border-radius: 6px;
}

.user input {
    height: 25px;
    width: 220px;
    background-color: #ebebeb;
    border: none;
}

.user::before {
    font-family: 'icomoon';
    content: '\e971';
    color: #60b363;
}

.psw {
    height: 30px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    background-color: #ebebeb;
    border-radius: 6px;
}

.psw input {
    height: 25px;
    width: 220px;
    background-color: #ebebeb;
    border: none;
}

.psw::before {
    font-family: 'icomoon';
    content: '\e98f';
    color: #60b363;
}

.more {
    display: flex;
    justify-content: center;
}

.more span {
    width: 250px;
    display: flex;
    justify-content: right;
    font-size: 10px;
}

.more span a {
    font-size: 10px;
    color: #62789e;
}

.register {
    height: 60px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.register .btn {
    height: 50px;
    width: 250px;
    border-radius: 60px;
    color: aliceblue;
    background-color: #60b363;
    font-size: 16px;
    border: none;
}
</style>