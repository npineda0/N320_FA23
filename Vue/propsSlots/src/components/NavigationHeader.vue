<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/students">Students</RouterLink>
            <RouterLink :to="{name:'props'}"></RouterLink>
        </nav>
    </header>
</template>