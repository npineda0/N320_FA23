<template>
    <header>
        <nav>
            <p class="header">Web Dev Conference</p>
            <div>
                <RouterLink to="/" class="navLink">Sessions</RouterLink>
                <RouterLink to="/userSession" class="navLink">User Sessions</RouterLink>
            </div>
        </nav>
    </header>
</template>

<style>
    nav {
        background-color: lightgrey;
        border-radius: 20px;
        height: 120px;
        width: 1000px;
        margin-left: 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .header {
        font-size: 30px;
        font-family: 'Gill Sans';
    }
    .navLink {
        padding: 10px;
        margin-right: 20px;
        font-size: 15px;
        text-decoration: none;
        background-color: lightblue;
        color: white;
        border-radius: 20px;
        font-family: gill sans;
    }
    .navLink:hover {
        background-color: #23a6ba;
    }
</style>
