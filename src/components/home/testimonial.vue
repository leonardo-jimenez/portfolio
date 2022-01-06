<template>
    <div id="block" class="container mx-auto testimonial">
        <div class="portrait rounded-full bg-gray-300 overflow-hidden">
            <slot name="portrait"></slot>
        </div>
        <p class="mb-6"><slot name="content"></slot></p>
        <h5><slot name="author"></slot></h5>
    </div>
</template>
<style>
.testimonial p {
    color: var(--color-dark-blue);
    font-size: var(--text-size-base);
    line-height: var(--text-line-height-md);
}
.testimonial h5 {
    font-size: var(--text-size-xs);
    color: var(--color-smooth-gray);
    text-transform: uppercase;
}
.testimonial .portrait {
    width: calc(3.75 * var(--global-spacing-base));
    height: calc(3.75 * var(--global-spacing-base));
    margin-bottom: var(--global-spacing-base);
}

@media (min-width: 640px) {
    .testimonial .portrait {
        width: calc(5 * var(--global-spacing-base));
        height: calc(5 * var(--global-spacing-base));
        margin-bottom: var(--global-spacing-lg);
    }
    .testimonial p {
        font-size: var(--text-size-lg);
        line-height: calc(2.4 * var(--global-spacing-base))
    }
    .testimonial h5 {
        font-size: var(--text-size-sm);
    }
}

@media (min-width: 1024px) {
    #block.testimonial {
        padding-left: calc(12 * var(--global-spacing-base));
        padding-right: calc(12 * var(--global-spacing-base));
    }
}

</style>