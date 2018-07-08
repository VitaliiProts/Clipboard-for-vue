export default {
  template: '#t',
  data: function () {
    return {
      message: 'Try & Copy What I`m saying'
    }
  },
  methods: {
    onCopy: function (e) {
      console.log('You just copied: ' + e.text)
    },
    onError: function (e) {
      console.log('Failed to copy texts')
    }
  }
}
