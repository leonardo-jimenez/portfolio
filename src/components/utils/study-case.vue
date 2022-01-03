<template>
    <div class="kahkow-bg relative overflow-hidden">
        <slot name="background"></slot>
        <div class=" h-full flex items-center relative z-10 py-32">
            <div class="container mx-auto kahkow-text flex justify-between items-center">
                <div>
                    <h2 class="mb-4 font-semibold"><slot name="title"></slot></h2>
                    <p class="mb-10">
                        <slot name="description"></slot>
                    </p>
                    <button class="study-case font-medium">
                        See case study
                    </button>
                </div>
                <slot name="side-image"></slot>
            </div>
        </div>
    </div>
</template>