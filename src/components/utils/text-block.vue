<template>
    <div class="text-block">
        <h2><slot name="title"></slot></h2>
        <p><slot name="description"></slot></p>
    </div>
</template>
<style scoped>
.text-block h2 {
    font-size: var(--text-size-base);
    line-height: var(--text-line-height-base);
    margin-bottom: var(--global-spacing-base);
}
.text-block p {
    font-size: var(--text-size-sm);
    line-height: var(--text-line-height-sm);
    color: var(--color-low-gray);
}
.text-block {
    margin-bottom: calc(3.125 * var(--global-spacing-base));
}

@media (min-width: 640px) {
    .text-block {
        max-width: 50%;
    }
}

@media (min-width: 1024px)  {
    .text-block h2 {
        font-size: var(--text-size-xl);
        margin-bottom: var(--global-spacing-md);
        line-height: calc(3.625 * var(--global-spacing-base));
    }
    .text-block p {
        font-size: var(--text-size-base);
        line-height: var(--text-line-height-base);
    }
    .text-block {
        margin-bottom: calc(4 * var(--global-spacing-base));
    }
}
</style>