<template>
    <div class="login__view">
         <div class="login__container">
             <form class="fields">
                <div class="field">
                    <label for="login">Логин</label>
                    <input required v-model="email" type="email" name="login" placeholder="login" />
                </div>
                <div class="field">
                    <label for="password">Пароль</label>
                    <input required v-model="password" type="password" name="passsword" placeholder="*************" />
                </div>
            </form>
            <button @click="login" class="login__button">Вход</button>
         </div>
        <div v-if="loginValidation" class="login__text">Неправильные данные</div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    computed: {
        loginValidation() {
            return this.$store.getters.LOGIN_VALIDATION
        }
    },
    methods: {
        ...mapActions([
            'CHECK_LOGIN'
        ]),
        login() {
            this.CHECK_LOGIN([this.email, this.password, this.$router]);
        }
    }
}
</script>

<style scoped lang="scss">
    .login__view {
        max-width: 320px;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .login__container {
            width: 100%;
            display: flex;
            flex-direction: column;

            .field {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                
                input {
                    width: 98.3%;
                    padding: 10px 0 10px 5px;
                    margin-top: 5px;
                    border: 1px solid blue;
                    border-radius: 3px;
                }

                &:last-child {
                    margin-top: 10px;
                }
            }
            .login__button {
                margin-top: 20px;
                padding: 15px;
                background: blue;
                color: white;
                outline: none;
                border: none;
                border-radius: 3px;
                cursor: pointer;
            }
        }

        .login__text {
            color: red;
            font-size: 14px;
            padding-top: 10px;
            text-align: center;
        }
    }
</style>