<template>
  <div class="login">
        <div class="information">
            <img class="logo" src="../Upload/logo+word.png" alt="">
        </div>
        <div style="color: rgb(70,70,70);">欢迎使用慧游园</div>
        <form id="loginForm" action="" class="">
            <div class="carName">
                <span class="ionic_use">
                    <i class="iconfont icon-yonghuming"></i>
                    <input id="username" type="text" class="usernames" placeholder="用户名"
                        style=" background-color: rgb(235,235,235);">
                </span>
            </div>
            <div class="carPassword">
                <span class="ionic_pass">
                    <i class="iconfont icon-mima"></i>
                    <input id="password" type="password" class="passwords" placeholder="密码"
                        style=" background-color: rgb(235,235,235);">
                </span>
            </div>
            <a class="register" href="register.html">新商家注册</a>
            <div>
                <input id="submit" type="button" value="登  录" />
            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>