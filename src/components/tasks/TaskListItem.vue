<template>
    <div>
        <a class="is-3" @click="emitClick()">{{ task.task }}</a>
    </div>
</template>

<script>
    export default {
        props: ['task'],

        methods: {
            emitClick: function() {
                this.$emit('click');
            }
        }
    }
</script>