<template>
  <main>
    <Nav />
    <div
      class="
        pt-8
        md:pt-20
        px-2
        md:px-24
        w-full
        flex flex-col
        md:flex-row
        justify-start
        md:justify-center
        relative
        md:mb-24
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
          lg:max-w-full
          justify-start
          md:justify-between
          top-0
          md:mx-auto
        "
      >
        <div class="mt-2 lg:mt-16 w-full text-jungle-green has-background">
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
            Enabling Equitable <br />
            Access to Finance
          </h5>
          <p class="text-center text-[17px] font-normal mb-8">
            Send, Pay, Receive and Borrow Instantly
          </p>
          <div class="flex justify-center mb-16">
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
      </div>
      <div
        class="
          w-full
          hidden
          md:flex
          justify-between
          items-start
          relative
          md:absolute
        "
      >
        <div class="">
          <img class="" src="~/assets/images/small-icons-left.svg" />
        </div>
        <div class="">
          <img class="" src="~/assets/images/small-icons-right.svg" />
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

    <div class="content-wrapper no-margin">
      <div class="content-container">
        <div class="card-wrapper bg-white text-jungle-green">
          <div class="card-body">
            <h4 class="card-title">
              Fast and Instant <br />
              payment.
            </h4>

            <p class="card-subtitle">
              Moving Money Faster, <br class="md:hidden" />
              Simpler and More Secure.
            </p>

            <div
              class="
                block
                md:flex
                justify-center
                mt-auto
                md:mt-4
                w-[200.51px]
                h-[200px]
                md:w-[431px] md:h-[368px]
                relative
                overflow-hidden
              "
            >
              <img class="" src="~/assets/images/meter.svg" />
            </div>
          </div>
        </div>

        <div class="card-wrapper text-white bg-true-blue">
          <div class="card-body">
            <h4 class="card-title">Easy and secure.</h4>

            <p class="card-subtitle">
              We’re 4x better at stopping card fraud, and 3x better at stopping
              identity theft.
            </p>

            <div
              class="
                block
                md:flex
                justify-start
                md:justify-center
                mt-0
                md:mt-4
                w-[200.51px]
                h-[200px]
                md:w-[431px] md:h-[300px]
                relative
                overflow-hidden
              "
            >
              <img class="" src="~/assets/images/shield.svg" />
            </div>
          </div>
        </div>

        <div class="card-wrapper bg-eerie-black text-white">
          <div class="card-body">
            <h4 class="card-title">
              Easily send and accept payments from anyone, anywhere,
              <br class="hidden md:block" />
              globally.
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
              <!-- <img
                class="w-full h-full absolute -bottom-2 md:-bottom-0"
                src="~/assets/images/short-debit-card.svg"
              /> -->

              <img
                class="w-full h-full absolute -bottom-8 md:-bottom-2"
                src="~/assets/images/_globe-new.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- second layer -->

    <div class="content-wrapper">
      <div class="content-container">
        <div class="card-wrapper bg-blue-green text-white">
          <div class="card-body">
            <h4 class="card-title">Open a personal account for free</h4>

            <p class="card-subtitle">
              Open a free account from your phone in 5 mins with no fees or
              minimum balance.
            </p>

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
              <img class="" src="~/assets/images/jessica.svg" />
            </div>
          </div>
        </div>

        <div class="card-wrapper bg-white">
          <div class="card-body">
            <h4 class="card-title">Pay Bills</h4>

            <p class="card-subtitle">
              Top up your phone, buy data and pay your utility bills easily
            </p>

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
              <img class="h-full w-full" src="~/assets/images/Group40.svg" />
            </div>
          </div>
        </div>

        <div class="card-wrapper bg-lavender-floral text-white">
          <div class="card-body">
            <h4 class="card-title">Request for money or payments</h4>

            <p class="card-subtitle">
              Easily request for money from family and friends with your unique
              and secure custom payment link.
            </p>

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
              <img class="h-full w-full" src="~/assets/images/Globe.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- card that match your style -->
    <div
      class="
        max-w-full
        w-full
        flex
        justify-center
        items-start
        card-that-match
        text-white
        mb-20
        md:mb-36
      "
    >
      <div
        class="
          w-full
          xl:max-w-7xl
          md:flex
          flex-col
          justify-start
          items-center
          md:overflow-y-hidden md:h-[600.49px]
        "
      >
        <div class="w-full mb-4 md:mb-8 md:mb-0">
          <div class="flex justify-center items-center pt-[48px] md:pt-[64px]">
            <h4
              class="
                flex
                justify-center
                text-center
                font-bold
                text-xl
                md:text-5xl
                mb-4
                md:mb-10
                font-gilroy
              "
            >
              Card that match your style.
            </h4>
          </div>
        </div>

        <div
          class="w-full flex flex-col md:flex-row justify-center items-center"
        >
          <div class="w-full md:w-1/3 mb-4 md:mb-8 md:mb-0">
            <div
              class="
                bg-transparent
                rounded-[30px]
                md:rounded-t-[30px]
                flex flex-col
                justify-start
                items-center
                pt-4
              "
            >
              <!-- <h4
                class="
                  flex
                  justify-center
                  text-center
                  font-bold
                  text-xl
                  md:text-4xl
                  mb-4
                  md:mb-10
                "
              >
                Fast and Instant <br />
                payment.
              </h4> -->

              <p
                class="
                  text-center
                  mb-4
                  md:mb-6
                  font-dm-sans
                  text-base
                  md:text-lg
                  px-12
                "
              >
                Get a custom card that is accepted globally
              </p>

              <div
                class="
                  block
                  flex
                  justify-center
                  mt-auto
                  md:mt-0
                  w-[300.51px]
                  h-[283.49px]
                  md:w-[310px] md:h-[368px]
                "
              >
                <img
                  class="md:hidden"
                  src="~/assets/images/full-debit-card.svg"
                />
                <img
                  class="hidden md:inline"
                  src="~/assets/images/full-debit-card_2x.png"
                />
              </div>
            </div>
          </div>

          <!-- <div class="w-full mb-4 md:mb-8 md:mb-0"> -->
          <hr
            class="
              border-solid border border-white
              md:w-[20%]
              w-[80%]
              md:rotate-90
              my-[50px]
              md:my-0
              opacity-25
            "
          />
          <!-- </div> -->

          <div class="w-full md:w-1/3 mb-4 md:mb-8 md:mb-0 self-start">
            <div
              class="
                bg-transparent
                rounded-[30px]
                md:rounded-t-[30px]
                flex flex-col
                justify-start
                items-center
                pt-4
              "
            >
              <!-- <h4
                class="
                  flex
                  justify-center
                  text-center
                  font-bold
                  text-xl
                  md:text-4xl
                  mb-4
                  md:mb-10
                "
              >
                Fast and Instant <br />
                payment.
              </h4> -->

              <p
                class="
                  text-center
                  mb-4
                  md:mb-6
                  font-dm-sans
                  text-base
                  md:text-lg
                  px-12
                "
              >
                Get a custom card that is accepted globally
              </p>

              <div class="block flex justify-center mt-auto md:mt-0">
                <img
                  class="h-full w-full md:hidden"
                  src="~/assets/images/jessica-debit-card_mobile.svg"
                />

                <img
                  class="h-full w-full hidden md:inline"
                  src="~/assets/images/jessica-debit-card.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- personal loans -->
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
        Personal loans
      </h4>
    </div>

    <div class="content-wrapper">
      <div class="content-container">
        <div class="card-wrapper loan-tailored bg-eerie-black text-white">
          <div class="card-body">
            <h4 class="card-title">Loan tailored to your personal needs.</h4>

            <p class="card-subtitle">
              Quickly access loans that best work for you, whenever and however
              you need it
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
                w-[132px]
                md:w-[120px]
                h-[36px]
                block
                mx-auto
              "
            >
              <a class="text-xs font-bold text-white text-white items-center"
                >Get a loan</a
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
                src="~/assets/images/dl_1.svg"
              />
            </div>
          </div>
        </div>

        <div class="card-wrapper bg-true-blue text-white access-to-organization">
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
              Access to Organization sponsored loan
            </h4>

            <p
              class="
                card-subtitle
              "
            >
              Easily access part of your salary before pay-day No Collateral. No
              Hassle
            </p>

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
                src="~/assets/images/access.svg"
              />
            </div>
          </div>
        </div>

        <div class="card-wrapper bg-blue-green text-white access-to-personal">
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
              Access to personal loan
            </h4>

            <p
              class="
               card-subtitle
              "
            >
              Build your credit with Edens 360 and easily access quick loans
            </p>

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
                src="~/assets/images/organisation.svg"
              />
            </div>
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
.has-background {
  background: radial-gradient(
    43.25% 43.25% at 50% 56.75%,
    rgba(6, 178, 126, 0.1) 25.46%,
    rgba(255, 255, 255, 0) 100%
  );
}
.section-2 {
  background: linear-gradient(
    92.65deg,
    rgba(255, 255, 255, 0.2) 3.61%,
    rgba(255, 255, 255, 0.68) 74.44%,
    rgba(255, 255, 255, 0.17) 105.95%
  );
}

.card-that-match {
  background: linear-gradient(
    4.51deg,
    #002026 25.21%,
    rgba(0, 32, 38, 0) 135.64%
  );

  @apply bg-eerie-black;
}

.content-wrapper {
  @apply px-2 max-w-full w-full flex justify-center mb-20 md:mb-36;
  &.no-margin {
    @apply mb-0;
  }
}
.content-container {
  @apply w-full xl:max-w-7xl md:flex gap-x-4 justify-center;
}

.card-wrapper {
  @apply w-full md:w-1/3 mb-4 md:mb-8 rounded-[15px];
  &.loan-tailored,
  &.access-to-organization{
    .card-body {
      @apply md:pt-12 px-6 md:px-6;
      .card-title,
      .card-subtitle {
        @apply mb-2 md:mb-4;
      }
    }
  }
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
