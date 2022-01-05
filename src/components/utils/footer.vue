<template>
    <div class="footer-bg footer p-block">
        <div id="block" class="container mx-auto">
            <h1 class="mb-8 font-medium">
                Do you want a proactive<br>
                designer in your Team?
            </h1>
            <div class="schedule">
                <a href="https://calendly.com/leonardo-a-jimenez/45min">
                    <button class="capitalize px-4 py-3 text-xl leading-6 whitespace-nowrap">
                        Let’s get started!
                    </button>
                </a>
                <div class="portrait rounded-full bg-gray-300 overflow-hidden">
                    <img width="48" height="48" src="/src/assets/images/utils/leonardo-icon.png" alt="Leonardo Jimenez">
                </div>
                <h5>Schedule a<br>call with me</h5>
            </div>
        </div>
    </div>
</template>
<style scoped>
.footer-bg {
    background-color: var(--color-ghost-gray);
}
.footer h1, .footer h5 {
    color: var(--color-dark-blue);
}
.footer button {
    font-size: var(--text-size-sm);
}
.footer .portrait {
    width: var(--global-spacing-xl);
    height: var(--global-spacing-xl);
}
.footer h5 {
    font-size: var(--text-size-xs);   
}
.footer .schedule {
    display: flex;
    align-items: center;
    gap: var(--global-spacing-base);
}

@media (min-width: 640px) {
    .footer .portrait {
        width: var(--global-spacing-2xl);
        height: var(--global-spacing-2xl);
    }
    .footer h5 {
        font-size: var(--text-size-sm);   
    }
    .footer .schedule {
        gap: var(--global-spacing-xl);
    }
}
</style>