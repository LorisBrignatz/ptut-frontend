<!--<template>
  <a class="nav-link" @click.prevent="logOut">
    <font-awesome-icon icon="sign-out-alt" /> LogOut
  </a>
  <div class="container">
    <div class="img_profile">
      <img src="/camille.png" alt="profile">
      <div class="name">Camille</div>
      <div class="id">ID 17112001</div>
    </div>
    <div class="item">
      <i class="material-icons-outlined">badge</i>
      <span>Camille Delcourt</span>
      <div class="icon">
        <i class="material-icons-outlined">arrow_forward_ios</i>
      </div>
    </div>
    <div class="item">
      <i class="material-icons-outlined">female</i>
      <span>Femme</span>
      <div class="icon">
        <i class="material-icons-outlined">arrow_forward_ios</i>
      </div>
    </div>
    <div class="item">
      <i class="material-icons-outlined">cake</i>
      <span>17 novembre 2001</span>
      <div class="icon">
        <i class="material-icons-outlined">arrow_forward_ios</i>
      </div>
    </div>
    <div class="item">
      <i class="material-icons-outlined">call</i>
      <span>07.08.09.07.05</span>
      <div class="icon">
        <i class="material-icons-outlined">arrow_forward_ios</i>
      </div>
    </div>
    <div class="item">
      <i class="material-icons-outlined">alternate_email</i>
      <span>Identifiant</span>
      <div class="icon">
        <i class="material-icons-outlined">arrow_forward_ios</i>
      </div>
    </div>
    <div class="item">
      <i class="material-icons-outlined">password</i>
      <span>Mot de passe</span>
      <div class="icon">
        <i class="material-icons-outlined">arrow_forward_ios</i>
      </div>
    </div>
    <div class="item_logout">
      <i class="material-icons-outlined">logout</i>
    </div>
  </div>
</template>
-->

<template>
  <div class="iconLogOut">
    <a @click.prevent="logOut">
      <i class="material-icons-outlined">exit_to_app</i>
      Se déconnecter
    </a>
  </div>
  <div class="create-container">
    <header>
      <h2>
        Profile <strong>{{currentUser.username}}</strong>
      </h2>
    </header>
    <p>
      <strong>Id:</strong>
      {{currentUser.userid}}
    </p>
    <p>
      <strong>Nom:</strong>
      {{currentUser.nom}}
    </p>
    <p>
      <strong>Prenom:</strong>
      {{currentUser.prenom}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>

    <!--
    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul>
    -->
  </div>
  <div class="blocProfil">
    <h2> Mes réservations : </h2>
    <TrajetListeReservation />
  </div>
  <div class="blocProfil">
    <h2> Mes trajets proposés : </h2>
    <TrajetListeMesPropositions />
  </div>


</template>


<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import TrajetListeReservation from "@/components/TrajetListeReservation.vue";
import TrajetListeMesPropositions from "@/components/TrajetListeMesPropositions.vue";

const store = useStore();
const router = useRouter();

const logOut = () => {
  store.dispatch('auth/logout');
  router.push('/login');
};

const { user } = store.state.auth;
const currentUser = user;

if (!currentUser) {
  router.push('/login');
}
</script>

<style scoped>

.create-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow:0 2px 5px rgba(0, 0, 0, 0.4);
  width: 100%;
}
p{

  font-family: 'Blinker', sans-serif;
  color: #4c4c4c;
  margin-top: 10px;

}
h2 {
  font-family: 'Blinker', sans-serif;
  color: #cab174;
}


.iconLogOut a{
  position: fixed;
  z-index: 2;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  color: #cab174;
  font-family: 'Blinker', sans-serif;
  font-size: 20px;
  padding:  5px;
  border: solid;
  border-color: #cab174;
  border-width: 1px;
  border-radius: 20px;
  background-color: white;
}
.blocProfil{
  margin-top: 20px;

}


.item:not(:last-child) {
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.container {
  padding: 20px;
}

.img_profile {
  display: grid;
  position: relative;
}

.img_profile img {
  width: 150px;
  height: 150px;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: -100px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 200px;
  box-shadow: 0px 40px 40px rgba(32, 79, 211, 0.16);
}

.name {
  font-size: 20px;
  line-height: 54px;
  text-align: center;
  font-weight: 600;
  font-style: normal;
  font-family: 'Blinker', sans-serif;
  color: #181c32;
}

.id {
  font-size: 14px;
  line-height: 26px;
  font-weight: normal;
  font-style: normal;
  font-family: 'Blinker', sans-serif;
  color: #4c4c4c;
  text-align: center;
  margin-top: -15px;
}

.item {
  padding: 10px;
  display: grid;
  margin-top: 50px;
  margin: 10px;
  grid-template-columns: 15% 80% 10%;
  color: #181c32;
}


.item i {
  width: 24px;
  color: #181c32;
}


.item span {
  font-style: normal;
  font-family: 'Blinker', sans-serif;
  font-weight: 550;
  padding: 8px;
  line-height: 16px;
}

.item_logout{
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -50px;
  margin-right: -50px;
}

.item_logout i{
  width: 100px;
}

@media screen and (max-width: 600px) {

  .bg img {
    width: 100%;
    margin-top: 0;
  }
}
</style>