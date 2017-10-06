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
                                <a class="button is-danger">Cancel</a>
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

            },

            close: function () {
                this.$emit('close');
            }
        }
    };
</script>