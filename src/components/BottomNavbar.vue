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
</script>

<style scoped>
</style>