<template>
  <v-app>
    <v-app-bar app color="purple" dark>
      <div class="d-flex align-center">
        <h1>
          REAL-TIME PAYMENTS
        </h1>
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
