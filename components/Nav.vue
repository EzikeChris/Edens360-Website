<template>
  <div class="w-full md:px-24 md:border-solid md:border-0 md:border-b border-[#0020261a]">
    <div class="w-full flex justify-center">
      <nav
        class="
          px-4
          max-w-full
          w-full
          lg:max-w-full
          md:max-w-4xl
          2xl:max-w-7xl
          flex
          justify-between
          border-t-0 border-l-0 border-r-0 border-[0.5px]
          py-3
          mb-2
        "
      >
        <div class="flex justify-between w- items-center lg:w-[28rem]">
          <nuxt-link class="logo" to="/">
            <img
              class="max-w-none w-[141px] md:w-[199px]"
              src="~/assets/images/e-logo-dark.svg"
            />
          </nuxt-link>
          <div
            class="
              hidden
              lg:flex
              justify-between
              w-full
              ml-6
              font-source-sans-pro
              text-edens-green
            "
          >
            <div class="rounded-lg px-3 py-2">
              <NuxtLink to="/" class="cursor-pointer">Home</NuxtLink>
            </div>
            <div
              :class="[$route.path.includes('personal') ? 'active' : '']"
              class="rounded-lg px-3 py-2"
            >
              <NuxtLink to="/personal" class="cursor-pointer"
                >Personal</NuxtLink
              >
            </div>
            <div
              :class="[$route.path.includes('business') ? 'active' : '']"
              class="rounded-lg px-3 py-2"
            >
              <NuxtLink to="/business" class="cursor-pointer"
                >Business</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="items-center font-source-sans-pro hidden md:flex">
          <button
            class="
              hidden
              lg:block
              px-5
              py-3
              border border-eden-mint
              bg-white
              rounded-lg
              text-eden-green text-sm
              mr-3
              font-bold
            "
          >
            Log in
          </button>
          <button
            class="
              px-5
              py-3
              bg-eden-green
              rounded-lg
              font-bold
              text-white text-sm
            "
          >
            Get Started now
          </button>
        </div>
        <div class="items-center font-source-sans-pro block md:hidden">
          <button class="block md:hidden" @click="openNav">
            <img
              class="max-w-none w-6 h-4"
              src="~/assets/images/hamburger.svg"
            />
          </button>
        </div>
      </nav>
    </div>
    <hr
      class="
        border-solid border border-jungle-green
        opacity-5
        w-[90%]
        mx-auto
        md:hidden

      "
    />
    <div
      id="mySidenav"
      class="sidenav flex flex-col justify-start items-center"
    >
      <div class="flex justify-between items-center px-4 w-full">
        <img
          class="max-w-none w-[141px] md:w-[199px]"
          src="~/assets/images/e-logo-light.svg"
        />
        <a href="javascript:void(0)" class="closebtn" @click="closeNav"
          >&times;</a
        >
      </div>

      <div class="w-full text-center uppercase my-10">
        <p class="text-[45px] leading-[51px]">menu</p>
      </div>

      <div
        class="
          flex flex-col
          justify-start
          w-full
          font-source-sans-pro
          text-white
        "
      >
        <div
          class="pt-2 px-2 text-[25px] leading-[37.5px] w-full"
          :class="[$route.path === '/' ? 'active' : '']"
          @click="closeNav"
        >
          <div class="link-bottom-border">
            <NuxtLink to="/" class="cursor-pointer">Home</NuxtLink>
          </div>
        </div>
        <div
          :class="[$route.path.includes('personal') ? 'active' : '']"
          class="pt-2 px-2 text-[25px] leading-[37.5px] w-full"
          @click="closeNav"
        >
          <div class="link-bottom-border">
            <NuxtLink to="/personal" class="cursor-pointer">Personal</NuxtLink>
          </div>
        </div>
        <div
          :class="[$route.path.includes('business') ? 'active' : '']"
          class="pt-2 px-2 text-[25px] leading-[37.5px] w-full"
          @click="closeNav"
        >
          <div class="link-bottom-border">
            <NuxtLink to="/business" class="cursor-pointer">Business</NuxtLink>
          </div>
        </div>
      </div>

      <div class="w-full px-2">
        <div
          class="
            justify-start
            items-center
            font-source-sans-pro
            flex
            py-[43px]
            w-full
            px-2
            bottom-wrapper-border
          "
        >
          <button
            class="
              px-5
              py-3
              border border-white
              bg-eden-green
              rounded-lg
              text-white text-sm
              mr-3
              font-bold
            "
          >
            Log in
          </button>
          <button
            class="
              px-5
              py-3
              bg-white
              text-eden-green
              rounded-lg
              font-bold
              text-white text-sm
            "
          >
            Get Started now
          </button>
        </div>
      </div>

      <div class="mt-2 md:mt-16 text-white font-dm-sans mt-auto">
        <p
          class="
            text-center
            mb-5
            md:text-left
            mb-5
            text-[13px]
            leading-[19.5px]
            font-normal
          "
        >
          Send, Pay, Receive and Borrow instantly
        </p>
        <div class="flex justify-center md:justify-start my-6">
          <img
            class="mr-4 w-32 cursor-pointer"
            src="~/assets/images/apple-store.svg"
          />
          <img
            class="w-32 cursor-pointer"
            src="~/assets/images/play-store.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openNav() {
      document.getElementById('mySidenav').style.width = '100vw'
    },
    closeNav() {
      document.getElementById('mySidenav').style.width = '0'
    },
  },
}
</script>

<style scoped lang="scss">
.active,
.nuxt-link-exact-active:not(.logo) {
  @apply bg-white rounded-lg px-3 py-2;
}

.sidenav {
  height: 100vh;
  width: 0;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  @apply text-white bg-jungle-green pt-3;

  .active,
  .nuxt-link-exact-active {
    background-color: rgba(27, 193, 191, 0.1);
    @apply rounded-[0px] px-0 py-0 pt-2 pl-2 font-bold;
    &.nuxt-link-exact-active {
      background-color: transparent;
    }
  }

  .closebtn {
    top: 0;
    right: 25px;
    font-size: 36px;
    @apply text-white;
  }
  .link-bottom-border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    @apply pb-4 pt-3;
  }
  .bottom-wrapper-border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
}
</style>
