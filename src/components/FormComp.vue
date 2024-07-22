<!-- TEMPLATE -->
<template>
    <div id="formComp" class="py-4">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">
                <h3 class="py-4 text-center text-uppercase">Agregar nuevo usuario</h3>
                <form @submit.prevent="addNewUser">
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="inputName" v-model="formUser.name" required>
                        <label for="inputName">Nombre</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="inputEmail" v-model="formUser.mail" required>
                        <label for="inputEmail">Email</label>
                    </div>
                    <div class="input-group mb-2">
                        <span class="input-group-text">@</span>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="inputUsername" v-model="formUser.username"
                                required>
                            <label for="inputUsername">Username</label>
                        </div>
                    </div>
                    <div class="form-floating mb-2 text-end">
                        <button class="btn btn-primary">Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<!-- SCRIPT -->
<script>
import { mapActions } from 'vuex'

export default {
    name: 'FormComp',
    props: {
    },
    data() {
        return {
            formUser: {
                name: '',
                mail: '',
                username: ''
            },
        }
    },
    methods: {
        ...mapActions(['addUser']),
        async addNewUser() {
            let user = {
                name: this.formUser.name,
                mail: this.formUser.mail,
                username: this.formUser.username,
            }
            await this.addUser(user)
            this.formUser.name = '';
            this.formUser.mail = ''
            this.formUser.username = ''
        },
    },
}
</script>

<!-- STYLE -->
<style scoped></style>