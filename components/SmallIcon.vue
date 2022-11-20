<template>
<div class="small-icon">
    <div class="bar bar1"></div>
    <div class="bar bar2"></div>
    <div class="bar bar3"></div>
    <div class="bar bar4"></div>
</div>

</template>

<script setup>

</script>

<style scoped>
.small-icon {
    display: grid;
    grid-template-columns: 1rem 1rem 1rem 1rem;
    transition: all 1s;
    z-index: 10;
    transform: rotate(180deg) scaleX(-1);
}

.bar {
    height: 20px;
    width: 10px;
    border: solid 2px #3730a3;
    background: #3730a3;

}

.bar1 {
    animation: moveUpAndDown1 1s infinite;
}
.bar2 {
    animation: moveUpAndDown2 .6s infinite;
}
.bar3 {
    animation: moveUpAndDown3 .9s infinite;
}
.bar4 {
    animation: moveUpAndDown4 .8s infinite;
}

@keyframes moveUpAndDown1 {
    0% {
        height:20px;
    }
    50% {
        height:4px;
    }
    100% {
        height:20px;
    }
}
@keyframes moveUpAndDown2 {
    0% {
        height:5px;
    }
    50% {
        height:13px;
    }
    100% {
        height:5px;
    }
}
@keyframes moveUpAndDown3 {
    0% {
        height:9px;
    }
    50% {
        height:12px;
    }
    100% {
        height:9px;
    }
}
@keyframes moveUpAndDown4 {
    0% {
        height:3px;
    }
    50% {
        height:17px;
    }
    100% {
        height:3px;
    }
}


</style>