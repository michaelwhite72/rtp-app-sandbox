<template>
  <v-app>
    <v-app-bar app color="purple" dark>
      <div class="d-flex align-center">
        <h1>
          LOBSTER SHACK
        </h1>
        <p>( from Faster Pay )</p>
      </div>

      <v-spacer></v-spacer>
      <!-- <v-list>
        <router-link to="/" color="white">home</router-link>
      </v-list>
      <li class="list-inline-item">
        <router-link to="/" color="white">home</router-link>
      </li> -->
      <v-btn v-on:click="homePage()" color="white" text rounded class="my-2">
        Home
      </v-btn>

      <v-btn v-on:click="vendorPage()" color="white" text rounded class="my-2">
        Vendor Pay
      </v-btn>

      <v-btn
        v-on:click="customerPage()"
        color="white"
        text
        rounded
        class="my-2"
      >
        Customer Pay
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-img
      lazy-src="./images/large-Payments_Banner-–-2.png"
      max-height="300"
      src="./images/large-Payments_Banner-–-2.png"
    ></v-img>

    <v-main>
      <router-view />
    </v-main>
    <!-- <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-6 mb-4">
          <h3 class="my-sm-3 mb-2">
            <span class="fa mr-2 fa-mobile"></span> Mobile Apps
          </h3>
          <p class="mb-sm-4">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
          </p>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
          <h3 class="my-sm-3 mb-2">
            <span class="fa mr-2 fa-shield"></span> Security Tips
          </h3>
          <p class="mb-sm-4">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
          </p>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
          <h3 class="my-sm-3 mb-2">
            <span class="fa mr-2 fa-globe"></span> Various Branches
          </h3>
          <p class="mb-sm-4">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
          </p>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
          <h3 class="my-sm-3 mb-2">
            <span class="fa mr-2 fa-phone"></span> 24/7 Support
          </h3>
          <p class="mb-4">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
          </p>
        </div>
      </div>
    </div> -->
    <v-footer color="purple" padless>
      <v-row justify="center" no-gutters>
        <v-btn @click="homePage()" color="white" text rounded class="my-2">
          Home
        </v-btn>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="purple lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>FINASTRA</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    links: ["About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
  methods: {
    homePage() {
      this.$router.push({ path: "/" });
      console.log("home");
    },
    vendorPage() {
      this.$router.push({ path: "B2B" });
      console.log("b2b");
    },
    customerPage() {
      this.$router.push({ path: "C2B" });
      console.log("c2b");
    },
  },
};
</script>
