<template>
    <div>
        <div v-for="task in tasks">
            <task-list-item
                    :task="task"
                    @click="wantsToEditTask(task)">
            </task-list-item>
        </div>

        <task-list-item-editor-popup v-if="editTask" :task="editTask" @close="editTask = false" @taskDeleted="taskDeleted"></task-list-item-editor-popup>

        <button @click="newTask">New Task</button>
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
            this.loadTasks();
        },

        methods: {
            loadTasks(edit = null) {
                axios.get(apiBase + '/v1/tasks/all')
                    .then(response => {
                        this.tasks = response.data.results;

                        if (edit) {
                           this.tasks.forEach(task => {
                               if (task.id == edit) {
                                   this.wantsToEditTask(task);
                               }
                           });
                        }
                    })
                    .catch(data => {
                        alert('Error :(');
                    });
            },

            wantsToEditTask: function (task) {
                this.editTask = task;
            },

            newTask: function () {
                axios.post(apiBase + '/v1/tasks/store', {task: 'New Task'})
                    .then(response => {
                        this.loadTasks(response.data.id);
                    })
                    .catch(error => alert('Error'));
            },

            taskDeleted: function () {
                this.editTask = false;
                this.loadTasks();
            }
        }
    };
</script>