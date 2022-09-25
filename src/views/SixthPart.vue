<script setup>
import { ref, computed } from 'vue'
const title = "Vue Fundamental";

const counter = ref(0);

const increment = () => counter.value++;


const decrement = () => counter.value--;

const reset = () => counter.value = 0;


/*     // método
const classCounter = () => {
    if (counter.value === 0) {
        return "zero";
    }
    return counter.value > 0 ? "positive" : "negative";
}; */

// Compueted recibe adentro una funcion y simpere debe retornar algo.
const classCounterComputed = computed(() => {
    //return
    if (counter.value == 0) {
        return 'zero';
    }
    if (counter.value > 0) {
        return 'positive';
    }
    if (counter.value < 0) {
        return 'negative';
    }
});

</script>
    
<template>
    <div>
        <header>
            <h1>{{title.toUpperCase()}}</h1>
        </header>
        <br><br>
        <h2>{{ ` ${title} --- Reactividad Computada ` }}</h2>
        <br><br>

        <!-- insert for method
        <h2 :class="classCounter()">{{ counter }}</h2> -->

        <h2 :class="classCounterComputed">{{ counter }}</h2>
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

.zero {
    color: peru;
}
</style>  