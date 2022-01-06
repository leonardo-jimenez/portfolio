<template>
    <div class="w-full relative the-challenge">
        <img class="dots transform -translate-y-1/2" src="/src/assets/images/kahkow/yellow-dots.png">
        <div id="block" class="container mx-auto">
            <text-block>
                <template v-slot:title>The challenge</template>
                <template v-slot:description>
                    Kah Kow serves two different demographics with the different
                    needs and purchasing behavior.<br>
                    <br>
                    The store needs to make it easy for their clients to sort and
                    search the +500 products types. The two archetypes of the
                    client are the following:
                </template>
            </text-block>
            <div class="blocks-bg">
                <text-bg-block>
                    <template v-slot:background>
                        <div class="gradient"></div>
                        <img class="w-full h-full absolute object-cover object-left" src="/src/assets/images/kahkow/the-chocolatier.png" alt="The Chocolatier">    
                    </template>
                    <template v-slot:title>
                        The Chocolatier
                    </template>
                    <template v-slot:description>
                        The most profitable clients of the store are companies and individuals
                        that make confectionery from chocolate.<br>
                        <br>
                        They purchase the raw materials in bulk and use the finished chocolate
                        products in the store to guide what they can accomplish.    
                    </template>
                </text-bg-block>

                <text-bg-block>
                    <template v-slot:background>
                        <div class="gradient"></div>
                        <img class="w-full h-full absolute object-cover object-left" src="/src/assets/images/kahkow/the-connoisseur.png" alt="The Connoisseur">    
                    </template>
                    <template v-slot:title>
                        The Connoisseur
                    </template>
                    <template v-slot:description>
                        Consumers with a sophisticated palate. They appreciate new and quality
                        chocolate products.<br>
                        <br>
                        Some of them with special needs like Kosher and dairy-free chocolate.
                    </template>
                </text-bg-block>
            </div>
        </div>
    </div>
</template>
<script>
import TextBlock from "../utils/text-block.vue"
import TextBgBlock from "./text-bg-block.vue"

export default {
    components: {
        TextBlock,
        TextBgBlock
    }    
}
</script>
<style scoped>
.the-challenge .dots {
    width: 5rem;
    position: absolute;
    right: 0;
}
.the-challenge .blocks-bg {
    display: flex;
    flex-direction: column;
    gap: var(--global-spacing-base);
}

@media (min-width: 1024px)  {
    .the-challenge .blocks-bg {
        display: flex;
        flex-direction: column;
        gap: var(--global-spacing-lg);
    }
    .the-challenge .dots {
        width: 10rem;
    }
}
</style>