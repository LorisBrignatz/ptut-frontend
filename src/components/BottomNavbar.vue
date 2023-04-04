<template>
  <div class="container stage">
    <div class="container">
      <div class="tabbar tab-style">
        <ul class="flex-center">
          <li class="search" data-where="search"><span class="material-icons-outlined">
            search
          </span></li>
          <li class="add-circle" data-where="add-circle"><span class="material-icons-outlined">
            add
          </span></li>
          <li class="home active" data-where="home"><span class="material-icons-outlined">
            home
          </span></li>
          <li class="request" data-where="request"><span class="material-icons-outlined">
            add_comment
          </span></li>
          <li class="profile" data-where="profile"><span class="material-icons-outlined">
            person
          </span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomNavbar"
}
const uls = document.querySelectorAll("ul");

uls.forEach((ul) => {
  const resetClass = ul.parentNode.getAttribute("class");
  const lis = ul.querySelectorAll("li");

  lis.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const target = e.currentTarget;

      if (
          target.classList.contains("active") ||
          target.classList.contains("follow")
      ) {
        return;
      }

      ul.parentNode.setAttribute(
          "class",
          `${resetClass} ${target.getAttribute("data-where")}-style`
      );

      lis.forEach((item) => clearClass(item, "active"));

      setClass(target, "active");
    });
  });
});

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
  --accent-color-fg: #fefefe;
  --backdrop-color: #ffffff;
  --app-content-background-color: #ffffff;
  --inset-shadow: rgba(7, 43, 74, 0.3);
  --outset-shadow: rgba(223, 240, 255, 0.25);
  --clay-box-shadow: rgba(7, 43, 74, 0.3);
  --clay-background-color: #c0d8ec;
  --clay-fg-color: #444;
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

.stage {
  max-width: 400px;
  width: 500px;
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

.tabbar {
  height: 120px;
  display: flex;
  flex-direction: column;
  position: relative;

ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul {
  background-color: var(--app-content-background-color);
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

&:last-child {
   margin-right: 0;
 }
}
}
.tab-style {
li {
  width: 60px;
  height: 40px;
  flex-direction: column;
  overflow: hidden;

span {
  position: relative;
  top: 3px;
  transition: top 0.4s ease-out, font-size 0.2s ease-out;
  text-shadow: inset 2px 2px 4px var(--clay-box-shadow);
}

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
</style>