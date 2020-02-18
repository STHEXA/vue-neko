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
  data: {
    name: 'キマイラ',
    list: [
      {id: 1, name: 'スライム', hp: 100},
      {id: 2, name: 'ゴブリン', hp: 200},
      {id: 3, name: 'ドラゴン', hp: 500}
    ]
  },
  methods: {
    doAdd: function() {
      var max = this.list.reduce(function(a,b) {
        return a > b.id ? a: b.id
      },0) 
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      })
    },
    doRemove: function(index) {
      this.list.splice(index, 1)
    }
    
  }

})