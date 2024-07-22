<!-- TEMPLATE -->
<template>
    <div class="usersView">
        <header class="py-4 bg-dark text-light">
            <h2 class="text-center fw-light text-uppercase">Administrador de usuarios</h2>
        </header>

        <main class="container">
            <FormComp/>
            <hr>
            <TableComp :users="users" />
        </main>
    </div>
</template>

<!-- SCRIPT -->
<script>
import FormComp from '@/components/FormComp.vue'
import TableComp from '@/components/TableComp.vue'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'UsersView',
    components: {
        FormComp,
        TableComp
    },
    computed: {
        ...mapState(["users"])
    },
    methods: {
        ...mapActions(["setUsers"])
    },
    mounted() {
        this.setUsers();
    },
}
</script>

<!-- STYLE -->
<style scoped></style>
