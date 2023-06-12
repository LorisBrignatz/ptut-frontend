<template>
  <NewPassword
      @newPassword="handleNewPassword"
  />
  <div
      v-if="message"
      class="alert"
      :class="successful ? 'alert-success' : 'alert-danger'"
  >
    {{ message }} <br>
    <RouterLink to="/request" v-if= "successful">Se connecter</RouterLink>
    <!--<a v-if= "successful" href="/login"> Se connecter</a>-->
  </div>

</template>

<script setup>
import {ref} from "vue";

const message = ref('');
const successful = ref(false);
import NewPassword from "@/components/newPassword.vue";
import {BACKEND} from "@/api";

function handleNewPassword(mail, newPassword){
  console.log(mail , newPassword)
    fetch(BACKEND+'/auth/newPassword'
        //fetch('/services/trajets/ajouter'
        , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          body : JSON.stringify({
            mail: mail,
            newPassword: newPassword
          })

        })
        .then(response => {
          console.log(response)
          if(response.status == 200){ successful.value =true;}
          console.log(successful)
          return response.json()})
        .then(data => {
          message.value = data.message;

        })
        .catch(error => {
        });
}
</script>

<style scoped>
.alert-danger{
  margin-top: 10px;
  background-color: #e34940;
  border-radius: 20px;
  padding: 10px;
  color: black;
  text-align: center;

}
.alert-success{
  margin-top: 10px;
  background-color: #ade36d;
  border-radius: 20px;
  padding: 10px;
  color: black;
  text-align: center;
}
.alert-success a{
  text-decoration: none;

}
</style>