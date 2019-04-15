<template>
    <div>
        <h1>新闻</h1>
        <ul>
            <li v-for="item in $store.state.landMarkList">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'news',
    mounted () {
        this.$store.dispatch('getLandMarkList');
    },
}
</script>