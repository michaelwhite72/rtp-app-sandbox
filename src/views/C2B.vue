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
            name="CustomerID"
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
            v-model="ex1.val"
            :label="ex1.label"
            :thumb-color="ex1.color"
            thumb-label="always"
          ></v-slider>
        </v-col>
        <!-- Lobster Roll -->
        <v-col class="d-flex" cols="2" sm="4">
          <v-slider
            v-model="ex2.val"
            :label="ex2.label"
            :thumb-color="ex2.color"
            thumb-label="always"
          ></v-slider>
        </v-col>
        <!-- Waffle Fries-->
        <v-col class="d-flex" cols="2" sm="4">
          <v-slider
            v-model="ex3.val"
            :label="ex3.label"
            :thumb-color="ex3.color"
            thumb-label="always"
          ></v-slider>
        </v-col>



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
      ex1: { label: 'Firemans Four', val: 0, color: 'blue' },
      ex2: { label: 'Lobster Roll', val: 0, color: 'red' },
      ex3: { label: 'Waffle Fries', val: 0, color: 'orange' },
    };
  },
  created: function() {},
  methods: {},
};
</script>
