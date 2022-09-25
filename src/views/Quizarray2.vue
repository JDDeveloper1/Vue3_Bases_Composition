<!-- Practica

Agrega un array y su respectivo método y botón add para almacenar los números favoritos del usuario.
Pinta ese array utilizando v-for.
Utiliza :disabled en el botón add, para que solo se pueda presionar si el array no contiene números repetidos. 
(utiliza una propiedad computada).
:disabled si es true el botón se bloquea: -->

<!-- <script setup>
import { ref, computed } from 'vue'
const title = "Vue Fundamental";


const counter = ref(0);
const arrayFavorite = ref([]);

//Valores
const increment = () => counter.value++;
const decrement = () => counter.value--;
const reset = () => counter.value = 0;
const add = () => {
    arrayFavorite.value.push(counter.value);
};

const blockAddBtn = computed(() => {
    const number = arrayFavorite.value.find(num => num === counter.value);
    /*  if (number === 0) return true;
     return number ? true : false; */
    //abreviado
    return number || number === 0;
});

//condicionales
/* const classCounterComputed = computed(() => {
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
}); */
//abreviado
const classCounterComputed = computed(() => {
    if (counter.value === 0) {
        return "zero";
    }
    return counter.value > 0 ? "positive" : "negative";
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
        <h2 :class="classCounterComputed">{{ counter }}</h2>
        <button @click="increment">Click Incremet</button>
        <br>
        <button @click="decrement">Click Decrement</button>
        <br>
        <button @click="reset">Click Reset</button>
        <br>
        <button @click="add" :disabled="blockAddBtn">Add Number</button>
        <br />
        {{arrayFavorite}}
        <ul>
            <li v-for="(num, index) in arrayFavorite" :key="index">
                {{ num }}
            </li>
        </ul>
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
</style>   -->

<script setup>
import { ref, computed } from "vue";

const title = "Vue Fundamental";

const counter = ref(0);
const arrayCounter = ref([]);

const increment = () => {
    counter.value++;
};

const decrement = () => {
    counter.value--;
};

const reset = () => {
    counter.value = 0;
};

const add = () => {
    arrayCounter.value.push(counter.value);
};

const blockNumber = computed(() => {
    const number = arrayCounter.value.find((num) => num === counter.value);
    return number || number === 0;
});

const classCounter = computed(() => {
    if (counter.value === 0) {
        return "zero";
    }
    return counter.value > 0 ? "positive" : "negative";
});
</script>
    
<template>
    <div class="container text-center mt-5">
        <header>
            <h1>{{title.toUpperCase()}}</h1>
        </header>
        <br><br>
        <h2>{{ ` ${title} --- Quiz insert data array Computada ` }}</h2>
        <br><br>
        <h2 :class="classCounter">
            {{ counter }}
        </h2>

        <div class="btn-group">
            <button @click="increment" class="btn btn-success">Incremet</button>
            <button @click="decrement" class="btn btn-danger">Decrement</button>
            <button @click="reset" class="btn btn-secondary">Reset</button>
            <button @click="add" :disabled="blockNumber" class="btn btn-primary">
                Add
            </button>
        </div>
        <h2 class="mt-3">Mis Favoritos</h2>
        <ul class="list-group mt-2">
            <li class="list-group-item" v-for="(item, index) in arrayCounter" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
    
<style>
.negative {
    color: red;
}

.positive {
    color: green;
}

.zero {
    color: rgb(199, 185, 185);
}
</style>
    