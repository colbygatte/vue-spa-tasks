import Vue from 'vue';

Vue.config.productionTip = false;

Vue.component('navigation', require('./../components/Navigation.vue').default);
Vue.component('task-list-item', require('./../components/tasks/TaskListItem.vue').default);
Vue.component('task-list-item-editor-popup', require('./../components/tasks/TaskListItemEditorPopup.vue').default);