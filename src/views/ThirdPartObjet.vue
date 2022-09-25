<script setup>
const title = "Vue Fundamental ";
const active = true; //false
const objetFruit = {
    id: 1,
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
};
const arrayFrutas = [
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 0,
    },
    {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 10,
    },
    {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 20,
    },
];
</script>

<template>
    <div>
        <header><h1>{{title.toUpperCase()}}</h1></header>
        <br><br>
        <h2>{{ ` ${title} --- V-for con Objetos ` }}</h2>
        <br />
        {{ objetFruit }} ----- Mal agregado <br /><br />
        <ul>
            <h3><strong>Listado frutas Objetos</strong></h3>
            <br />
            <li v-for="(value, propiedad, index) in objetFruit" key="index">
                {{ index }} - {{ propiedad }} : {{ value }}
            </li>
        </ul>
    </div>
    <br /><br /><br />
    <div>
        <h2>{{ ` ${title} --- V-for / V-if` }}</h2>
        <p>
            <strong>Tener cuidado por que el IF tiene mayor prioridad que el FOR cuando se colocan en la misma linea , entonces no sucede nada, debe hacerse en otro filtrado
                LA solucion es llevarlo a un template
            </strong>
        </p>
        <br />
        <br />
      <!--   <ul>
            <h3><strong>Listado frutas con stock filtrado mal ejecutado</strong></h3>
            <br />
            <li v-if="item.stock > 0" v-for="item in arrayFrutas" :key="item.name">
              - {{ item.name }} - {{ item.price }} - {{ item.description }}
            </li>
        </ul> -->
     <!--    <ul>
            <h3><strong>Listado frutas con stock filtrado ejecutado a medias</strong></h3>
            <br />
            <li v-if="active" v-for="item in arrayFrutas" :key="item.name">
              <span v-if="item.stock > 0" >- {{ item.name }} - {{ item.price }} - {{ item.description }}</span>  
            </li>
        </ul> -->
        <h3><strong>Listado frutas con stock filtrado</strong></h3>
        <ul v-if="active">
            <br />
            <template v-for="item in arrayFrutas" :key="item.name">
                <li v-if="item.stock > 0" >{{ item.name }} - {{ item.price }} - {{ item.description }} </li>
            </template>
        </ul>
    </div>
</template>

<style>

</style>
