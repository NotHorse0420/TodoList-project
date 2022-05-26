export const mixin = {
    methods:{
        showName(){
            alert(this.name)
        }
    },
    mounted(){
        console.log('!!!')
    }
}
export const mixin0={
    data(){
        return{
            x:100,
            y:200
        }
    }
}