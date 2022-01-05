<template>
    <!-- ALPHA EXPRESS STUDY CASE -->
    <study-case class="alpha-express-bg" nextCaseHref="/alpha-express">
        <template v-slot:background>
            <img class="w-full h-full object-cover absolute" src="/src/assets/images/utils/alpha-express-bg.png">
        </template>
        <template v-slot:title>Alpha Express</template>
        <template v-slot:description>
            Building the future of wealth
            management and finances in the DR
        </template>
        <template v-slot:side-image>
            <img src="/src/assets/images/utils/alpha-express-pg-rep.png" alt="Alpha Express Page Presentation">
        </template>
    </study-case>
</template>
<script>
import StudyCase from './study-case.vue'
export default {
    components: { StudyCase }
}
</script>
<style scoped>
.alpha-express-bg {
    background: linear-gradient(
        263.91deg, 
        var(--color-ocean-blue) 17.54%, 
        var(--color-deep-blue) 102.23%);
}
</style>