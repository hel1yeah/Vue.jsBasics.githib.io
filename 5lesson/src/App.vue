<template>
  <div class="container">
    <button
      class="btm btn-primary"
      v-on:click="showH2 = !showH2"
      v-bind:title="btnText"
      v-bind:disabled="done"
    >
      {{ btnText }}
    </button>
    <transition name="slide">
      <h2 v-show="showH2" class="alert alert-success">
        SUM all numbers: {{ sum }}
      </h2>
    </transition>

    <hr />
    <app-progress v-bind:val="sum" v-bind:max="maxNumbers * 5 ">
      </app-progress>
    <button class="btm btn-suc" v-on:click="addNumber" v-bind:disabled="done">
      TOGGLE HEADER
    </button>
    <app-progress 
      v-bind:val="numbers.length" 
      v-bind:max="maxNumbers">
    </app-progress>
    <ul class="list-g">
      <li class="list-g-item" v-for="num in numbers">
        {{ num }}
      </li>
    </ul>
  </div>
</template>

<script>
import progress from "./progress";
export default {
  data() {
    return {
      showH2: true,
      numbers: [],
      maxNumbers: 10,
    };
  },
  methods: {
    addNumber() {
      if (!this.done) {
        let rnd = Math.floor(Math.random() * 11) - 5;
        this.numbers.push(rnd);
      }
    },
  },
  computed: {
    sum() {
      console.log(1);
      let sum = 0;

      for (let i = 0; i < this.numbers.length; i++) {
        sum += Number(this.numbers[i]);
      }
      return sum;
    },
    btnText() {
      return this.showH2 ? "Hide result" : "Show result";
    },
    done() {
      return this.numbers.length >= this.maxNumbers;
    },
  },
  components:{
    appProgress: progress,
  }
};
</script>
<style >
.container {
  /* background-color: firebrick; */
}
.list-g {
  list-style-type: none;
}

.list-g-item {
  list-style-type: none;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  transition: 0.6s;
}
.slide-leave-active {
  transition: 0.6s;
}
.slide-leave-to {
  opacity: 0;
}
</style>