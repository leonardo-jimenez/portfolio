<template>
    <page-footer class="kahkow-footer">
        <template v-slot:title>
            Do you want me on your<br>
            team? Let’s talk about it
        </template>
    </page-footer>
    <cancercare :nextCaseLabel="true"></cancercare>
</template>
<script>
import PageFooter from '../utils/footer.vue'
import Cancercare from '../utils/cancercare.vue'

export default {
    components: {
        PageFooter,
        Cancercare
    }
}
</script>
<style>
.kahkow-footer.footer h5,
.kahkow-footer.footer h1 {
    color: var(--color-black);
}
.kahkow-footer.footer button {
    background-color: var(--color-black);
}
</style>