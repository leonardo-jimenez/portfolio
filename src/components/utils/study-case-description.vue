<template>
    <div class="sc-description">
        <div class="w-min content">
            <h3><slot name="name"></slot></h3>
            <h1 class="w-max">
                <slot name="title"></slot>
            </h1>
            <p><slot name="description"></slot></p>
        </div>
        <div class="flex gap-2">
            <div v-for="tag in tags" :key="tag">
                <h5>{{ tag }}</h5>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        tags: Array
    },
}
</script>
<style scoped>
.sc-description {
    padding-top: var(--global-spacing-2xl);
    padding-bottom: var(--global-spacing-xl);
}
.sc-description h3{
    font-size: var(--text-size-sm);
    line-height: var(--text-line-height-sm);
    margin-bottom: calc(var(--global-spacing-sm) / 2);
    text-transform: uppercase;
}
.sc-description p {
    color: var(--color-smooth-gray);
    margin-bottom: 0;
}
.sc-description h5 {
    font-size: var(--text-size-2xs);
    line-height: var(--global-spacing-base);
    padding: calc(var(--global-spacing-sm) / 2) var(--global-spacing-md);
    white-space: nowrap;
    background-color: var(--color-lite-gray);
    color: var(--color-low-gray);
    display: none;
}

@media (min-width: 640px) {
    .sc-description .content {
        margin-bottom: var(--global-spacing-base);
    }
    .sc-description h5 {
        display: block;
    }
    .sc-description p {
        margin-bottom: var(--global-spacing-base); 
    }
}


@media (min-width: 1024px) {
    .sc-description h3{
        font-size: var(--text-size-lsm);
        line-height: var(--text-line-height-lsm);
    }
    .sc-description {
        padding-top: calc(5 * var(--global-spacing-base));
        padding-bottom: calc(4 * var(--global-spacing-base));
    }
}


@media (min-width: 1200px) {
    .sc-description h3{
        font-size: var(--text-size-base);
        line-height: var(--text-line-height-base);
    }
    .sc-description h5 {
        font-size: var(--global-spacing-md);
        line-height: var(--global-spacing-lg);
        padding: var(--global-spacing-sm) var(--global-spacing-xl);
    }
}

</style>