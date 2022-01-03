<template>
    <div class="container mx-auto py-32 testimonial px-40">
        <div class="w-20 h-20 rounded-full bg-gray-300 overflow-hidden mb-2">
            <slot name="portrait"></slot>
        </div>
        <p class="mb-6"><slot name="content"></slot></p>
        <h5><slot name="author"></slot></h5>
    </div>
</template>