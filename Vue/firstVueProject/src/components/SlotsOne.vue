<template>
    <section>
        <h1>Slots Lesson One</h1>
        <p> this is text from the slot one component</p>
        <slot>This is slot text from slot one</slot>
        <custom-button>click me!</custom-button>
        <custom-button>enter drawing</custom-button>
        
        <slot name="greeting">no greeting provided</slot>
        <slot name="person">no person provided</slot>
    </section>
</template>