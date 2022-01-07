<template>
    <div class="w-full relative">
        <img class="chocolate transform translate-y-full" src="/src/assets/images/kahkow/chocolate.png">
        <div id="block" class="container fit mx-auto search-patterns">
            <text-block class="user-search">
                <template v-slot:title>
                    Users search Patterns
                </template>
                <template v-slot:description>
                    We started our research by identifying the consumers'
                    search criteria when googling chocolate products.<br>
                    <br>
                    We first focused on the New York Sector.<br>
                    <br>
                    The top searches showed us what was important
                    for the consumers and their needs.<br>
                    <br>
                    We also discovered pet owners were really interested
                    in giving their pets chocolate!
                </template>
            </text-block>
            <img src="/src/assets/images/kahkow/search-patterns.png" alt="What chocolate is gluten Fr">
        </div>
  
    </div>
</template>
<script>
import TextBlock from "../utils/text-block.vue"

export default {
    components: {
        TextBlock
    }
}
</script>
<style>
.chocolate {
    width: 14rem;
    position: absolute;
    right: 0;
    bottom: var(--global-spacing-xl);

}
.search-patterns {
    display: flex;
    flex-direction: column;
    gap: var(--global-spacing-lg)
}
.user-search.text-block {
    margin-bottom: 0;
    max-width: none;
    height: auto;
}

@media (min-width: 640px) {
    .search-patterns {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--global-spacing-2xl)
    }
}

@media (min-width: 1024px) {
    .chocolate {
        width: 20rem;
        position: absolute;
        right: 0;
        bottom: calc(3.25 * var(--global-spacing-2xl));
    }
}
</style>