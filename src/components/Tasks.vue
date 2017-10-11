<template>
    <div>
        <div v-for="task in tasks">
            <task-list-item
                    :task="task"
                    @click="wantsToEditTask(task)">
            </task-list-item>
        </div>

        <task-list-item-editor-popup v-if="editTask" :task="editTask" @close="editTask = false"></task-list-item-editor-popup>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                tasks: [],
                editTask: false
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
            wantsToEditTask: function (task) {
                this.editTask = task;
            }
        }
    };
</script>