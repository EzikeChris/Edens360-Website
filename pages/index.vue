<template>
  <main>
    <Nav />

    <!-- a  simple and secure -->
    <div
      class="
        px-2
        md:px-24 md:pt-10
        w-full
        md:mb-4
        flex
        justify-center
        home-banner
      "
    >
      <div
        class="
          flex flex-col
          md:flex-row
          w-full
          max-w-xl
          md:max-w-4xl
          2xl:max-w-7xl
          md:max-w-full
          justify-center
          md:item-center md:justify-between
          top-5
          relative
          mb-10
        "
      >
        <div
          class="
            mt-2
            md:mt-4
            text-jungle-green
            font-dm-sans
            flex flex-col
            justify-center
          "
        >
          <h5
            class="
              font-gilroy font-extrabold
              text-center
              md:text-left
              text-[50px]
              leader-[54.5px]
              tracking-[-1.5%]
              md:leading-[65.4px] md:text-6xl
              mb-8
              animate__animated animate__fadeInUp
            "
          >
            A simple and <br />
            secure way to <br />
            move money
          </h5>
          <p class="text-center md:text-left text-[17px] font-normal">
            Send, Pay, Receive and Borrow instantly
          </p>
          <div
            class="
              flex
              justify-center
              md:justify-start
              my-6
              animate__animated animate__backInUp animate__delay-1s
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
            right-0
            z-[-1]
            mt-4
            mobile-double
            md:w-[45%]
            animate__animated animate__slideInUp animate__delay-1s
          "
        >
          <img class="" src="~/assets/images/mobileOne_2x.png" />
        </div>
      </div>
    </div>

    <!-- open an free account -->
    <div
      class="
        px-2
        h-[268px]
        md:h-[203px]
        w-full
        max-w-full
        flex
        justify-center
        mb-6
        md:mb-14
        z-10
        font-dm-sans
        bg-transparent
        md:bg-white
      "
    >
      <div
        class="
          w-full
          md:max-w-7xl
          rounded-lg
          pt-[40px]
          md:py-0 md:flex
          justify-around
          items-center
          px-12
          md:px-0
          open-a-free-account
          animate__animated animate__backInUp
        "
      >
        <div
          class="
            w-full
            md:w-1/3
            flex
            justify-start
            text-center
            md:text-left md:mb-0
            text-jungle-green
          "
        >
          <div class="w-full mb-4 md:mb-0">
            <h3 class="text-lg md:text-4xl font-extrabold">
              Open a Free Account in less than 5 minutes
            </h3>
          </div>
        </div>

        <div
          class="
            flex
            justify-center
            text-center
            md:text-left
            mb-8
            md:mb-0
            text-jungle-green text-base
            md:text-xl
            w-full
            md:w-1/3
          "
        >
          <p>One Stop Solution To Your Personal And Business Finances</p>
        </div>

        <div class="flex justify-center">
          <button
            class="
              px-8
              bg-jungle-green
              text-white
              py-2
              rounded-md
              font-source-sans-pro font-semibold
            "
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>

    <!-- all things money -->
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
        All things money in one place
      </h4>
    </div>

    <!-- send and receive + easy way to request + get a virtual-->

    <div class="content-wrapper">
      <div class="content-container">
        <div
          class="
            card-wrapper
            bg-white
            text-jungle-green
            animate__animated animate__backInUp animate__delay-1s
          "
        >
          <div class="card-body">
            <h4 class="card-title">
              Send and <br class="hidden md:block" />
              receive money without hassle
            </h4>

            <div class="flex justify-center w-[260px] h-[150px]">
              <img class="" src="~/assets/images/mobile-balance.png" />
            </div>
          </div>
        </div>

        <div
          class="
            card-wrapper
            bg-blue-green
            text-white
            animate__animated animate__backInUp animate__delay-1s
          "
        >
          <div class="card-body">
            <h4 class="card-title">
              Easy way to <br class="hidden md:block" />
              request money from others
            </h4>

            <div
              class="
                flex
                justify-center
                block
                md:flex
                justify-center
                md:mt-4
                w-[90%]
                h-full
                relative
              "
            >
              <img
                class="w-full h-full hidden md:inline"
                src="~/assets/images/mobile-request.png"
              />
              <img
                class="w-full h-full md:hidden"
                src="~/assets/images/mobile-request.svg"
              />
            </div>
          </div>
        </div>

        <div
          class="
            card-wrapper
            bg-eerie-black
            text-white
            animate__animated animate__backInUp animate__delay-1s
          "
        >
          <div class="card-body">
            <h4 class="card-title">
              Get a Virtual and <br />
              Physical Card
            </h4>

            <p class="card-subtitle">
              Customise your card to <br class="md:hidden" />
              match your style
            </p>
            <span
              class="
                bg-[#92ccbf1a]
                p-3
                py-1
                flex
                justify-around
                items-center
                cursor-pointer
                rounded-[36px]
                w-[180px]
                h-[36px]
                block
                mx-auto
              "
            >
              <a class="text-xs font-bold text-white items-center"
                >Get a physical card</a
              >
              <img src="~/assets/images/right.svg" />
            </span>

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
              <img
                class="w-full h-full absolute -bottom-2 md:-bottom-0"
                src="~/assets/images/short-debit-card.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Salary Advance -->
    <div
      class="
        px-2
        max-w-full
        w-full
        flex
        border-black
        justify-center
        bg-eerie-black
      "
    >
      <div class="w-full md:flex justify-end py-12 md:py-14 relative">
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
            animate__animated
            animate__slideInLeft
            animate__delay-1s
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
              Salary Advance, <br />
              Personal & Business <br class="hidden md:block"/> Loans
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
                Easy access to Personal and Business loans
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
                Access to Salary Advance & Business Loans
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
                Access to Personal Loans
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
            animate__animated animate__slideInRight animate__delay-1s
          "
        >
          <img
            class="w-full h-full md:w-[926.92px]"
            src="~/assets/images/salary-advance_2x.png"
          />
        </div>
      </div>
    </div>

    <Footer />
  </main>
</template>

<script>
import 'animate.css'
import AOS from 'aos'
export default {
  head() {
    return {
      script: [],
      link: [],
    }
  },

  data() {
    return {
      str: '',
    }
  },
  created() {
    //Perform an availability check if you really need a browser API here
    if (typeof window !== 'undefined') {
      this.str = window.atob('test')
    }
  },
  beforeMount() {},
  mounted() {
    const element = document.querySelectorAll('.animate_for_home')

    for (const item of element) {
      item.classList.add(
        'animate__animated',
        'animate__fadeInUp',
        'animate__delay-1s'
      )
    }
  },
}
</script>

<style scoped lang="scss">
::v-deep .marquee-text-text {
  margin-right: 0.5rem;
  .lighter {
    color: #c9c9c9b0;
  }
}

/* ::v-deep .animate_for_home{
     animate__animated
            animate__slideInRight
            animate__delay-1s
} */
.home-banner {
  @apply bg-cover;
  @media screen and (min-width: 720px) {
    background: radial-gradient(
      43.25% 43.25% at 50% 56.75%,
      rgba(6, 178, 126, 0.1) 25.46%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}
.mobile-double {
  background: radial-gradient(
    43.25% 43.25% at 50% 56.75%,
    rgba(6, 178, 126, 0.1) 25.46%,
    rgba(255, 255, 255, 0) 100%
  );
}
.open-a-free-account {
}
.section-2 {
  background: linear-gradient(
    92.65deg,
    rgba(255, 255, 255, 0.2) 3.61%,
    rgba(255, 255, 255, 0.68) 74.44%,
    rgba(255, 255, 255, 0.17) 105.95%
  );
}
.happy-man-section {
  @media (min-width: 768px) {
    background: linear-gradient(
      141.84deg,
      rgba(255, 255, 255, 0.4) 10.88%,
      rgba(255, 255, 255, 0) 101.53%
    );
    border: 2px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
  }
}

.animate__delay-1s {
  --animate-delay: 1s;
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
