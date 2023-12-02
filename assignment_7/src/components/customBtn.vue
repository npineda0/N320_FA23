<!-- slot used for custom button in addteam.vue & viewMember.vue -->
<template>
    <button class="customBtn"><slot>button</slot></button>
</template>

<style>
.customBtn {
    background-color: #2587c4;
    color: #fff;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
}
</style>