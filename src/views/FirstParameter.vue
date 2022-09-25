<script setup>
    const name = "Vue Dinamico";
    const styleColor = "color: blue";
    const arrayColor = ["Blue", "Red", "Green", "Yellow", "peru"];
    const active = true; //false 
    const active1 = false; //true
    const active2 = null; //true-false
    const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
    </script>
        
        
    <template>
        <!-- interpolaciones -->
        <H1> Hola soy {{ name }}</H1>
        <!-- con expresiones de retorno -->
        <H1> Hola soy {{ name.toUpperCase() }} con expresiones de javaScript </H1>
        <!-- la interpolacion nos de vulve el array en pantalla en forma de texto -->
        <h2>{{ arrayColor }}</h2>}
    
        <br>
    
        <!-- v-bind -->
        <h2 v-bind:style="styleColor">Soy azul</h2>
        <!--  Abrevacion  -->
        <h2 :style="styleColor">Soy azul abreviado</h2>
        <!-- v-bind array -->
        <h2 :style="`color: ${arrayColor[4]}`">Soy un color del array</h2>
    
        <br>
    
        <!--  uso de expresiones : con operdor ternario -->
        <h2>
            {{ active ? "Estoy activo con expressiones" : "estoy inactivo"}}
        </h2>
    
        <br>
    
        <h1 :style="`color: ${arrayColor[2]}`">Directivas: aplicar actualizaciones de forma reactiva al DOM </h1>
    
        <!-- Directiva if / else:  destruye el elemento del DOM -->
        <h2 v-if="active1">Estoy activo con Directivas if</h2>
        <!-- <h2 v-else="active1">Estoy activo con Directivas</h2> debe estar seguido de if para que funcione -->
        <p v-if="!active1"><span>md-pencil</span> inactivo con Directivas if</p>
    
        <!-- uso de v-else-if -->
        <h2 v-if="active2 === true">Estoy activo con Directivas v-else-if</h2>
        <p v-else-if="active2 === false">Estoy inactivo con Directivas v-else-if</p>
        <p v-else>Estoy indeciso con Directivas v-else-if 💔</p>
    
        <br>
    
        <!-- Directiva show:  el elemento se mantiene en el template, cambia de estado por css, a display NONE -->
        <h2 v-show="active">Estoy Activo con la directiva show</h2>
    
        <!-- Directiva v-for: Se usa para iterar sobre una lista de elementos. Vue nos proporciona una pista de identidad de cada nodo para reutilizar y ordenar los elementos existentes, lo unico es que se debe proporcionar una Key unica para cada elemento. -->
        <ul>
            <li v-for="(frutas, index) in arrayFrutas" :key="index"> {{index}} - {{frutas}} </li>
        </ul>
    </template>
        
        
        
    <style scoped>
    h1 {
        color: yellow;
    }
    </style>