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
}
.kahkow span{
    color: var(--color-gold);
}

.kahkow .image img {
    margin-left: var(--global-spacing-xl);
}

@media (min-width: 640px) {
    .kahkow .image img {
        margin-left: auto;
    }
}
@media (min-width: 1024px) {
    .kahkow .image {
        top: 0;
        display: grid;
        position: absolute;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding-top: calc(5 * var(--global-spacing-base));
    }
    .kahkow .image img {
        width: min(50%, calc(45 * var(--global-spacing-base)));
    }
}
</style>