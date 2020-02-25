var app = new Vue({
  el: '#app',
  // data: {
  //   message: '初期メッセージ',
  //   list: ['りんご','ばなな','いちご'],
  //   show: true
  // },
  // methods: {
  //   handleClick: function(event) {
  //     alert(event.target)
  //   }
  // }
  // data: {
  //   count: 0
  // },
  // methods: {
  //   increment: function() {
  //     this.count += 1
  //   }
  // }
  // data: {
  //   ok: false
  // }
  // data: {
  //   name: 'キマイラ',
  //   list: [],
  //   text: 'Vue'
  // },
  // methods: {
  //   doAdd: function() {
  //     var max = this.list.reduce(function(a,b) {
  //       return a > b.id ? a: b.id
  //     },0) 
  //     this.list.push({
  //       id: max + 1,
  //       name: this.name,
  //       hp: 500
  //     })
  //   },
  //   doRemove: function(index) {
  //     this.list.splice(index, 1)
  //   },
  //   doAttack: function(index) {
  //     this.list[index].hp -= 10
  //   }
  // },
  // created: function() {
  //   axios.get('list.json').then(function(response) {
  //     this.list = response.data
  //   }.bind(this)).catch(function(e) {
  //     console.error(e)
  //   })
  // }
  mounted: function() {
    console.log(this.$el)
    console.log(this.$refs.hello)
  },

  data: {
    // あらかじめ空リストを用意しておく
    list: []
  },
  created: function () {
    axios.get('list.json').then(function (response) {
      // 取得完了したらlistリストに代入
      this.list = response.data
    }.bind(this)).catch(function (e) {
      console.error(e)
    })
  }

})