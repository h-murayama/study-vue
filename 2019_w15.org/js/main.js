Vue.directive('scroll',{
    inserted: function(el,binding){
        let f = function(evt){
            if(binding.value(evt, el)){
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll',f)
    }
})


let vm = new Vue({
	el: '#app',
    methods: {
        scrollFadeIn:function(evt,el){
            if(window.scrollY > Math.abs(el.getBoundingClientRect().top + 500) ){
                if(el.getAttribute('data-id') == 'toUp' ){
                    el.setAttribute(
                        'style',
                        'opacity:1; transform:translate3d(0, -10px, 0)'
                    )
                }
                if(el.getAttribute('data-id') == 'toLeft' ){
                    el.setAttribute(
                        'style',
                        'opacity:1; transform:translate3d(-40px, 0, 0)'
                    )
                }
            }
            return window.scrollY > Math.abs(el.getBoundingClientRect().top)
        }
    }
})



