<template>
    <div class="container mx-auto">
        <div class="description">
            <h1 class="w-max font-medium txt-dk-blue">
                I use design to <mark>solve</mark><br>
                business problems.<br>
                I can solve <mark>yours</mark>.
            </h1>
            <p class="txt-gray">
                I’m a multidisciplinary designer with a background in industrial
                and software engineering. I use those disciplines alongside UX
                design to craft digital products that strike a balance between user
                delight and business goals.
            </p>
            <a href="https://calendly.com/leonardo-a-jimenez/45min">
                <button>Let's work together!</button>
            </a>
        </div>
    </div>
</template>
<style scoped>
.description {
    padding-top: 3.75rem;
    padding-bottom: 1.5rem;
    width: 100%;
}
.description h1 {
    margin-bottom: var(--global-spacing-sm);
}
.description button {
    padding: var(--button-padding-y-sm) var(--button-padding-x-sm);
    line-height: var(--text-line-height-sm);
    font-size: var(--text-size-sm);
}


@media (min-width: 428px) {
    .description {
        width: min-content;
    }
}

@media (min-width: 640px) {
    .description h1 {
        margin-bottom: var(--global-spacing-base);
    }
    .description p {
        margin-bottom: var(--global-spacing-md);
    }
    .description button {
        padding: var(--button-padding-y-base) var(--button-padding-x-base);
        line-height: var(--text-line-height-base);
        font-size: var(--text-size-base);
    }
}

@media (min-width: 1024px) {
    .description {
        padding-top: 6.75rem;
        padding-bottom: 4.25rem;
    }
    .description h1 {
        margin-bottom: var(--global-spacing-md);
    }
}

</style>