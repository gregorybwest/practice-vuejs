/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      num1: 0,
      num2: 0,
      num3: 0,
    };
  },
  methods: {
    sumNums: function () {
      return parseInt(this.num1) + parseInt(this.num2) + parseInt(this.num3);
    },
  },
};

Vue.createApp(App).mount("#app");
