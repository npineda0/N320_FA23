<template>
    <header>
        <nav>
            <RouterLink to="/" class="navLink">Home</RouterLink>
            <RouterLink to="/teams" class="navLink">Teams</RouterLink>
        </nav>
    </header>
</template>

<style>
    nav {
        height: 30px;
        width: 100px;
    }
    .navLink {
        padding: 10px;
        margin-right: 10px;
        font-size: 20px;
        text-decoration: none;
        background-color: blue;
        color: white;
        border-radius: 20px;
    }
</style>