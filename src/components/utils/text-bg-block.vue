<template>
    <div class="bg-block relative overflow-hidden bg-gray-300">
        <slot name="background"></slot>
        <div class="content relative z-10">
            <h3><slot name="title"></slot></h3>
            <p><slot name="description"></slot></p>
        </div>
    </div>
</template>
<style scoped>
.bg-block .content {
    padding: 
        calc(2.5 * var(--global-spacing-base))
        calc(2.5 * var(--global-spacing-base));
}
.bg-block h3, .bg-block p {
    color: var(--color-white);
}
.bg-block h3 {
    font-size: var(--text-size-base);
    line-height: var(--text-line-height-base);
    margin-bottom: var(--global-spacing-base);
    font-weight: 600;
}
.bg-block p {
    font-size: var(--text-size-sm);
    line-height: var(--text-line-height-sm);
}

@media (min-width: 640px) {
    .bg-block .content {
        max-width: 50%;
    }
}

@media (min-width: 1024px) {
    .bg-block h3 {
        font-size: var(--text-size-lg);
        line-height: var(--text-line-height-lg);
        margin-bottom: var(--global-spacing-md);
    }
    .bg-block p {
        font-size: var(--text-size-base);
        line-height: var(--text-line-height-base);
    }
}

</style>