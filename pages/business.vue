<template>
  <main class="overflow-hidden md:overflow-scroll">
    <Nav />
    <div
      class="
        pt-8
        md:pt-20
        px-2
        w-full
        mb-8
        lg:mb-14
        flex
        justify-center
        text-jungle-green
      "
    >
      <div
        class="
          flex
          w-full
          max-w-xl
          md:max-w-4xl
          2xl:max-w-7xl
          lg:max-w-full
          justify-center
          top-0
        "
      >
        <div class="mt-2 lg:mt-16">
          <h5
            class="
              font-gilroy font-extrabold
              text-center text-[50px]
              leader-[54.5px]
              tracking-[-1.5%]
              md:leading-[65.4px] md:text-6xl
              mb-8
            "
          >
            Access To Financial Tools <br />
            For Businesses
          </h5>
          <p class="text-center text-[17px] font-normal mb-8">
            Send And Receive Payments Easily
          </p>
          <div class="flex justify-center mb-6">
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
        </div>
      </div>
    </div>
    <div
      id="banner"
      class="
        px-2
        w-full
        max-w-full
        flex
        justify-center
        mb-16
        banner
        min-h-[450px]
        relative
      "
    >
      <div class="w-full lg:max-w-7xl grid grid-cols-3 gap-8 h-full">
        <div
          class="
            grid grid-rows-2
            gap-8
            w-full
            h-full
            absolute
            md:relative
            -left-[48%]
            md:left-0
          "
        >
          <div
            class="
              rounded-lg
              ring-4 ring-white
              section-2
              flex
              justify-center
              px-6
              py-6
              card-holder
            "
          >
            <img class="rounded-[30px]" src="~/assets/images/green-card.svg" />
          </div>
          <div
            class="
              rounded-lg
              ring-4 ring-white
              section-2
              flex
              justify-center
              px-6
              py-6
              card-holder
            "
          >
            <img src="~/assets/images/frame.svg" />
          </div>
        </div>
        <div
          class="
            rounded-lg
            ring-4 ring-white
            col-span-2
            section-2
            pt-8
            w-full
            h-full
            absolute
            md:relative
            -right-[48%]
            md:right-0
            card-holder-alt
          "
        >
          <img
            class="hidden md:inline mx-auto"
            src="~/assets/images/request-money.svg"
          />
          <img class="md:hidden" src="~/assets/images/request-money-alt.svg" />
        </div>
      </div>
    </div>

    <div class="px-2 w-full flex justify-center mb-16 text-jungle-green">
      <div
        class="
          w-full
          max-w-full
          lg:max-w-7xl
          flex flex-col
          md:flex-row
          justify-around
          items-center
          rounded-[28px]
          ring-4 ring-white
          col-span-2
          section-2
          py-8
          bg-white
        "
      >
        <h4 class="text-black font-bold">
          Join other industry-leading organizations <br />
          pushing boundaries of finance.
        </h4>
        <div class="flex logo-wrapper">
          <div class="ring-eden-mint rounded-[11px] ring">
            <img class="h-full w-full" src="~/assets/images/mastercard.svg" />
          </div>

          <div class="ring-eden-mint rounded-[11px] ring">
            <img class="h-full w-full" src="~/assets/images/csa-logo.svg" />
          </div>

          <div class="ring-eden-mint rounded-[11px] ring">
            <img class="h-full w-full" src="~/assets/npa.svg" />
          </div>

          <div class="ring-eden-mint rounded-[11px] ring">
            <img class="h-full w-full" src="~/assets/images/uba.svg" />
          </div>

          <div class="ring-eden-mint rounded-[11px] ring">
            <img class="h-full w-full" src="~/assets/lbdg.svg" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        px-2
        max-w-full
        w-full
        flex
        border-black
        justify-center
        salary-advance
        mb-20
        md:mb-32
      "
    >
      <div class="w-full md:flex justify-end pt-12 md:py-14 md:pb-0 relative">
        <div
          class="
            w-full
            md:h-full md:w-[44.5%]
            mb-8
            md:mb-0
            text-center
            md:text-left md:flex
            flex-col
            justify-center
            items-center
          "
        >
          <div>
            <h4
              class="
                flex
                justify-center
                md:justify-start
                font-bold
                text-xl
                md:text-5xl
                text-white
                mb-8
                md:mb-10
                font-gilroy
              "
            >
              Salary Advance
            </h4>

            <ul
              class="
                flex flex-col
                justify-center
                items-center
                md:items-start
                text-white text-xs
                md:text-base md:mx-0
              "
            >
              <li class="flex justify-start items-center mb-2 md:mb-4">
                <div
                  class="
                    rounded-full
                    bg-white
                    w-[8px]
                    h-[8px]
                    md:w-[22px] md:h-[22px]
                    mr-3
                  "
                >
                  {{ ' ' }}
                </div>
                Manage your employees advance without hassle
              </li>
              <li class="flex justify-start items-center mb-2 md:mb-4">
                <div
                  class="
                    rounded-full
                    bg-white
                    w-[8px]
                    h-[8px]
                    md:w-[22px] md:h-[22px]
                    mr-3
                  "
                >
                  {{ ' ' }}
                </div>
                Loan suggestion based on employee financial activities.
              </li>
            </ul>
          </div>
        </div>

        <div
          class="
            px-2
            md:max-w-[50%]
            max-w-full
            w-full
            flex
            justify-end
            text-center
            md:text-left
            overflow-y-hidden
            h-[350px]
            relative
          "
        >
          <img
            class="w-full h-full md:h-[600px] md:w-[926.92px] hidden md:inline"
            src="~/assets/images/salary-advance_2x.png"
          />

          <img
            class="md:hidden"
            src="~/assets/images/salary-advance_mobile.png"
          />
        </div>
      </div>
    </div>

    <!-- Manage employee loans & information -->

    <div
      class="
        px-12
        md:px-2
        pt-4
        md:pt-8 md:pb-8
        pb-8
        w-full
        text-jungle-green
        mb-3
        md:mb-14
      "
    >
      <h4 class="font-bold text-2xl md:text-5xl text-center font-gilroy">
        Manage employee loans & information
      </h4>
    </div>

    <div class="content-wrapper">
      <div class="content-container">
        <div class="card-wrapper bg-white text-jungle-green">
          <div class="card-body">
            <h4 class="card-title">
              Send and <br class="hidden md:block" />
              receive money without hassle
            </h4>

            <div class="flex justify-center">
              <img class="" src="~/assets/images/Sendand.svg" />
            </div>
          </div>
        </div>

        <div class="card-wrapper bg-blue-green text-white">
          <div class="card-body">
            <h4 class="card-title">Make Bills payment and send Invoices</h4>

            <div
              class="
                flex
                justify-center
                block
                md:flex
                justify-center
                mt-auto
                w-[290.73px]
                h-[354.12px]
                relative
                overflow-y-hidden
              "
            >
              <img class="w-full h-full" src="~/assets/images/Bill.svg" />
            </div>
          </div>
        </div>

        <div class="card-wrapper bg-white text-jungle-green">
          <div
            class="
              card-body
            "
          >
            <h4
              class="
                card-title
              "
            >
              Get a Virtual and <br />
              Physical Card
            </h4>

            <div
              class="
                block
                md:flex
                justify-center
                mt-auto
                md:mt-4
                w-[300.51px]
                h-[283.49px]
                md:w-[431px] md:h-[368px]
                relative
                overflow-hidden
              "
            >
              <img class="md:w-2/3 h-full" src="~/assets/images/virtual.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        pt-[42px]
        md:pt-0
        max-w-full
        w-full
        flex
        justify-center
        bg-true-blue
      "
    >
      <div
        class="
          w-full
          xl:max-w-7xl
          md:flex
          gap-x-4 gap-y-4
          justify-around
          md:py-16
        "
      >
        <div class="w-full md:w-1/3 text-white">
          <div
            class="
              rounded-[30px]
              md:rounded-t-[30px] md:h-[350px]
              flex flex-col
              justify-start
              md:justify-center
              items-center
            "
          >
            <h4
              class="
                flex
                justify-center
                text-center
                md:text-left
                font-bold
                text-xl
                md:text-4xl md:px-12
              "
            >
              Register your Organization Now
            </h4>
          </div>
        </div>

        <div class="w-full md:w-2/4 text-white">
          <div
            class="
              rounded-[30px]
              md:rounded-t-[30px]
              h-[350px]
              flex flex-col
              justify-start
              items-center
              md:items-start md:bg-white
              py-12
              md:py-14
              md:pb-0
              px-10
              md:px-12
            "
          >
            <div class="w-full border rounded-sm border-gray-400 mb-6 md:mb-10">
              <label for=""></label>
              <input
                type="text"
                class="
                  px-4
                  w-full
                  h-[72px]
                  rounded-sm
                  bg-transparent
                  md:bg-white md:text-eerie-black
                  placeholder:text-white
                  md:placeholder:text-eerie-black
                "
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Organization name"
                disabled
              />
            </div>

            <div class="w-full border rounded-sm border-gray-400 mb-6">
              <label for=""></label>
              <input
                type="text"
                class="
                  px-4
                  form-control
                  w-full
                  h-[72px]
                  rounded-sm
                  bg-transparent
                  md:bg-white md:text-eerie-black
                  placeholder:text-white
                  md:placeholder:text-eerie-black
                "
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Organization email"
                disabled
              />
            </div>

            <button
              type="button"
              class="
                bg-white
                text-eden-green
                md:bg-eden-green md:text-white
                w-48
                h-14
                rounded-lg
                font-semibold
                text-lg
              "
            >
              Get started now
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </main>
</template>

<script>
export default {}
</script>

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
.section-2 {
  h4 {
    @apply text-[15px] leading-[135%] md:text-lg font-dm-sans  opacity-50 md:opacity-100;
  }
  .logo-wrapper {
    @apply mt-7 md:mt-0;
    div {
      @apply w-16 h-14 md:h-28 md:w-28 mr-2 md:mr-10;
    }
  }
}

.neo-header {
  font-style: normal;
  @apply font-dm-sans  text-[45px] leading-[115%] md:text-[72px] md:leading-[110.1%] text-center font-bold md:font-semibold;
}
.neo-subheader {
  font-style: normal;
  @apply font-dm-sans  text-[22px] leading-[150%] md:text-[25px] md:leading-[150%] text-center font-normal;
}
.neo-subheader-two {
  font-style: normal;
  @apply font-dm-sans  text-[22px] leading-[150%] md:text-[40px] md:leading-[119.1%] text-center md:text-left font-normal md:font-semibold;
}

.neo-title {
  font-style: normal;
  @apply font-dm-sans  text-[26px] leading-[34.19px] md:text-[56px] md:leading-[119.1%] text-center font-bold md:font-semibold;
}
.neo-subtitle {
  font-style: normal;
  @apply font-dm-sans  text-base md:text-lg text-center font-normal;
}

#banner.banner {
  .card-holder {
    @apply w-[322.68px] md:w-full h-[227.74px];
  }
  .card-holder-alt {
    @apply h-[468.37px] md:h-[97%]  px-8;
    img {
      @apply h-[387.63px] md:h-[95%];
    }
  }
}

.salary-advance {
  background: linear-gradient(
    4.51deg,
    #002026 25.21%,
    rgba(0, 32, 38, 0) 135.64%
  );

  @apply bg-eerie-black;
}

.content-wrapper {
  @apply px-2 max-w-full w-full flex justify-center mb-20 md:mb-36;
}
.content-container {
  @apply w-full xl:max-w-7xl md:flex gap-x-4 justify-center;
}

.card-wrapper {
  @apply w-full md:w-1/3 mb-4 md:mb-8 rounded-[15px];
  .card-body {
    @apply rounded-[15px] h-[350px] md:h-[469px] flex flex-col justify-start items-center pt-6 md:pt-12 px-12;
    .card-title {
      @apply flex justify-center text-center font-bold text-xl md:text-4xl mb-8;
    }
    .card-subtitle {
      @apply mb-4 md:mb-6 font-dm-sans text-center text-base md:text-xl;
    }
  }
}
</style>
