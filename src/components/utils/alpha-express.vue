<template>
    <!-- ALPHA EXPRESS STUDY CASE -->
    <study-case class="alpha-express-bg">
        <template v-slot:background>
            <img class="w-full h-full object-cover absolute" src="/src/assets/images/alpha-express-bg.png">
        </template>
        <template v-slot:title>Alpha Express</template>
        <template v-slot:description>
            Building the future of wealth<br>
            management and finances in the DR
        </template>
        <template v-slot:side-image>
            <img src="/src/assets/images/alpha-express-pg-rep.png" alt="Alpha Express Page Presentation">
        </template>
    </study-case>
</template>
<script>
import StudyCase from './study-case.vue'
export default {
    components: { StudyCase }
}
</script>