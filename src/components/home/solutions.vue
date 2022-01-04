<template>
    <hr>
    <div class="container mx-auto flex flex-col justify-between solutions md:flex-row">
        <h4 class="txt-dk-blue">I HAVE DESIGNED SOLUTIONS FOR...</h4>
        <div class="grid grid-cols-4 items-center justify-items-center gap-5">
            <img src="/src/assets/images/nav-canada.png" alt="Nav Canada">
            <img src="/src/assets/images/python-sf.png" alt="Python Software Fundation">
            <img src="/src/assets/images/stage-rights.png" alt="Stage Rights">
            <img src="/src/assets/images/read-the-docs.png" alt="Read The Docs">
        </div>
    </div>
</template>
<style scoped>
.solutions {
    padding-top: var(--global-spacing-lg);
    padding-bottom: var(--global-spacing-lg);
    gap: var(--global-spacing-md);
    flex-direction: column;
}
.solutions h4 {
    font-size: var(--text-size-sm);
}

@media (min-width: 640px) {
    .solutions h4 {
        font-size: var(--text-size-base);
    }
}

@media (min-width: 1024px) {
    .solutions {
        padding-top: var(--global-spacing-2xl);
        padding-bottom: var(--global-spacing-2xl);
        flex-direction: row;
        gap: 0rem;
    }
}
</style>