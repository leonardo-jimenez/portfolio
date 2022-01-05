<template>
    <!-- KAWKOW STUDY CASE -->
    <study-case class="kahkow-bg">
        <template v-slot:background>
            <img class="w-full h-full object-cover absolute" src="/src/assets/images/utils/kahkow-bg.png">
        </template>
        <template v-slot:title>KahKow</template>
        <template v-slot:description>
            Designing premium chocolate
            shopping for the new normal
        </template>
        <template v-slot:side-image>
            <img src="/src/assets/images/utils/kahkow-pg-rep.png" alt="Kawkow Page Presentation">
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
.kahkow-bg {
    background: linear-gradient(
        263.91deg, 
        var(--color-cream) 17.54%, 
        var(--color-chocolate) 102.23%);
}
</style>