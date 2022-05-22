<template>
  <div class="h-100">
    <nuxt-child />
    <div v-if="toast" class="position-fixed bottom-0 end-0 p-3" style="z-index: 1100">
      <div id="liveToast" :class="[toast.class ? `${toast.class}` : '']" class="toast border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div  class="toast-body d-flex justify-content-between align-items-start">
          <div>
            <h6 class="mb-3" v-if="toast.data">{{ toast.data.header }}</h6>
            <p class="m-0 text-black-51 caption" v-if="toast.data">{{toast.data.body}}</p>
          </div>
          <div class="cursor-pointer d-inline-flex align-items-center justify-content-center rounded-circle" data-bs-dismiss="toast" aria-label="Close" style="height: 32px; width: 32px; background: rgba(146, 204, 191, 0.1);">
            <span class="ed-x fs-4 fw-bold"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters({
      toast: "auth/toast",
    })
  }
}
</script>

<style scoped>

</style>
