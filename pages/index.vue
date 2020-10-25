<template>
  <div>
    <br />
    <v-card class="mx-auto pa-4" elevation="11">
      <h3>แบบฟอร์มการชำระเงิน</h3>
      <br />
      <v-form ref="form" v-model="valid">
        <v-row>
          <v-col cols="4">
            <v-text-field
              prepend-icon="mdi-account"
              v-model="name"
              label="ชื่อ-นามสกุล"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="4">
            <v-text-field
              prepend-icon="mdi-cellphone"
              v-model="phone"
              label="เบอร์ติดต่อ"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              prepend-icon="mdi-bank"
              v-model="price"
              label="ราคา"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <br />
        <center>
          <v-img
            src="https://th.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
            width="200px"
          ></v-img>
        </center>
        <br />
        <center>
          <h3>Price :{{ price - 1 }}.XX</h3>
        </center>
        <v-btn :disabled="!valid" color="success" @click="addData">
          ชำระเงิน
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      valid: false,
      phone: '',
      name: '',
      price: '',
      arr: {},
    }
  },
  methods: {
    addData() {
      const data = {
        phone: this.phone,
        name: this.name,
        price: this.price,
      }
      db.collection('payment')
        .doc()
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> MyForm')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
