<template>
    <page-footer class="alpha-express-footer">
        <template v-slot:title>
            Do you want a proactive<br>
            designer in your Team?
        </template>
    </page-footer>
    <kahkow :nextCaseLabel="true"></kahkow>
</template>
<script>
import PageFooter from '../utils/footer.vue'
import Kahkow from '../utils/kahkow.vue'

export default {
    components: {
        PageFooter,
        Kahkow
    }
}
</script>
<style>
.alpha-express-footer.footer h5,
.alpha-express-footer.footer h1 {
    color: var(--color-soft-blue);
}
.alpha-express-footer.footer button {
    background-color: var(--color-soft-blue);
}
.alpha-express-footer.footer.footer-bg {
    background-color: var(--color-ghost-tourcoise);
}
</style>