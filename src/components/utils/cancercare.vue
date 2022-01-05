<template>
    <!-- CANCERCARE STUDY CASE -->
    <study-case class="cancercare-bg" nextCaseHref="/cancercare">
        <template v-slot:background>
            <img class="w-full h-full object-cover absolute" src="/src/assets/images/utils/cancercare-bg.png">
        </template>
        <template v-slot:title>Cancercare</template>
        <template v-slot:description>
            Redesigning the digital
            experience for cancer patients
        </template>
        <template v-slot:side-image>
            <img src="/src/assets/images/utils/cancercare-pg-rep.png" alt="Cancercare Page Presentation">
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
.cancercare-bg {
    background: linear-gradient(
        263.91deg, 
        var(--color-sky-blue) 17.54%, 
        var(--color-night-blue) 102.23%);
}
</style>