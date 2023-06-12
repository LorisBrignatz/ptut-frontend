<script>


</script>

<template>

  <div class="create-container">
    <h2>Réinitialisez votre mot de passe</h2>
    <form class="form-add" @submit.prevent="$emit('newPassword',mail, newPassword)">
      <div class="form-group">
        <input type="text" v-model="mail" placeholder="Votre email" />
      </div>
      <div class="form-group">
        <input type="password" v-model="newPassword" placeholder="Nouveau mot de passe" />
      </div>
      <div class="input-button-create">
        <button class="add-button">Réinitialiser</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

h2 {
  font-family: 'Blinker', sans-serif;
  color: #cab174;
  font-size: 24px;
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

input[type="text"], input[type="password"] {
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

.add-button {
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

.add-button:hover {
  background-color: #e3d1a6;
}
</style>