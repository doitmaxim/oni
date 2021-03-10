import Api from '../../service/api';

export default {
    actions: {
        async getAllProjects(store, limit = 5){
            const res = await Api().get('/users', {
                params: {
                    _limit: limit
                }
            });
            try {
                const projects = res;
                store.commit('updateProjectsList', projects);
            } catch(e) {
                console.log(e)
            }
        }
    },
    state: {
        projects: []
    },
    mutations: {
        updateProjectsList(state, projects){
            state.projects = projects.data;
        }
    },
    getters: {
        allProjects(state){
            return state.projects;
        }
    }
}