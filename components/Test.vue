<template>
    <div id="test">
        <div id="boxer" class="border-4 border-red-500 rounded bg-red"></div>
        <div id="boxer" class="border-4 border-green-900 rounded  bg-green-900"></div>
        <div id="boxer" class="border-4 border-teal-300 rounded bg-teal-300"></div>
        <div id="boxer" class="border-4 border-indigo-300 rounded bg-indigo-300"></div>
        <div id="boxer" class="border-4 border-yellow-300 rounded bg-yellow-300"></div>
        <div id="boxer" class="border-4 border-fuchsia-300 rounded bg-fuchsia-300"></div>
        <div id="boxer" class="border-4 border-orange-300 rounded bg-orange-300"></div>
        <div id="boxer" class="border-4 border-green-500 rounded bg-green-500"></div>
        <div id="boxer" class="border-4 border-blue-500 bg-blue-500 rounded"></div>
    </div>
</template>

<script setup>

</script>

<style scoped>

#test {
    /* animation: gridMove 2s infinite; */
    display: grid;
    grid-template-columns: 1rem 1rem 1rem;
    grid-template-rows: 1rem 1rem 1rem;
    justify-content: center;
    animation: gridMove 5s infinite;
    transition: all 1s;
    z-index: 10;
}

#test:hover {
    animation: gridMove 5s infinite;
}

.pic {
    border-radius: 50%;
    height: 100%;
    width: 100%;
}

#boxer {
    /* animation: random 10s infinite; */
}

@keyframes random {
    0% {
        margin:3px;
    }
    40% {
        margin:5px;
    }
    80% {
        margin:4px;
    }
    100% {
        margin:3px;
    }
}
@keyframes gridMove {
    0% {
        grid-template-columns: 1rem 1rem 1rem;
        grid-template-rows: 1rem 1rem 1rem;
    }
    15% {
        grid-template-columns: .5rem 1.5rem 1rem;
        grid-template-rows: .5rem 1.5rem 1rem;
    }
    30% {
        grid-template-columns: .5rem 2rem .5rem;
        grid-template-rows: .5rem 2rem .5rem;
    }
    45% {
        grid-template-columns: .5rem 2rem .5rem;
        grid-template-rows: 2rem .5rem .5rem;
    }
    60% {
        grid-template-columns: 2rem .75rem .25rem;
        grid-template-rows: 2rem .5rem .5rem;
    }
    75% {
        grid-template-columns: .75rem 2rem .25rem;
        grid-template-rows: .5rem 2rem .5rem;
    }    
    100% {
        grid-template-columns: 1rem 1rem 1rem;
        grid-template-rows: 1rem 1rem 1rem;
    }

/* @keyframes gridMove {
    0% {
        grid-template-columns: 10rem 10rem 10rem;
        grid-template-rows: 10rem 10rem 10rem;
    }
    15% {
        grid-template-columns: 5rem 15rem 10rem;
        grid-template-rows: 5rem 15rem 10rem;
    }
    30% {
        grid-template-columns: 5rem 20rem 5rem;
        grid-template-rows: 5rem 20rem 5rem;
    }
    45% {
        grid-template-columns: 5rem 20rem 5rem;
        grid-template-rows: 20rem 5rem 5rem;
    }
    60% {
        grid-template-columns: 20rem 7.5rem 2.5rem;
        grid-template-rows: 20rem 5rem 5rem;
    }
    75% {
        grid-template-columns: 7.5rem 20rem 2.5rem;
        grid-template-rows: 5rem 20rem 5rem;
    }    
    100% {
        grid-template-columns: 10rem 10rem 10rem;
        grid-template-rows: 10rem 10rem 10rem;
    } */
}
</style>