<template>
    <description></description>
    <solutions></solutions>

    <kahkow></kahkow>
    <!-- DAISY POLANCO TESTIMONIAL -->
    <testimonial>
        <template v-slot:portrait>
            <img width="80" height="80" src="/src/assets/images/utils/daisy-polanco.png" alt="Daisy Polanco, Projects Coordinator, Kah Kow">
        </template>
        <template v-slot:content>
            “Something I really enjoyed about working with Leo is the guidance during
            the whole process. The sharing of your methodology with the supervisors was
            a game-changer for us.”
        </template>
        <template v-slot:author>
            Daisy Polanco, Projects Coordinator, Kah Kow
        </template>
    </testimonial>

    <alpha-express></alpha-express>
    <!-- JOSE RAFAEL TESTIMONIAL -->
    <testimonial>
        <template v-slot:portrait>
            <img width="80" height="80" src="/src/assets/images/utils/jose-rafael.png" alt="Jose Rafael de la cruz, UX LEAD, Universal Insurance">
        </template>
        <template v-slot:content>
            “Everytime I have worked with Leonardo I see that he not only focus
            on the look and feel of things but in the function. The ability to
            balance the users with the business side of things is rare in the wild.
            He has it”
        </template>
        <template v-slot:author>
            Jose Rafael de la cruz, UX LEAD, Universal Insurance
        </template>
    </testimonial>

    <cancercare></cancercare>
    <!-- SARA COEN TESTIMONIAL -->
    <testimonial>
        <template v-slot:portrait>
            <img width="80" height="80" src="/src/assets/images/utils/sara-coen.png" alt="Sarah Coen, Senior Partner Coen & papagikos">
        </template>
        <template v-slot:content>
            “We didn’t expect the amount of quality that was placed in the design
            of our identity and the guidance through the process.”
        </template>
        <template v-slot:author>
            Sarah Coen, Senior Partner Coen & papagikos
        </template>
    </testimonial>

    <slot name="footer"></slot>
</template>

<script>
import Description from './description.vue'
import Solutions from './solutions.vue'
import Testimonial from './testimonial.vue'
import Kahkow from '../utils/kahkow.vue'
import AlphaExpress from '../utils/alpha-express.vue'
import Cancercare from '../utils/cancercare.vue'

export default {
    components: {
        Description,
        Solutions,
        Testimonial,
        Kahkow,
        AlphaExpress,
        Cancercare
    }
}
</script>