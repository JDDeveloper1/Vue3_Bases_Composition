<script setup>
import  {ref} from 'vue'
const title = "Vue Fundamental";
// counter ahora es una variable reactiva
const counter = ref(0);

const increment = () => counter.value++;
    // mutamos el valor a través de .value
    
const decrement = () =>counter.value--;

const reset = () => counter.value = 0;

</script>

<template>
    <div>
        <header>
            <h1>{{title.toUpperCase()}}</h1>
        </header>
        <br><br>
        <h2>{{ ` ${title} --- Reactividad ` }}</h2>
        <br><br>
        <h2  :class="counter >= 0 ? 'positive' : 'negative'">{{ counter }}</h2>
    <button @click="increment">Click Incremet</button>
    <br>
    <button @click="decrement">Click Decrement</button>
    <br>
    <button @click="reset">Click Reset</button>
    <br>
    </div>
</template>

<style scoped>
    .negative {
    color: red;
}

.positive {
    color: green;
}
</style>
