<template>
  <div
    class="footer max-w-full w-full flex flex-col justify-start items-center"
  >
    <div class="w-full flex flex-col items-center justify-center bg-white">
      <div
        class="
          w-full
          xl:max-w-7xl
          md:h-[589px]
          flex flex-col
          md:flex-row
          justify-start
          items-center
          pt-[53px]
          pb-0
          md:pt-[72px]
          overflow-y-hidden
        "
      >
        <div
          class="
            w-full
            md:w-[55%]
            h-full
            flex flex-col
            justify-start
            md:justify-center
            items-center
            md:items-start
            mb-16
            md:mb-0
            animate_for_home
          "
        >
          <h4
            class="
              font-bold
              text-[22px]
              leading-[36px]
              md:text-[45px] md:leading-[66px]
              text-jungle-green text-center
              lg:text-left
              font-gilroy
            "
          >
            Are you excited to take <br class="md:hiiden" />
            control of your finance?
          </h4>
          <p class="text-white mb-6 text-center lg:text-left"></p>
          <div
            class="
              w-full
              flex
              justify-center
              md:justify-start
              items-center
              md:mb-6
              animate_for_home
            "
          >
            <img
              class="
                mr-4
                w-[154px]
                h-[42px]
                md:w-[180px] md:h-[60px]
                cursor-pointer
              "
              src="~/assets/images/apple-store.svg"
            />
            <img
              class="w-[154px] h-[42px] md:w-[200px] md:h-[60px] cursor-pointer"
              src="~/assets/images/play-store.svg"
            />
          </div>
        </div>

        <div
          class="
            w-full
            md:w-[35%]
            max-h-full
            z-20
            relative
            flex
            justify-center
            items-center
            animate_for_home
          "
        >
          <img class="z-10 w-2/3 md:w-full" src="~/assets/images/Iphone.png" />
          <img
            class="
              absolute
              h-[240px]
              md:h-[330px]
              right-[30px]
              md:right-[-50px]
              top-[40px]
              z-[-1]
            "
            src="~/assets/images/full-debit-card.svg"
          />
        </div>
      </div>

      <!-- <div
        class="w-full flex justify-center items-center bg-misty-background"
      ></div> -->
    </div>
    <div
      class="
        w-full
        flex flex-col
        items-center
        justify-start
        bg-misty-background
        pb-[95px]
      "
    >
      <div
        class="
          w-full
          xl:max-w-7xl
          text-white
          pt-[90px]
          md:pt-[105px]
          px-4
          flex flex-col
          md:flex-row
          justify-start
          items-start
        "
      >
        <div class="mb-4 md:mb-8">
          <img
            class="w-[151px] h-[28px] md:w-[250px] md:h-[50px] -ml-4"
            src="~/assets/images/Edens360 LogoV2.svg"
          />
          <div class="font-poppins lg:w-[25rem] mt-6 font-semibold">
            <p
              class="
                text-jungle-green
                mb-4
                md:mb-8
                text-[30px]
                leading-[40px]
                md:text-[25px] md:leading-[30px]
              "
            >
              Enabling Equitable <br class="hidden md:block" />
              Access to Finance
            </p>
          </div>
        </div>
        <div class="lg:flex w-full font-dm-sans">
          <div class="lg:flex justify-between w-full md:space-x-12">
            <div class="flex flex-col lg:items-start info">
              <h4 class="font-bold text-2xl text-jungle-green mb-4 md:mb-8">
                Products
              </h4>
              <div class="text-green flex flex-col justify-start grow">
                <p
                  class="
                    text-jungle-green text-sm
                    cursor-pointer
                    text-eden-green
                  "
                >
                  Edens Salary Advance
                </p>
                <p class="text-sm cursor-pointer">Buy Now Pay Later</p>
                <p class="text-sm cursor-pointer">Personal Loans</p>
                <p class="text-sm cursor-pointer">SME Loans</p>
                <p class="text-sm cursor-pointer">Edens Payment Gateway</p>
                <p class="text-sm cursor-pointer">Cross-Border Send</p>
              </div>
            </div>
            <div class="flex flex-col lg:items-start info">
              <h4 class="font-bold text-2xl text-jungle-green mb-4 md:mb-8">
                Contact
              </h4>
              <div class="flex flex-col justify-start grow">
                <p class="text-sm cursor-pointer">
                  Phone: +2310888444360, <br class="hidden md:block" />
                  <span class="pl-11 hidden md:inline-block">{{"  "}}</span>
                  <span class="ml-2 md:ml-2">+2310777444360 </span>
                  <br />
                </p>
                <p class="text-sm cursor-pointer">Email: hello@edens360.com</p>
              </div>
            </div>
            <div class="flex flex-col lg:items-start info">
              <h4 class="font-bold text-2xl text-jungle-green mb-4 md:mb-8">
                Address
              </h4>
              <div class="flex flex-col justify-start grow">
                <p class="text-jungle-green cursor-pointer">
                  3rd Street, Sinkor, Monrovia, Liberia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
::v-deep .marquee-text-text {
  margin-right: 0.5rem;
  .lighter {
    color: #c9c9c9b0;
  }
}
.linear-gradient {
  background: linear-gradient(180deg, #002026 0%, rgba(0, 32, 38, 0) 100%);
  transform: rotate(180deg);
}
.info {
  @apply mb-10 md:mb-0;
  h4 {
    @apply font-poppins font-normal md:font-semibold text-xl md:text-2xl;
  }
  div {
    p {
      @apply mb-[10px] text-jungle-green opacity-75 text-base md:text-lg opacity-50;
    }
  }
}
</style>
