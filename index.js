/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from Javascript!",
      name: "Greg",
      cars: ["audi", "bmw", "ford"],
      newCar: "",
      showInfo: false,
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Woah, this is cool";
    },
    addNewCar: function () {
      this.cars.push(this.newCar);
      this.newCar = "";
    },
  },
};

Vue.createApp(App).mount("#app");
