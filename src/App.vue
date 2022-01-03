<template>
    <page-header></page-header>
    <router-view v-slot="{ Component }">
        <component :is="Component">
            <template v-slot:footer>
                <page-footer></page-footer>
            </template>
        </component>
    </router-view>
</template>
<script>
import PageHeader from './components/utils/header.vue'
import PageFooter from './components/utils/footer.vue'

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

