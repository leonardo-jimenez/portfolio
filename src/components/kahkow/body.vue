<template>
    <description></description>
    <slot name="footer"></slot>
    <cancercare></cancercare>    
</template>
<script>
import Description from "./description.vue"
import Cancercare from '../utils/cancercare.vue'
export default {
    components: {
        Description,
        Cancercare
    }
}
</script>