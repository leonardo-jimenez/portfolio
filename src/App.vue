<template>
    <page-header></page-header>
    <router-view v-slot="{ Component }">
        <component :is="Component"/>
    </router-view>
</template>
<script>
import PageHeader from './components/utils/header.vue'

export default {
  components: {
    PageHeader
  }
}
</script>

