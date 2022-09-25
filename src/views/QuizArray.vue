<script setup>
const arrayFrutas = [
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
    },
    {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
    },
    {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
    },
];
</script>

<template>

    <div>
        <div class="card">
            <heade class="card-header"> Card Array fruts
                <div class="card">
                    <ul>
                        <li v-for="(frutas, name) in arrayFrutas" :key="name"> {{frutas.name}} - {{frutas.price}} - {{frutas.description}} </li>
                    </ul>
                </div>
            </heade>
        </div>
    </div>
</template>

<style scoped>

</style>
