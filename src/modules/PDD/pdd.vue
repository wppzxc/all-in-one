<template>
    <div>
        <div class="user-photo">
            <el-tooltip :content="loginTip" placement="top" effect="light">
                <el-button :type="loginType" icon="el-icon-user" circle v-on:click="login"></el-button>
            </el-tooltip>
        </div>
        <h1>拼多多</h1>
        <el-dialog :visible.sync="dialogVisible" width="30%">
            <iframe id="pdd-frame" src="http://mobile.yangkeduo.com/login.html" width="300" height="250"></iframe>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                logined: false,
                dialogVisible: false,
                key: ""
            }
        },
        computed: {
            loginType: function () {
                let that = this;
                if (that.logined === true) {
                    return 'success'
                } else {
                    return 'info'
                }
            },
            loginTip: function () {
                let that = this;
                if (that.logined === true) {
                    return '点击退出登录'
                } else {
                    return '点击登录拼多多'
                }
            }
        },
        mounted: function () {
            let that = this;
            nw.Window.get().cookies.get({
                name: 'PDDAccessToken',
                url: 'http://mobile.yangkeduo.com'
            }, function (cookie) {
                if (cookie.value.length > 0) {
                    that.key = cookie.value;
                    that.logined = true;
                }
            })
        },
        methods: {
            login: function () {
                let that = this;
                // 退出登录
                if (that.logined === true) {
                    nw.Window.get().cookies.set({
                        name: 'PDDAccessToken',
                        url: 'http://mobile.yangkeduo.com',
                        value: ''
                    }, function (cookie) {
                        if (cookie != null) {
                            console.log("退出登录成功！");
                            that.$message({
                                message: "退出登录成功！",
                                type: 'success'
                            });
                            that.logined = false;
                            that.key = '';
                        }
                    })
                    // 登录
                } else {
                    that.dialogVisible = true;
                    that.getCookie()
                }
            },
            getCookie: function () {
                let that = this;
                let win = nw.Window.get();
                let loginWin;
                win.cookies.onChanged.addListener(function (change) {
                    if (change.cookie.name === 'PDDAccessToken' && change.cookie.value.length > 0) {
                        that.key = change.cookie.value;
                        that.logined = true;
                        that.dialogVisible = false;
                        console.log("登录成功！");
                        that.$message({
                            message: "登录成功！",
                            type: "success"
                        });
                        console.log('get verifytoken : ');
                        console.log(localStorage.getItem('VerifyAuthToken'));
                    }
                });
            }
        }
    }
</script>
<style>
    .user-photo {
        position: absolute;
        z-index: 999;
        bottom: 0;
        right: 50px;
    }
</style>