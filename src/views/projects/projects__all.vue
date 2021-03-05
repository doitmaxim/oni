<template>
    <div class="projects__all">
        <link-box
            v-for="i in Array(this.count)" 
            :key="i"
        />
    </div>
</template>


<script>
import linkBox from '../../components/link-box.vue';
export default {
    name: 'projects__all',
    data() {
        return {
            title: 'проекты',
            count: 10
        }
    },
    components: {
        linkBox
    }
}
</script>
<style lang="scss">
.projects__all {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    gap: 20px;
}
</style>