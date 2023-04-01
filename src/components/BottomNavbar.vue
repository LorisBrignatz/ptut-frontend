<template>
  <div class="bottom-navbar">
    <router-link to="/research">
      <i class="fa fa-user"></i>
      <span>Rechercher</span>
    </router-link>
    <router-link to="/creation">
      <i class="fa fa-car"></i>
      <span>Créer</span>
    </router-link>
    <router-link to="/home">
      <i class="fa fa-home"></i>
      <span>Accueil</span>
    </router-link>
    <router-link to="/request">
      <i class="fa fa-user"></i>
      <span>Demander</span>
    </router-link>
    <router-link to="/profile">
      <i class="fa fa-user"></i>
      <span>Profil</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BottomNavbar"
}
</script>

<style scoped>
/*.bottom-navbar {
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
}*/
.bottom-navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.bottom-navbar a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #9b9b9b;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.bottom-navbar a:hover {
  color: #000;
}

.bottom-navbar a.active {
  color: #000;
}

.bottom-navbar a i {
  font-size: 24px;
  margin-bottom: 5px;
}

@media screen and (max-width: 600px) {
  .bottom-navbar {
    height: 50px;
  }

  .bottom-navbar a {
    font-size: 12px;
  }

  .bottom-navbar a i {
    font-size: 20px;
    margin-bottom: 3px;
  }
}

@media screen and (max-width: 400px) {
  .bottom-navbar {
    height: 40px;
  }

  .bottom-navbar a {
    font-size: 10px;
  }

  .bottom-navbar a i {
    font-size: 16px;
    margin-bottom: 2px;
  }
}

.bottom-navbar a.slide-up {
  animation: slide-up 0.3s ease forwards;
}

.bottom-navbar a.slide-down {
  animation: slide-down 0.3s ease forwards;
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-down {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

</style>