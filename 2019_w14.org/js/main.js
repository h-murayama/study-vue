var watchExampleVM = new Vue({
    el:'#watch-example',
    data:{
    },
    methods:{
        popup: function(){
            Swal.fire({
              title: 'っっｘ',
              animation: false,
              customClass: {
                popup: 'animated wobble'
              }
            })
        }
    }
})

