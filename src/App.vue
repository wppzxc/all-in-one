<template>
    <div id="app">
        <el-container>
            <el-aside width="200px" style="background-color: rgb(84, 92, 100)">
                <el-menu
                        router
                        unique-opened
                        default-active="1"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>拼多多</span>
                        </template>
                        <el-submenu index="1-1">
                            <template slot="title">
                                <i class="el-icon-set-up"></i>
                                <span>小工具</span>
                            </template>
                            <el-menu-item index="1-1-1" route="/PDDComments">评论采集</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-2">
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span>抓数据</span>
                            </template>
                            <el-menu-item index="1-2-1" route="/PDD">拼多多</el-menu-item>
                            <el-menu-item index="1-2-2" route="/duoduojinbao">多多进宝</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>淘宝系</span>
                        </template>
                        <el-submenu index="2-1">
                            <template slot="title">
                                <i class="el-icon-set-up"></i>
                                <span>小工具</span>
                            </template>
                            <el-menu-item index="2-1-1" disabled>评论采集</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-2">
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span>抓数据</span>
                            </template>
                            <el-menu-item index="2-2-1" route="/Dataoke">大淘客</el-menu-item>
                            <el-menu-item index="2-2-2" route="/Taokeyi">淘客易</el-menu-item>
                            <el-menu-item index="2-2-3" route="/Haodanku">好单库</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        methods: {
            startHacking() {
                this.$notify({
                    title: 'It works!',
                    type: 'success',
                    message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                    duration: 5000
                })
            }
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
        height: 100%;
    }
    html {
        height: 100%;
    }
    body {
        height: 100%;
        margin: 0;
    }
</style>
<style>
    .el-header, .el-footer {
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container {
        height: 100%;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .el-menu {
        border-right: 0;
    }
</style>
