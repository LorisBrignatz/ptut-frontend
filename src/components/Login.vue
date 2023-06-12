<template>
  <div class="col-md-12">
    <div class="create-container">
      <div class="logo">
        <img src='/logoLesCopaings.png' alt="Logo">
      </div>
      <Form class="form-add" @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <Field name="username" type="text" class="form-control" placeholder="Username" />
          <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="form-group">
          <Field name="password" type="password" class="form-control" placeholder="Mot de passe"/>
          <ErrorMessage name="password" class="error-feedback" />
        </div>

        <div class="form-group buttonLogin">
          <button class="login-button" :disabled="loading">
            <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
      <p @click="sendMailForm= true" >Mot de passe oublié</p>
      <form v-if="sendMailForm">
        <div class="form-group">
          <Field v-model="email" name="mail" type="mail" class="form-control" placeholder="Votre email"/>

        </div>
        <div class="form-group buttonLogin">

          <button class="login-button" @click="SendMail">
            Envoyer
          </button>
        </div>
      </form>
      <p>Pas encore membre ?</p>
      <a href="/register"> Inscription</a>
    </div>
  </div>
</template>


<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import RegisterView from "@/views/RegisterView.vue";
import axios from "axios";
import {BACKEND} from "@/api";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
    RegisterView
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
      email: ""
    });

    return {
      loading: false,
      message: "",
      schema,
      sendMailForm: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
          () => {
            this.$router.push("/");
          },
          (error) => {
            this.loading = false;
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          }
      );
    },
    SendMail(){
      fetch(BACKEND + '/auth/sendMailPassword?mail='+ this.email, {
        method: "POST"})
          .then((response) => {
            alert("fetch response")

            console.log(response);
            return response.json();
          })
          .then((dataJSON) => {
            console.log(dataJSON);
          })
          .catch((error) => console.log(error));

    }
  },

};

</script>

<style scoped>

label {
  color: black;
  padding-right: 10px;
}
p{
  color: black;
}
.error-feedback{
  color: #cab174;
  font-size: smaller;

}
h2 {
  font-family: 'Blinker', sans-serif;
  color: #cab174;
  font-size: 24px;
  margin-top: -50px;
  margin-bottom: 20px;
}

.create-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow:0 2px 5px rgba(0, 0, 0, 0.4);
  width: 100%;
}

input[type="text"], input[type="password"], input[type="mail"] {
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  font-family: 'Blinker', sans-serif;
  color: #666;
}

.input-button-create {
  text-align: center;
}

.form-group {
  position: relative;
  margin-bottom: 16px;
}
.buttonLogin{
  display: flex;
  justify-content: center;

}

.material-icons-outlined {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  color: #ccc;
}

.login-button {
  background-color: #cab174;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 16px;
  font-family: 'Blinker', sans-serif;
  text-align: center;
  cursor: pointer;
  margin-top: 16px;
}

.login-button:hover {
  background-color: #e3d1a6;
}
logo {
  margin-top: 0px;
  text-align: center;
  margin-top: -80px;
}
.logo img {
  max-height: 150px;
}

.alert-danger{
  background-color: #e34940;
  border-radius: 20px;
  padding: 10px;
  color: black;
}
</style>