<template>
    <description></description>
    <need></need>
    <challenge></challenge>
    <search-patterns></search-patterns>
    <page-footer></page-footer>
</template>
<script>
import Description from './description.vue'
import PageFooter from './footer.vue'
import Need from './need.vue'
import Challenge from './challenge.vue'
import SearchPatterns from './search-patterns.vue'

export default {
    components: {
        Description,
        PageFooter,
        Need,
        Challenge,
        SearchPatterns
        
    }
}
</script>