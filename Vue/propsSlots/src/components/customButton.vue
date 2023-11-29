<template>
    <button class="customBtn"><slot>Custom Button</slot></button>
</template>

<style>
.customBtn {
    background-color:blueviolet;
    color:white;
    padding:1em;
    border-radius:10px;
}
.customBtn:hover {
    background-color:blue;
}
</style>