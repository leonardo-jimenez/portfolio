<template>
    <div class="kahkow w-full relative overflow-hidden">
        <div class="container mx-auto">            
            <study-case-description :tags="tags">
                <template v-slot:name>
                    <span>Kahkow</span>
                </template>
                <template v-slot:title>
                    Designing premium<br>
                    chocolate shopping<br>
                    for the new normal
                </template>
                <template v-slot:description>
                    Affected by covid restrictions and lockdowns KahKow
                    needed to connect with their customers where they
                    were, the internet.
                </template>
            </study-case-description>
        </div>
        <div class="image w-full">
            <img class="col-span-2 site-example" src="/src/assets/images/kahkow/pg-demostration.png">
        </div>
    </div>
</template>
<script>
import StudyCaseDescription from "../utils/study-case-description.vue"
export default {
    components: {
        StudyCaseDescription
    },
    data() {
        return {
            tags: ['UX Design', 'Research', 'Frontend']
        }
    }
}
</script>
<style scoped>
.kahkow {
    height: 100%;
    max-height: 50rem;
}
.kahkow span{
    color: var(--color-gold);
}

.kahkow .image img {
    margin-left: var(--global-spacing-xl);
}

@media (min-width: 640px) {
    .kahkow .image {
        top: 0rem;
        display: grid;
        position: absolute;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding-top: var(--global-spacing-2xl);
    }
    .kahkow .image img {
        width: min(max(45%, 20rem), calc(50 * var(--global-spacing-base)));
        margin-left: auto;
    }
}
@media (min-width: 1024px) {
    .kahkow .image {
        padding-top: calc(5 * var(--global-spacing-base));
    }
}
</style>