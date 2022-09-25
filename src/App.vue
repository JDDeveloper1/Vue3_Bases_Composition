<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <ul>
      <RouterLink to="/">
        <li>Home</li>
      </RouterLink>
      <RouterLink to="/firstparam">
        <li> 1 First Part</li>
      </RouterLink>
      <RouterLink to="/quizarray">
        <li>Prueba Array</li>
      </RouterLink>
      <RouterLink to="/thirdpart">
        <li>3 parte</li>
      </RouterLink>
      <RouterLink to="/fourthpart">
        <li>4 parte</li>
      </RouterLink>
      <RouterLink to="/fifthpart">
        <li>5 parte(reactividad)</li>
      </RouterLink>
      <RouterLink to="/sixthpart">
        <li>6 parte(Computed)</li>
      </RouterLink>
      <RouterLink to="/quizarraytwo">
        <li>Quiz Insert Data Array</li>
      </RouterLink>
    </ul>
    <br>
    <RouterView />
  </div>
</template>

<style>
@import './assets/main.css';
</style>