<template>
    <div>
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="message">
                    <div class="message-body">
                        <div class="field">
                            <textarea class="textarea" v-model="task.task"></textarea>
                        </div>

                        <div class="field is-grouped">
                            <div class="control" @click="save">
                                <a class="button is-primary">Save</a>
                            </div>

                            <div class="control" @click="close">
                                <a class="button is-warning">Cancel</a>
                            </div>

                            <div class="control" @click="deleteTask">
                                <a class="button is-danger">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['task'],

        methods: {
            save: function() {
                axios.post(window.apiBase + '/v1/tasks/update', this.task)
                    .then(response => {
                        this.$emit('close');
                    })
                    .catch(error => {
                        alert('Error :(');
                    })
            },

            close: function () {
                this.$emit('close');
            },

            deleteTask: function () {
                axios.post(window.apiBase + '/v1/tasks/delete', this.task)
                    .then(response => {
                        console.log(response.data.message);

                        this.$emit('taskDeleted')
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    };
</script>