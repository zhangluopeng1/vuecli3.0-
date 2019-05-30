<template>
  <div class="login">
    <div class="login_center">
      <img src="../../public/img/login_title.png" alt="" class="login_title">
      <img src="" alt="">
      <div class="login_input" style="margin-top:60px;">
        <i class="iconfont icon-H_shanghuhao"></i>
        <input type="text" placeholder="请输入商户号" v-model="name">
        <!-- <i class="iconfont icon-H_shanghuhao"></i> -->
      </div>
      <div class="login_input">
        <i class="iconfont icon-shouquan"></i>
        <input type="text" placeholder="请输入授权码">
        <!-- <i class="iconfont icon-H_shanghuhao"></i> -->
      </div>
      <div class="login_button">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      name: ''
    };
  },
  methods: {}
};
</script>

<style lang="less">
@import '../../public/css/base.less';
.login {
  background-image: url('../../public/img/login_bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  min-width: 1000px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_title {
    width: 70%;
  }
  .login_center {
    box-sizing: border-box;
    width: 588px;
    padding: 66px 100px;
    border: 1px solid #ccc;
    border-radius: 10px;
    .login_input {
      box-sizing: border-box;
      padding: 5px;
      height: 48px;
      line-height: 34px;
      width: 90%;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin: 20px auto;
      input {
        background: rgba(0, 0, 0, 0);
        border: 0 solid #ccc;
        width: 280px;
        padding-left: 10px;
        border-left: 1px solid #cdcdcf;
        &::-webkit-input-placeholder {
          color: #cdcdcf;
        }
      }
    }
  }
  .iconfont {
    color: @danlvse;
  }
  .icon-H_shanghuhao,
  .icon-shouquan {
    float: left;
    font-size: 25px;
  }
  .login_button {
    background: @danlvse;
    height: 50px;
    line-height: 50px;
    width: 90%;
    margin: 61px auto 0 auto;
    color: white;
  }
}
</style>
