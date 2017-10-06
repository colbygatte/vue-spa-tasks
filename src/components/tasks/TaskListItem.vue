<template>
    <div>
        <a class="is-3" @click="editTask">{{ task.task }}</a>
    </div>
</template>

<script>
    export default {
        props: ['task'],

        methods: {
            editTask: function () {
                alert('Wanna edit?');
            }
        }
    }
</script>