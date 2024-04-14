<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <img class="login-left-img" src="@/assets/images/login_left.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.svg" alt="" />
          <h2 class="logo-text">北斗2</h2>
        </div>
        <!-- <LoginForm></LoginForm> -->
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：admin / user">
        <template #prefix>
          <el-icon class="el-input__icon"><user /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" placeholder="密码：123456" show-password autocomplete="new-password">
        <template #prefix>
          <el-icon class="el-input__icon"><lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="CircleClose" round @click="resetForm(loginFormRef)" size="large">重置</el-button>
    <el-button :icon="UserFilled" round @click="login(loginFormRef)" size="large" type="primary" :loading="loading">
      登录
    </el-button>
  </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import { ref, reactive, onMounted } from "vue";
// import { useRouter } from "vue-router";
// import { HOME_URL } from "@/config";
// import { getTimeState } from "@/utils";
// import { Login } from "@/api/interface";
// import { ElNotification } from "element-plus";
// import { loginApi } from "@/api/modules/login";
// import { useUserStore } from "@/stores/modules/user";
// import { useTabsStore } from "@/stores/modules/tabs";
// import { useKeepAliveStore } from "@/stores/modules/keepAlive";
// import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import type { ElForm } from "element-plus";
// import md5 from "js-md5";

// const router = useRouter();
// const userStore = useUserStore();
// const tabsStore = useTabsStore();
// const keepAliveStore = useKeepAliveStore();

type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const loading = ref(false);
const loginForm = reactive<any>({
  username: "",
  password: ""
});

// login
const login = async (formEl: FormInstance | undefined) => {
  await $fetch('/api/ceshi?a=1',{
    method: 'get',
  })
  //  await $fetch('/api/hello?a=1',{
  //   method: 'get',
  // })
  //  await $fetch('/api/postApi?a=1', {
  //   method: 'post',
  //   body: { test: 123 }
  //  })
  //  await $fetch('/api/putApi?a=1', {
  //   method: 'put',
  //   body: { test: 123 }
  //  })
  //  await $fetch('/api/deleteApi?a=1', {
  //   method: 'delete',
  // })
  //  await $fetch('/getUser?b=2',{
  //   method: 'get',
  // })
  // console.log(res.data)
  // console.log(res1.data)
  // console.log(res2.data)
  if (!formEl) return;
  formEl.validate(async (valid:any) => {
    if (!valid) return;
    loading.value = true;
    try {
      // 1.执行登录接口
      // const { data } = await loginApi({ ...loginForm, password: md5(loginForm.password) });
      // userStore.setToken(data.access_token);

      // // 2.添加动态路由
      // await initDynamicRouter();

      // // 3.清空 tabs、keepAlive 数据
      // tabsStore.closeMultipleTab();
      // keepAliveStore.setKeepAliveName();

      // // 4.跳转到首页
      // router.push(HOME_URL);
      // ElNotification({
      //   title: getTimeState(),
      //   message: "欢迎登录 北斗",
      //   type: "success",
      //   duration: 3000
      // });
    } finally {
      loading.value = false;
    }
  });
};

// resetForm
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

onMounted(() => {
  // 监听 enter 事件（调用登录）
  document.onkeydown = (e: KeyboardEvent) => {
    e = (window.event as KeyboardEvent) || e;
    if (e.code === "Enter" || e.code === "enter" || e.code === "NumpadEnter") {
      if (loading.value) return;
      login(loginFormRef.value);
    }
  };
});
</script>

<style scoped lang="scss">
.login-container {
  height: 100%;
  min-height: 550px;
  background-color: #eeeeee;
  background-image: url("@/assets/images/login_bg.svg");
  background-size: 100% 100%;
  background-size: cover;
  .login-box {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 96.5%;
    height: 94%;
    padding: 0 50px;
    background-color: rgb(255 255 255 / 80%);
    border-radius: 10px;
    .dark {
      position: absolute;
      top: 13px;
      right: 18px;
    }
    .login-left {
      width: 800px;
      margin-right: 10px;
      .login-left-img {
        width: 100%;
        height: 100%;
      }
    }
    .login-form {
      width: 420px;
      padding: 50px 40px 45px;
      background-color: var(--el-bg-color);
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 10%) 0 2px 10px 2px;
      .login-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 45px;
        .login-icon {
          width: 60px;
          height: 52px;
        }
        .logo-text {
          padding: 0 0 0 25px;
          margin: 0;
          font-size: 42px;
          font-weight: bold;
          color: #34495e;
          white-space: nowrap;
        }
      }

      .el-form-item {
        margin-bottom: 40px;
      }
      .login-btn {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 40px;
        white-space: nowrap;
        .el-button {
          width: 185px;
        }
      }

    }
  }
}

@media screen and (width <= 1250px) {
  .login-left {
    display: none;
  }
}

@media screen and (width <= 600px) {
  .login-form {
    width: 97% !important;
  }
}

</style>
