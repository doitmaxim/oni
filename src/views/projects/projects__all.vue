<template>
    <div class="projects__all">
        <project-item
            v-for="project in allProjects" 
            v-bind:key="project.id"
            :project="project"
        />
    </div>
</template>


<script>
import {mapActions, mapGetters} from 'vuex';
import projectItem from '../../components/project/project__item.vue';
export default {
    name: 'projects__all',
    computed: mapGetters(['allProjects']),
    methods: mapActions(['getAllProjects']),
    components: {
        projectItem
    },
    async mounted() {
        this.getAllProjects(10);
    },
    props: {

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