<template>
  <div class="col-md-12">
    <div class="create-container">
      <div class="logo">
        <img src='/logoLesCopaings.png' alt="Logo">
      </div>
      <Form class="form-add" @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <Field name="username" type="text" class="form-control" placeholder="Username"/>
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="form-group">
            <Field name="email" type="email" class="form-control" placeholder="E-mail"/>
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group">
            <Field name="password" type="password" class="form-control" placeholder="Mot de passe"/>
            <ErrorMessage name="password" class="error-feedback" />
          </div>
          <div class="form-group">
            <Field name="nom" type="text" class="form-control" placeholder="Nom"/>
            <ErrorMessage name="nom" class="error-feedback" />
          </div>
          <div class="form-group">
            <Field name="prenom" type="text" class="form-control" placeholder="Prenom"/>
            <ErrorMessage name="prenom" class="error-feedback" />
          </div>
          <div class="form-group">
            <p class="label">Votre établissement :</p>

            <Field name="site" as="select">
              <option value="IME/SMR bousquairol">IME/SMR bousquairol</option>
              <option value="MAS rosine bet">MAS rosine bet</option>
            </Field>
            <ErrorMessage name="site" class="error-feedback" />
          </div>

          <div class="form-group buttonRegister">
            <button class="register-button" :disabled="loading">
              <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
              ></span>
              Sign Up
            </button>
          </div>
        </div>
      </Form>

      <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}

      </div>
      <RouterLink to="/login">Se connecter</RouterLink>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import {ref} from "vue";

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
          .string()
          .required("Username is required!")
          .min(3, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
      email: yup
          .string()
          .required("Email is required!")
          .email("Email is invalid!")
          .max(50, "Must be maximum 50 characters!"),
      password: yup
          .string()
          .required("Password is required!")
          .min(6, "Must be at least 6 characters!")
          .max(40, "Must be maximum 40 characters!"),
      nom: yup
          .string()
          .required("Name is required!"),
      prenom: yup
          .string()
          .required("Surname is required!"),
      site: yup
          .mixed()
          .oneOf(["IME/SMR bousquairol", "MAS rosine bet"], "Site is required!")
          .required("Location is required!"),

    });

    return {
      successful: false,
      loading: false,
      message: "",
      site: "",
      schema
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/login");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
          },
          (error) => {
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            this.successful = false;
            this.loading = false;
          }
      );
    },
  },
};
</script>

<style scoped>

.label {
   padding-right: 10px;
   font-family: 'Blinker', sans-serif;
   color: #ada4a3;
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

input[type="text"], input[type="password"], input[type="email"]  {
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

.material-icons-outlined {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  color: #ccc;
}

.register-button {
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

.register-button:hover {
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
.alert-success{
  background-color: #ade36d;
  border-radius: 20px;
  padding: 10px;
  color: black;
}
.alert-danger{
  background-color: #e34940;
  border-radius: 20px;
  padding: 10px;
  color: black;
}
.buttonRegister{
  display: flex;
  justify-content: center;

}

select {
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  font-family: 'Blinker', sans-serif;
  color: #666;
  appearance: none; /* Masquer l'apparence par défaut du sélecteur */
  background-color: transparent; /* Fond transparent */
}

select:focus {
  outline: none; /* Supprimer l'effet de focus par défaut */
}

select::-ms-expand {
  display: none; /* Masquer la flèche de déroulement pour les navigateurs Internet Explorer */
}

.select-icon {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  color: #ccc;
}

/* Style personnalisé pour les options du sélecteur */
select option {
  background-color: #ffffff;
  color: #666;
  font-family: 'Blinker', sans-serif;
}

/* Style personnalisé pour l'option sélectionnée */
select option:checked {
  background-color: #cab174;
  color: #fff;
}

</style>