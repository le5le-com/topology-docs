<template>
  <div class="community">
    <Header />
    <h1>This is an Video page</h1>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'Community',
  components: {
    Header,
    Footer
  }
});
</script>
<style lang="scss" scoped></style>
