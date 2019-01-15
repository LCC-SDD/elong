<template>
  <div id="admin">
  	<headers></headers>
  	<!-- <baidumap></baidumap> -->
  	<div class="content">
  		<router-view/>
  	</div>
	<footers></footers>
  </div>
</template>

<script>
import headers from './components/header/header.vue';
import baidumap from './components/map.vue';
import footers from './components/footer/footer.vue';
export default {
  name: 'admin',
  components:{
  	headers,
  	baidumap,
  	footers
  },
  methods:{
   
  },
  watch:{
   
  },
  computed:{
   
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
  #admin{
    width:100%;
    height: 100%;
    background: #fff;
  }
</style>
