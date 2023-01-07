<template>
    <div class="Maincontainer">
        <h1>Currency Exchange</h1>
        <div class="container">
            <div class="container-one">
            <select name="first-currency" id="first-currency" v-model="currency_one">
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GTQ">GTQ</option>
                <option value="HKD">HKD</option>
                <option value="HRK">HRK</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="KZT">KZT</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="USD">USD</option>
                <option value="UYU">UYU</option>
                <option value="VND">VND</option>
                <option value="ZAR">ZAR</option>
            </select>
            <input type="number" name="input-one" id="input-one" v-model="amountOne" @input="fetchData()" />
            </div>

            <div class="container-two">
            <button @click="switchValue()">Switch</button>
            <h4 id="baseValue">1 {{ currency_one }} = {{rate}} {{ currency_two }}</h4>
            </div>

            <div class="container-three">
            <select name="second-currency" id="second-currency" v-model="currency_two">
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GTQ">GTQ</option>
                <option value="HKD">HKD</option>
                <option value="HRK">HRK</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="KZT">KZT</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="USD">USD</option>
                <option value="UYU">UYU</option>
                <option value="VND">VND</option>
                <option value="ZAR">ZAR</option>
            </select>
            <input type="number" name="input-two" id="input-two" placeholder="0" v-model="amountTwo" @input="fetchData2()" />
            </div>

            <div class="container-four">
            <h4 id="lastlyUpdated">{{ data.time_last_update_utc }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Converter",
        data() {
            return {
                data:[],
                currency_one:"USD",
                currency_two:"INR",
                rate:"",
                amountOne:1,
                amountTwo: 0,
                };
        },

        methods: {
            fetchData(){
            fetch(`https://v6.exchangerate-api.com/v6/85083e3fe731e2358dafac03/latest/${this.currency_one}`
            )
            .then((res)=> res.json())
            .then((data) => {
                console.log(data)
                this.data = data;
                this.rate = data.conversion_rates[this.currency_two];
                this.amountTwo = this.amountOne * this.rate.toFixed(2)
            });
            },

            fetchData2(){
            fetch(`https://v6.exchangerate-api.com/v6/85083e3fe731e2358dafac03/latest/${this.currency_two}`
            )
            .then((res)=> res.json())
            .then((data) => { 
                console.log(data)
                this.data = data;
                this.rate = data.conversion_rates[this.currency_one];
                this.amountOne = this.amountTwo * this.rate.toFixed(2)
            });
            },

            switchValue(){
            const temporaryValue = this.currency_one 
            this.currency_one = this.currency_two
            this.currency_two = temporaryValue
            this.fetchData();
            }
        },

        mounted(){
            this.fetchData();
            // this.fetchData2();
        }
    }
</script>

<style scoped>
html{
  background: #f4f4f4;
}
.Maincontainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#app{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1{
  color: #2c312e;
}

img{
  width: 150px;
}

.container {
  width: 50% ;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.container-two{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
}

.container-two button {
  padding: 8px;
  font-size: 18px;
  width: 40%;
  height: 10%;
}

select{
  padding: 8px;
  margin: 8px;
}

input{
  padding: 8px;
  margin: 8px;
  font-size: 16px;
}

#lastlyUpdated{
  font-weight: 700;
}

</style>