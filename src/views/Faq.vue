<template>
  <div class="faq">
    <markdown-render ref="mdRender" :mdCode="updateLog" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Faq',
  components: {MarkdownRender},
  data():{
      updateLog:string,
      titleList:number[]
  }{
      return{
        updateLog:'',
        titleList:[] 
      }
  },
  async mounted(){
    this.titleList = [1,2];
    this.updateLog = await this.axios.get('/markdown/faq.md');
    this.$nextTick(()=>{
      (this.$refs.mdRender as any).handleRender()
    })
  }
});
</script>
<style lang="scss" scoped>
.faq{
  height: 100%;
}
</style>
