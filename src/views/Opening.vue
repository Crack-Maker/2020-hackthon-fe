<template>
  <div class="gif">
    <img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/opening.gif" />
  </div>
</template>
<script>
export default {
  mounted() {
    // setTimeout(() => {
    //   this.$router.push({
    //     path: "/"
    //   });
    // }, 6200);
    localStorage.setItem("isOpened", true);
  }
};
</script>
<style scoped>
img {
  width: 11rem;
  position: fixed;
  top: 0;
  left: 0;
}

* { touch-action: none}

</style>