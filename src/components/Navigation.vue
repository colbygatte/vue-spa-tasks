<template>
    <div>
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <strong>GatteTasks</strong>
                </router-link>

                <div class="navbar-burger burger" data-target="navMenuTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navMenuTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <router-link to="/tasks" class="navbar-link">
                            Tasks
                        </router-link>
                        <div class="navbar-dropdown is-boxed">
                            <router-link to="/tasks" class="navbar-item">
                                All
                            </router-link>
                            <router-link class="navbar-item" to="#">
                                New
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <a class="button is-primary" href="https://github.com/colbygatte">
                                    <span class="icon">
                                        <i class="fa fa-github"></i>
                                    </span>
                                    <span>Github</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>