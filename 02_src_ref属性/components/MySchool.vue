<template>
    <div class="school">
        <h2>{{Name}}</h2>
        <h2>{{Address}}</h2>
    </div>
</template>
<script>
    export default{
        name:'MySchool',
        data(){
            return{
            Name:'b',
            Address:'B'
            }
        }
    }
</script>
<style>
    .school{
        background-color: bisque;
    }
</style>