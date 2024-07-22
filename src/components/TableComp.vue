<!-- TEMPLATE -->
<template>
    <div class="tableComp py-4">
        <section v-if="users" class="pb-5">
            <div>
                <div class="py-3 d-flex justify-content-center">
                    <h3 class="py-3 text-center text-uppercase">Lista de Usuarios</h3>
                </div>
                <div v-if="users.length > 0">
                    <table class="table table-striped text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users" :key="user.id">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ user.name }}</td>
                                <td>{{ user.mail }}</td>
                                <td>{{ user.username }}</td>
                                <td>
                                    <button class="btn btn-warning mx-2" @click="preUpdateUser(user.id)"
                                        data-bs-toggle="modal" data-bs-target="#updateModal">
                                        Modificar
                                    </button>
                                    <button class="btn btn-danger mx-2" @click="delUser(user.id)">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else>
                    <p class="text-center text-danger">No existen usuarios registrados.</p>
                </div>
            </div>
        </section>
        <section v-else class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Cargando...</span>
            </div>
        </section>
    </div>

    <!-- MODAL UPDATE -->
    <div class="modal fade" id="updateModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="updateModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="updateModalLabel">Modificar datos de usuario</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <form @submit.prevent="updateUser">
                        <div class="py-2">
                            <label for="" class="form-label">Nombre:</label>
                            <input type="text" class="form-control" name="nombre" v-model="editUser.name">
                        </div>
                        <div class="py-2">
                            <label for="" class="form-label">Email:</label>
                            <input type="text" class="form-control" name="email" v-model="editUser.mail">
                        </div>
                        <div class="py-2">
                            <label for="" class="form-label">Username:</label>
                            <input type="text" class="form-control" name="username" v-model="editUser.username">
                        </div>
                        <div class="py-2">
                            <input type="submit" value="Actualizar usuario" class="btn btn-success">
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>

</template>

<!-- SCRIPT -->
<script>
import {
    getFirestore,
    doc,
    updateDoc,
} from 'firebase/firestore';
import firebaseApp from '../firebaseConfig.js'

import { mapActions } from 'vuex'

export default {
    name: 'TableComp',
    props: {
        users: Array
    },
    data() {
        return {
            updateModal: '',
            editUser: {
                id: '',
                name: '',
                mail: '',
                username: ''
            }
        }
    },
    methods: {
        ...mapActions(['delUser']),
        preUpdateUser(userID) {
            let { id, name, mail, username } = this.users.find(user => user.id == userID);
            this.editUser = { id, name, mail, username };
        },
        async updateUser() {
            try {
                let db = getFirestore(firebaseApp);
                let userRef = doc(db, 'users', this.editUser.id);
                await updateDoc(userRef, {
                    name: this.editUser.name,
                    mail: this.editUser.mail,
                    username: this.editUser.username
                });
                this.editUser = {
                    id: '',
                    name: '',
                    mail: '',
                    username: ''
                }
                this.updateModal.hide();
            } catch (error) {
                console.log(error);
            }
        }
    },
    async mounted() {
        this.updateModal = new window.bootstrap.Modal('#updateModal');
    },
}
</script>

<!-- STYLE -->
<style scoped></style>