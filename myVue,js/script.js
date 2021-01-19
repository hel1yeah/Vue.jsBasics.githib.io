let app = new Vue({
  el: '#app',
  data: {
    message: 'Vue!',
    testString: 'Вы загрузили эту страницу: ' + new Date().toLocaleString(),
    hz: true,
    randomNumber: '',
  },

  methods:{
    random: function(){
      this.randomNumber = Number(this.randomNumber + Math.round(Math.random()*10))
    }
  }
})


vue.component('todo-item', {
  template: '<li>Это одна задача в списке</li>'
})