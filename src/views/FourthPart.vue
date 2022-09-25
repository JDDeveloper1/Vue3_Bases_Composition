<script setup>
const title = "Vue Fundamental";

//Metodos
/* const handleClicks = ()  => {
    alert('Me diste clicking') ;
}; */

/*   const handleClicks = (message) => {
     alert(message);
  }; */

let counter = 0; //Counter

const increment = (message) => {
    console.log(message);
    counter++; //no es viable porque no puede ser sobre escrita 
    console.log(counter);
}


</script>

<template>
    <div>
        <header>
            <h1>{{title.toUpperCase()}}</h1>
        </header>
        <br><br>
        <h2>{{ ` ${title} --- Eventos ` }}</h2>
        <br><br>
        <button @click="handleClicks">Activame 0</button>
        <br><br>
        <button @click="handleClicks('You clicked 1')">Activame 1</button>
        <br>
        <button @click="handleClicks('You clicked 2')">Activame 2</button>
        <br><br>
        <button @click.right.prevent="handleClicks('text Right')"> Activame Right</button>
        <br>
        <button @click.left="handleClicks('text Left')"> Activame Left</button>
        <br>
        <button @click.middle="handleClicks('text Middle')"> Activame Middle</button>
        <br><br>
        <h2>{{counter}}</h2>
        <button @click="increment('aumetar Counter')">Aumentar</button>

    </div>
</template>

<style>

</style>