<template>
  <div class="container stage">
    <div class="container">
      <div class="tabbar tab-style">
        <ul class="flex-center">
          <li class="search" data-where="search">
            <RouterLink to="/search">
              <span class="material-icons-outlined">search</span>
            </RouterLink>
          </li>
          <li class="add-circle" data-where="add-circle">
            <RouterLink to="/creation">
              <span class="material-icons-outlined">add</span>
            </RouterLink>
          </li>
          <li class="home" :class="{ active: currentTab === 'home' }" data-where="home" @click="setCurrentTab('home')">
            <RouterLink to="/">
              <span class="material-icons-outlined">home</span>
            </RouterLink>
          </li>
          <li class="request" data-where="request">
            <RouterLink to="/request">
              <span class="material-icons-outlined">add_comment</span>
            </RouterLink>
          </li>
          <li class="profile" data-where="profile">
            <RouterLink to="/profile">
              <span class="material-icons-outlined">person</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomNavbar",
  data() {
    return {
      currentTab: "home",
    };
  },
  methods: {
    setCurrentTab(tab) {
      this.currentTab = tab;
    },
  },
  mounted() {
    const uls = document.querySelectorAll("ul");

    uls.forEach((ul) => {
      const resetClass = ul.parentNode.getAttribute("class");
      const lis = ul.querySelectorAll("li");

      lis.forEach((li) => {
        li.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const target = e.currentTarget;

          ul.parentNode.setAttribute(
              "class",
              `${resetClass} ${target.getAttribute("data-where")}-style`
          );

          lis.forEach((item) => clearClass(item, "active"));

          setClass(target, "active");

          this.setCurrentTab(target.getAttribute("data-where"));
        });
      });
    });
  },
};

function clearClass(node, className) {
  node.classList.remove(className);
}

function setClass(node, className) {
  node.classList.add(className);
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

:root {
  --accent-color: #cab174;
}

body {
  background-color: var(--backdrop-color);
  font-size: 10px;
  font-family: 'Blinker', sans-serif;
}

.flex-center {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.container {
  position: fixed;
  left: 0;
  margin-bottom: 0px;
  width: 100%;
}

.home {
&.active {
   color: var(--accent-color);
 }
}

.request {
&.active {
   color: var(--accent-color);
 }
}
.search {
&.active {
   color: var(--accent-color);
 }
}

.profile {
&.active {
   color: var(--accent-color);
 }
}
.add-circle {
&.active {
   color: var(--accent-color);
 }
}

ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);
  position: fixed;
  bottom: 0;
  width: 100%;
  align-self: flex-end;
  justify-content: space-between;
  height: 50px;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-right: 5px;
  transition: all 0.4s;
  background-color: #ffffff;
  width: 60px;
  height: 60px;
  position: relative;
  color: #181c32;
  cursor: pointer;

}

.tab-style {
li {
  width: 80px;
  height: 40px;
  flex-direction: column;
  overflow: hidden;

&:after {
   width: 100%;
   height: 10px;
   text-transform: uppercase;
   text-align: center;
   font-size: 8px;
   font-weight: bold;
   position: relative;
   bottom: -30px;
   opacity: 0;
   transition: bottom 0.2s ease-out, opacity 0.4s ease-out;
 }

&.active:after {
   opacity: 1;
   bottom: 2px;
   text-shadow: inset 2px 2px 8px var(--clay-box-shadow);
 }

&:nth-child(1) {
&:after {
   content: "Rechercher";
 }
}

&:nth-child(2) {
&:after {
   content: "Créer";
 }
}

&:nth-child(3) {
&:after {
   content: "Accueil";
 }
}

&:nth-child(4) {
&:after {
   content: "Demander";
 }
}

&:nth-child(5) {
&:after {
   content: "Profil";
 }
}
}

.active {
span {
  font-size: 1.1rem;
  top: -4px;
}
}
}
.material-icons-outlined {
  color: #181c32;
}
.active .material-icons-outlined {
  color: #cab174;
}
</style>