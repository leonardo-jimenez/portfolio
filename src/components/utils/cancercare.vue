<template>
    <!-- CANCERCARE STUDY CASE -->
    <study-case class="cancercare-bg">
        <template v-slot:background>
            <img class="w-full h-full object-cover absolute" src="/src/assets/images/cancercare-bg.png">
        </template>
        <template v-slot:title>Cancercare</template>
        <template v-slot:description>
            Redesigning the digital<br>
            experience for cancer patients
        </template>
        <template v-slot:side-image>
            <img src="/src/assets/images/cancercare-pg-rep.png" alt="Cancercare Page Presentation">
        </template>
    </study-case>
</template>
<script>
import StudyCase from './study-case.vue'
export default {
    components: { StudyCase }
}
</script>