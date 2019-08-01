<template>
  <div class="wrapper">
    <h1>{{msg}}</h1>
    <div class="main-container">
      <h3>Ecosystem</h3>
      <ul>
        <li>
          <a href="https://github.com" target="_blank" rel="noopener">vue-router</a>
        </li>
        <li>
          <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-devtools#vue-devtools"
            target="_blank"
            rel="noopener"
          >vue-devtools</a>
        </li>
        <li>
          <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      msg: "hello, world!!!",
      imgList: [
        {
          name: "pear",
          size: "big"
        },
        {
          name: "apple",
          size: "middle"
        }
      ]
    };
  }
};
</script>






