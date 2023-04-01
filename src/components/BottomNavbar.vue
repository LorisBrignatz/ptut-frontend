<template>
  <div class="bottom-navbar">
    <router-link to="/home">
      <i class="fa fa-home"></i>
      <span>Accueil</span>
    </router-link>
    <router-link to="/creation">
      <i class="fa fa-car"></i>
      <span>Créer</span>
    </router-link>
    <router-link to="/profile">
      <i class="fa fa-user"></i>
      <span>Profil</span>
    </router-link>
    <router-link to="/request">
      <i class="fa fa-user"></i>
      <span>Demander</span>
    </router-link>
    <router-link to="/research">
      <i class="fa fa-user"></i>
      <span>Rechercher</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BottomNavbar"
}
</script>

<style scoped>
.bottom-navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFF;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid #CCC;
}

.bottom-navbar router-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #666;
  text-decoration: none;
}

.bottom-navbar router-link i {
  font-size: 24px;
  margin-bottom: 5px;
}

.bottom-navbar router-link.active {
  color: #4CAF50;
}

.bottom-navbar router-link.active i {
  color: #4CAF50;
}
</style>