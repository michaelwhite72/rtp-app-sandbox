<template>
  <div id="app">
    <div class="home">
      <h1>{{ message }}</h1>
    </div>

    <!-- FIRST ROW OF ENTRIES -->
    <v-container fluid>
      <v-row align="center" justify="center">
        <!-- Autofill Transaction ID -->
        <v-col class="d-flex" cols="4" sm="3">
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
        <v-col class="d-flex" cols="4" sm="3">
          <v-text-field
            v-model="customerID"
            label="Customer ID Number"
            outlined
          ></v-text-field>
        </v-col>
        <!-- Account Number -->
        <v-col class="d-flex" cols="4" sm="3">
          <v-textarea
            rows="1"
            name="executionDate"
            label="Date (YYYY-MM-DD)"
            :value="`${today}`"
            readonly
            outlined
          ></v-textarea>
        </v-col>
        <v-col class="d-flex" cols="5" sm="2">
          <v-btn depressed color="blue">
          Accept
          </v-btn>
          <v-btn depressed color="red">
          decline
          </v-btn>
        </v-col>

      </v-row>
    </v-container>
    <!-- SECOND ROW OF ENTRIES -->
    <v-container fluid>
      <v-row align="center" justify="center">
        <!-- Sam Adams-->
        <v-col class="d-flex" cols="2" sm="4">
          <v-slider
            v-model="tuna.val"
            :label="tuna.label"
            :thumb-color="tuna.color"
            thumb-label="always"
          ></v-slider>
        </v-col>
        <!-- Lobster Roll -->
        <v-col class="d-flex" cols="2" sm="4">
          <v-slider
            v-model="lobster .val"
            :label="lobster.label"
            :thumb-color="lobster.color"
            thumb-label="always"
          ></v-slider>
        </v-col>
        <!-- Salmon -->
        <v-col class="d-flex" cols="2" sm="4">
          <v-slider
            v-model="salmon.val"
            :label="salmon.label"
            :thumb-color="salmon.color"
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
            <v-btn  v-on:click="showReceipt" color="primary" v-bind="attrs" v-on="on">Show Receipt</v-btn>
            <v-btn v-on:click="newPayment()" depressed color="grey">
              Clear / New
            </v-btn>
          </template>
          <template v-slot:default="dialog">
            <!-- VERIFICATION POP-UP -->
            <v-card>
              <v-toolbar color="pink accent-1" >
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
                  <h2>Tuna Total: $ {{(tunaTotal.toFixed(2))}}</h2>
                  <p>qty: {{ tuna.val }}</p> <p>Price: $2.50 ea</p>
                  <br />
                  <h2>Lobster Total: $ {{(lobsterTotal.toFixed(2))}} </h2>
                  <p>qty: {{ lobster.val }}</p> <p>Price: $9.25 ea</p>
                  <br />
                  <h2>Salmon Total: $ {{(salmonTotal.toFixed(2))}}</h2>
                  <p>qty: {{ salmon.val }}</p> <p>Price: $3.50 ea</p>
                  <br />
                  <br />
                  <h1> Total Sale: $ {{(salesTotal.toFixed(2))}}</h1>
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
                  v-on:click="makePayment()"
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
      message: "Welcome to Send Request for Payment!",
      today: moment().format("YYYY-MM-DD"),
      paymentInformationId: Math.floor(Math.random() * 100000000000),
      tuna: { label: 'Tuna', val: 0, color: 'blue' },
      lobster: { label: 'Lobster', val: 0, color: 'red' },
      salmon: { label: 'Salmon', val: 0, color: 'orange' },
      customerID: "",
      executionDate:"",
      tunaTotal: "",
      lobsterTotal: "",
      salmonTotal: "",
      salesTotal: "",
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
      // console.log(this.paymentInformationId);
      // console.log(this.tuna.val);
      // console.log(this.lobster.val);
      // console.log(this.tuna.val);
      // console.log(this.customerID);
      this.tunaTotal = (this.tuna.val * 2.50);
      this.lobsterTotal = (this.lobster.val * 9.25);
      this.salmonTotal = (this.salmon.val * 3.50);
      this.salesTotal = (this.tunaTotal + this.lobsterTotal + this.salmonTotal);
    },

    async makePayment() {
      // console.log(this.token);
      console.log(this.paymentInformationId);
      console.log(this.salesTotal);
      console.log("account number: 1122334455");
      console.log(this.executionDate);
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
