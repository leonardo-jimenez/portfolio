<template>
    <page-footer class="cancercare-footer">
        <template v-slot:title>
            There’s a lot more I can do<br>
            for you. Let’s talk
        </template>
    </page-footer>
    <alpha-express :nextCaseLabel="true"></alpha-express>
</template>
<script>
import PageFooter from '../utils/footer.vue'
import AlphaExpress from '../utils/alpha-express.vue'

export default {
    components: {
        PageFooter,
        AlphaExpress
    }
}
</script>
<style>
.cancercare-footer.footer h5,
.cancercare-footer.footer h1 {
    color: var(--color-tourcoise);
}
.cancercare-footer.footer button {
    background-color: var(--color-tourcoise);
}
.cancercare-footer.footer.footer-bg {
    background-color: var(--color-ghost-tourcoise);
}
</style>