<template>
    <div class="the-need relative overflow-hidden">
        <img class="w-full h-full object-none object-center absolute" src="/src/assets/images/kahkow/bg-need.png" alt="Kahkow">
        <div id="block" class="container fit mx-auto relative z-10">
            <h2>The need</h2>
            <p>
                Kah Kow is a one-stop shop for chocolate makers and chocolate lovers.
                It offers unique cacao bean profiles and cacao products such as liquor,
                nibs, butter, and powder.<br>
                <br>
                Most of the sales for the brand were direct sales made in their physical store in Brooklyn, New York.<br> 
                <br>
                After covid, most stores were closed, creating the urgency for an e-commerce store where users could consume the brand.
            </p>
        </div>
    </div>
</template>
<style scoped>
.the-need {
    background-color: var(--color-ghost-brown);
}
.the-need h2 {
    font-size: var(--text-size-base);
    line-height: var(--text-line-height-base);
    margin-bottom: var(--global-spacing-base);
}
.the-need p {
    font-size: var(--text-size-sm);
    line-height: var(--text-line-height-sm);
    color: var(--color-low-gray);
}

@media (min-width: 640px) {
    .the-need #block.container {
        max-width: 24rem;
    }
    .the-need img {
        object-fit: contain;
    }
    .the-need {
    background: linear-gradient(
        135deg, 
        var(--color-white) 0%, 
        var(--color-ghost-brown) 50%);
    }
    
}
@media (min-width: 1024px)  {
    .the-need #block.container {
        max-width: 36rem;
    }
    .the-need img {
        object-fit: none;
    }
    .the-need h2 {
        font-size: var(--text-size-xl);
        margin-bottom: var(--global-spacing-md);
        line-height: calc(3.625 * var(--global-spacing-base));
    }
    .the-need p {
        font-size: var(--text-size-base);
        line-height: var(--text-line-height-base);
    }
}

</style>