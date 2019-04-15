<template>
    <div>
        <h1>首页</h1>
        <ul>
            <li v-for="item in $store.state.landMarkList">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'index',
    mounted () {
        this.$store.dispatch('getLandMarkList');
    },
}
</script>