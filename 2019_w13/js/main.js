var watchExampleVM = new Vue({
    el:'#watch-example',
    data:{
        question: '',
        answerImage: '',
        answer: 'お悩みを聞いてほしいときは必ず[?]をつけてね！'
    },
    watch:{
        //question変わるごとに実行される
        question:function (newQuestion, oldQuestion) {
            this.answer = '入力中...'
            this.debouncedGetAnswer()
        }
    },
    created: function(){
        //lodash関数 _.debounce でajaxリクエストを制御
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods:{
        getAnswer: function(){
            //questionに?がない場合エラーメッセージで終了
            if(this.question.indexOf('?') === -1 && this.question.indexOf('？') === -1){
                this.answer = '悩みを聞いて欲しいときはちゃんと?をつけて！'
                return
            }
            this.answer = '聞いています...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response){
                    //APIで取得したanswer最初の文字を大文字、残りを小文字に変える
                    vm.answer = _.capitalize(response.data.answer)
                    vm.answerImage = response.data.image
                })
                .catch(function(error){
                    vm.answer = '通信失敗 ' + error
                })
        }
    }
})

