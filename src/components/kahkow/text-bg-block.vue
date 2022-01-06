<template>
    <!--XDDDD-->
    <text-bg-block class="kahkow">
        <template v-slot:background>
            <slot name="background"></slot>
        </template>
        <template v-slot:title>
            <slot name="title"></slot>
        </template>
        <template v-slot:description>
            <slot name="description"></slot>  
        </template>
    </text-bg-block>
</template>
<script>
import TextBgBlock from "../utils/text-bg-block.vue"
export default {
    components: {
        TextBgBlock
    }
}
</script>
<style>
.kahkow.bg-block {
    height: calc(10 * var(--global-spacing-xl));
    box-shadow: 
        var(--global-spacing-xs)
        var(--global-spacing-xs)
        var(--color-gold);
}
.kahkow.bg-block .gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg, rgba(1, 1, 1, 0.5) 0%,
        transparent 100%);
    position: absolute;
    z-index: 1;
}

@media (min-width: 1024px) {
    .kahkow.bg-block {
        height: calc(15 * var(--global-spacing-xl));
        box-shadow: 
            var(--global-spacing-sm)
            var(--global-spacing-sm)
            var(--color-gold);
    }
}
</style>