<template>
    <div class="task" :class="task.completed ? 'task-completed' : ''">
        <input class="the-checkbox" type="checkbox" v-model="task.completed" @click="toggleTask">
        <a class="" @click="emitClick()">{{ task.task }}</a>
    </div>
</template>

<script>
    export default {
        props: ['task'],

        methods: {
            emitClick: function () {
                this.$emit('click');
            },

            toggleTask: function () {
                axios.post(window.apiBase + '/v1/tasks/update', this.task)
                    .then(response => console.log('Updated'))
                    .catch(error => {
                        window.the_error = error;
                        alert('Error');
                    });
            }
        }
    };
</script>

<style scoped>
    .task-completed {
        text-decoration: line-through;
    }

    .task {
        font-size: 2em;
    }
</style>