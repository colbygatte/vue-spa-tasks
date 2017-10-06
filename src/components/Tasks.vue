<template>
    <div>
        <div v-for="task in tasks">
            <task-list-item :task="task" class="task" :class="task.completed ? '' : 'task-completed'"></task-list-item>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                tasks: []
            }
        },

        mounted: function () {
            axios.get(apiBase + '/v1/tasks/all')
                .then(response => {
                    this.tasks = response.data.results;
                })
                .catch(data => {
                    alert('Error :(');
                });
        },

        methods: {
        }
    };
</script>

<style scoped>
    .task-completed {
        text-decoration: line-through;
    }

    .task {
        font-size: 3em;
    }
</style>