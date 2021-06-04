<template>
  <div id="app">
    <div class="home">
      <h1>{{ message }}</h1>
    </div>

    <!-- FIRST ROW OF ENTRIES -->
    <v-container fluid>
      <v-row align="center" justify="center">
        <!-- Autofill Transaction ID -->
        <v-col class="d-flex" cols="2" sm="4">
          <v-textarea
            outlined
            rows="1"
            name="paymentInformationId"
            label="Transaction ID"
            :value="`${paymentInformationId}`"
            readonly
          ></v-textarea>
        </v-col>
        <!-- Payee Name -->
        <v-col class="d-flex" cols="2" sm="4">
          <v-text-field
            v-model="customerID"
            label="Customer ID Number"
            outlined
          ></v-text-field>
        </v-col>
        <!-- Account Number -->
        <v-col class="d-flex" cols="2" sm="4">
          <v-textarea
            rows="1"
            name="executionDate"
            label="Date (YYYY-MM-DD)"
            :value="`${today}`"
            readonly
            outlined
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
    <!-- SECOND ROW OF ENTRIES -->
    <v-container fluid>
      <v-row align="center" justify="center">
        <!-- Sam Adams-->
        <v-col class="d-flex" cols="2" sm="4">
          <v-slider
            v-model="soda.val"
            :label="soda.label"
            :thumb-color="soda.color"
            thumb-label="always"
          ></v-slider>
        </v-col>
        <!-- Lobster Roll -->
        <v-col class="d-flex" cols="2" sm="4">
          <v-slider
            v-model="lobsterRoll .val"
            :label="lobsterRoll.label"
            :thumb-color="lobsterRoll.color"
            thumb-label="always"
          ></v-slider>
        </v-col>
        <!-- Waffle Fries-->
        <v-col class="d-flex" cols="2" sm="4">
          <v-slider
            v-model="fries.val"
            :label="fries.label"
            :thumb-color="fries.color"
            thumb-label="always"
          ></v-slider>
        </v-col>
        <!-- <v-btn v-on:click="showReceipt()" depressed color="blue">
          Review Receipt
        </v-btn> -->

    <!-- START POP-UP -->
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on">Show Receipt</v-btn>
            <v-btn v-on:click="newPayment()" depressed color="grey">
              Clear / New
            </v-btn>
          </template>
          <template v-slot:default="dialog">
            <!-- VERIFICATION POP-UP -->
            <v-card>
              <v-toolbar color="purple" dark>
                <h2>TransactionID: {{ paymentInformationId }}</h2>
              </v-toolbar>
              <v-card-text>
                <div>
                  <br />
                  <h2>Customer ID:</h2>
                  <p>{{ customerID }}</p>
                  <br />
                  <h2>Date:</h2>
                  <p>{{ executionDate }}</p>
                  <br />
                  <br />
                  <h2>Soda Total: $ </h2>
                  <p>qty: {{ soda.val }}</p> <p>Price: $2.75</p>
                  <br />
                  <h2>Lobster Rolls Total: $</h2>
                  <p>qty: {{ lobsterRoll.val }}</p> <p>Price: $8.95</p>
                  <br />
                  <h2>Fries Total: $ </h2>
                  <p>qty: {{ fries.val }}</p> <p>Price: $3.40</p>
                  <br />
                </div>
              </v-card-text>
              <!-- POP-UP BUTTONS -->
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                  depressed
                  color="error"
                  >CANCEL</v-btn
                >
                <v-btn
                  v-on:click="createPayment()"
                  @click="dialog.value = false"
                  depressed
                  color="green"
                >
                  Make Payment
                </v-btn>
              </v-card-actions>
            </v-card>
            <!-- END POP-UP VERIFICATION -->
          </template>
        </v-dialog>
      </v-col>
    </v-row>
    <!-- End POP-UP -->



      </v-row>
    </v-container>
    <!-- <v-col class="d-flex" cols="3" sm="6">
      <v-text-field
        name="CustomerID"
        label="Customer ID Number"
        outlined
      ></v-text-field> -->

    </v-col>
  </div>
</template>

<style></style>

<script>
import moment from "moment";

export default {
  data: function() {
    return {
      message: "Welcome to C2B PAGE!",
      today: moment().format("YYYY-MM-DD"),
      paymentInformationId: Math.floor(Math.random() * 100000000000),
      soda: { label: 'Soda', val: 0, color: 'blue' },
      lobsterRoll: { label: 'Lobster Roll', val: 0, color: 'red' },
      fries: { label: 'Fries', val: 0, color: 'orange' },
      customerID: "",
      executionDate:"",
    
    
    };
  },
  created: function() {
    return (this.executionDate = moment().format("YYYY-MM-DD"));
  },
  methods: {
    newPayment() {
      this.$router.go();
    },
    async showReceipt() {
      console.log(this.paymentInformationId);
      console.log(this.soda.val);
      console.log(this.lobsterRoll.val);
      console.log(this.soda.val);
      console.log(this.customerID);

      // console.log(this.token);
      // var data = {
      //   token: this.token,
      //   debtor: this.PayeeName,
      //   amount: this.Amount,
      //   paymentInformationId: "1234567890",
      //   currency: "USD",
      //   creditor: "Mike-Test-Account",
      // };
      // console.log(data);
      // axios
      //   .post("/api/payment", data, {
      //     headers: { "Content-Type": "application/json" },
      //   })

      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     this.errors = error.response.data.errors;
      //   });
    },
  },
};
</script>
