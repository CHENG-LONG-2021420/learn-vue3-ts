<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form" v-model="loginForm">
          <h1>HELLO</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="userName">
            <el-input v-model='loginForm.userName' :prefix-icon="User" placeholder="Please input username" clearable ></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input v-model='loginForm.passWord' :prefix-icon="Lock" type="password" placeholder="Please input password" show-password/>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary">登陆</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';
// 对用户信息对象进行类型声明
interface LoginForm {
  userName: string | null,
  passWord: string | null,
}
// 存储用户的登陆信息
const loginForm: LoginForm = reactive({
  userName: 'admin',
  passWord: '111111'
})

</script>

<style scoped lang="scss">
.login-container {
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login-form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: aliceblue;
    }

    h2 {
      color: aliceblue;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>