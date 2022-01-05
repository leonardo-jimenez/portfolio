<template>
    <div class="relative overflow-hidden">
        <slot name="background"></slot>
        <div id="block" class=" h-full flex items-center relative z-10 container mx-auto">
            <div class="study-case flex justify-between items-center grid">
                <div class="content">
                    <p v-show="nextCaseLabel" class="next">Next case</p>
                    <h2 class="font-semibold">
                        <slot name="title"></slot>
                    </h2>
                    <p><slot name="description"></slot></p>
                    <button class="font-medium whitespace-nowrap" @click="goToNextCase()">
                        See case study
                    </button>
                </div>
                <div class="side-image">
                    <slot name="side-image"></slot>     
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        nextCaseLabel: {
            type: Boolean,
            default: false
        },
        nextCaseHref: {
            type: String,
            required: true
        }
    },
    methods: {
        goToNextCase() {
            console.log(this.nextCaseHref)
            this.$router.push({path: this.nextCaseHref})
        }
    }
}
</script>
<style scoped>
.study-case .next  {
    text-transform: uppercase;
    margin-bottom: var(--global-spacing-sm);
}
.study-case {
    padding-left: var(--global-spacing-xl);
    padding-right: var(--global-spacing-xl);
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0rem;
}
.study-case h2, .study-case p {
    color: var(--color-white)
}
.study-case h2 {
    font-size: var(--text-size-base);
    line-height: var(--text-line-height-base);
    margin-bottom: var(--global-spacing-base);
}
.study-case p {
    font-size: var(--text-size-sm);
    line-height: var(--text-line-height-sm);
    margin-bottom: var(--global-spacing-md);
    max-width: 16rem;
}
.study-case .side-image {
    display: none;
}

button {
    transition:
        background-color 0.1s ease,
        color 0.1s ease;
    background-color: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-white);
    box-sizing: border-box;
    font-size: var(--text-size-xs);

}
button:hover {
    transition:
        background-color 0.1s ease,
        color 0.1s ease;
    background-color: var(--color-white);
    color: var(--color-black);
}


@media (min-width: 640px) {
    button {
        font-size: var(--text-size-sm);
        border: 4px solid var(--color-white);
    }
    .study-case {
        padding-left: 0rem;
        padding-right: 0rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
    }
    .study-case .side-image {
        display: block;
    }
}
@media (min-width: 1024px) {
    .study-case h2 {
        font-size: var(--text-size-xl);
        line-height: var(--text-line-height-xl);
    }
    .study-case p {
        font-size: var(--text-size-base);
        line-height: var(--text-line-height-base);
        margin-bottom: var(--global-spacing-xl);
        max-width: 24rem;
    }
}
</style>