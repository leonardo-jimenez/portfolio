<template>
    <div class="container mx-auto flex justify-between items-center header">
        <div>
            <h4><b>leonardo</b>jimenez</h4>
        </div>
        <div class="w-full hide-mobile">
            <div class="justify-end flex items-center gap-8">
                <p class="text-xl">Work</p>
                <p class="text-xl">About</p>
                <div class="divisor"></div>
                <div class="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                    <img width="48" height="48" src="/src/assets/images/leonardo-icon.png" alt="Leonardo Jimenez">
                </div>
                <h5>Schedule a<br>call with me</h5>
                <a href="https://calendly.com/leonardo-a-jimenez/45min">
                    <button class="capitalize px-4 py-3 text-xl leading-6">
                        Let’s get started!
                    </button>
                </a>
            </div>
        </div>
        <img class="only-mobile" src="/src/assets/images/menu.svg">


    </div>
</template>
<style scoped>
.header {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}
.header h4, .header h5, .header p {
    color: var(--color-dark-blue);
}
.header h4 {
    font-size: var(--text-size-sm);
}
.header .hide-mobile {
    display: none;
}
.header .only-mobile {
    display: block;
}


@media (min-width: 1024px) {  
    .header .hide-mobile {
        display: block;
    }  
    .header .only-mobile {
        display: none;
    }
}
</style>