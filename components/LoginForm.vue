<template>
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
    <el-button :icon="CircleClose" round @click="logout(loginFormRef)" size="large">退出</el-button>
    <el-button :icon="CircleClose" round @click="resetForm(loginFormRef)" size="large">重置</el-button>
    <el-button :icon="UserFilled" round @click="login(loginFormRef)" size="large" type="primary" :loading="loading">
      登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
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
import {getUserInfo} from "@/api/module/user";
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
  //    await $fetch('/api/ceshi?a=1',{
  //   method: 'get',
  // })
  await $fetch('/user/login',{
    method: 'post',
    body: {
      name:loginForm.username,
      password:loginForm.password
    }
  }).then((res:any)=>{
    if (res.code == 200) {
      localStorage.setItem('token', res.data.token);
    }
  })
   // await $fetch('/api/ceshi?a=1',{
  //   method: 'get',
  // })
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
const resetForm = async (formEl: FormInstance | undefined) => {
  // if (!formEl) return;
  // formEl.resetFields();
  getUserInfo()
  // await $fetch('/user/info',{
  //   method: 'get',
  //   headers: {
  //   token: localStorage.getItem('token') as any
  // },
  // }).then((res: any) => {
   
  // })
};

const logout = async (formEl: FormInstance | undefined) => {
  // if (!formEl) return;
  // formEl.resetFields();
  await $fetch('/user/logout',{
    method: 'post',
  }).then((res: any) => {
    // if (res.code == 200) {
    //   localStorage.setItem('token', res.data);
    // }
  })
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

</style>
