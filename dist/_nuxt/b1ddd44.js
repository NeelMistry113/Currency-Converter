(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{284:function(t,o,e){var content=e(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(132).default)("8d16e8a0",content,!0,{sourceMap:!1})},285:function(t,o,e){"use strict";var v=e(2),n=e(7),r=e(46),_=e(286),l=e(198),c=e(3),f=RangeError,d=String,D=Math.floor,m=n(l),h=n("".slice),R=n(1..toFixed),P=function(t,o,e){return 0===o?e:o%2==1?P(t,o-1,e*t):P(t*t,o/2,e)},N=function(data,t,o){for(var e=-1,v=o;++e<6;)v+=t*data[e],data[e]=v%1e7,v=D(v/1e7)},K=function(data,t){for(var o=6,e=0;--o>=0;)e+=data[o],data[o]=D(e/t),e=e%t*1e7},w=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var o=d(data[t]);s=""===s?o:s+m("0",7-o.length)+o}return s};v({target:"Number",proto:!0,forced:c((function(){return"0.000"!==R(8e-5,3)||"1"!==R(.9,0)||"1.25"!==R(1.255,2)||"1000000000000000128"!==R(0xde0b6b3a7640080,0)}))||!c((function(){R({})}))},{toFixed:function(t){var o,e,v,n,l=_(this),c=r(t),data=[0,0,0,0,0,0],D="",R="0";if(c<0||c>20)throw f("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return d(l);if(l<0&&(D="-",l=-l),l>1e-21)if(e=(o=function(t){for(var o=0,e=t;e>=4096;)o+=12,e/=4096;for(;e>=2;)o+=1,e/=2;return o}(l*P(2,69,1))-69)<0?l*P(2,-o,1):l/P(2,o,1),e*=4503599627370496,(o=52-o)>0){for(N(data,0,e),v=c;v>=7;)N(data,1e7,0),v-=7;for(N(data,P(10,v,1),0),v=o-1;v>=23;)K(data,1<<23),v-=23;K(data,1<<v),N(data,1,1),K(data,2),R=w(data)}else N(data,0,e),N(data,1<<-o,0),R=w(data)+m("0",c);return R=c>0?D+((n=R.length)<=c?"0."+m("0",c-n)+R:h(R,0,n-c)+"."+h(R,n-c)):D+R}})},286:function(t,o,e){var v=e(7);t.exports=v(1..valueOf)},287:function(t,o,e){"use strict";e(284)},288:function(t,o,e){var v=e(131)(!1);v.push([t.i,"html[data-v-52974b38]{background:#f4f4f4}#app[data-v-52974b38],.Maincontainer[data-v-52974b38]{display:flex;flex-direction:column;align-items:center;justify-content:center}#app[data-v-52974b38]{height:100%}h1[data-v-52974b38]{color:#2c312e}img[data-v-52974b38]{width:150px}.container[data-v-52974b38]{width:50%;height:100%;flex-direction:column;justify-content:center;text-align:center}.container[data-v-52974b38],.container-two[data-v-52974b38]{display:flex;align-items:center}.container-two[data-v-52974b38]{justify-content:space-evenly;width:40%}.container-two button[data-v-52974b38]{padding:8px;font-size:18px;width:40%;height:10%}input[data-v-52974b38],select[data-v-52974b38]{padding:8px;margin:8px}input[data-v-52974b38]{font-size:16px}#lastlyUpdated[data-v-52974b38]{font-weight:700}",""]),t.exports=v},289:function(t,o,e){"use strict";e.r(o);e(47),e(38),e(16),e(285);var v={name:"Converter",data:function(){return{data:[],currency_one:"USD",currency_two:"INR",rate:"",amountOne:1,amountTwo:0}},methods:{fetchData:function(){var t=this;fetch("https://v6.exchangerate-api.com/v6/85083e3fe731e2358dafac03/latest/".concat(this.currency_one)).then((function(t){return t.json()})).then((function(data){console.log(data),t.data=data,t.rate=data.conversion_rates[t.currency_two],t.amountTwo=t.amountOne*t.rate.toFixed(2)}))},fetchData2:function(){var t=this;fetch("https://v6.exchangerate-api.com/v6/85083e3fe731e2358dafac03/latest/".concat(this.currency_two)).then((function(t){return t.json()})).then((function(data){console.log(data),t.data=data,t.rate=data.conversion_rates[t.currency_one],t.amountOne=t.amountTwo*t.rate.toFixed(2)}))},switchValue:function(){var t=this.currency_one;this.currency_one=this.currency_two,this.currency_two=t,this.fetchData()}},mounted:function(){this.fetchData()}},n=(e(287),e(61)),component=Object(n.a)(v,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"Maincontainer"},[o("h1",[t._v("Currency Exchange")]),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"container-one"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.currency_one,expression:"currency_one"}],attrs:{name:"first-currency",id:"first-currency"},on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currency_one=o.target.multiple?e:e[0]}}},[o("option",{attrs:{value:"AED"}},[t._v("AED")]),t._v(" "),o("option",{attrs:{value:"ARS"}},[t._v("ARS")]),t._v(" "),o("option",{attrs:{value:"AUD"}},[t._v("AUD")]),t._v(" "),o("option",{attrs:{value:"BGN"}},[t._v("BGN")]),t._v(" "),o("option",{attrs:{value:"BRL"}},[t._v("BRL")]),t._v(" "),o("option",{attrs:{value:"BSD"}},[t._v("BSD")]),t._v(" "),o("option",{attrs:{value:"CAD"}},[t._v("CAD")]),t._v(" "),o("option",{attrs:{value:"CHF"}},[t._v("CHF")]),t._v(" "),o("option",{attrs:{value:"CLP"}},[t._v("CLP")]),t._v(" "),o("option",{attrs:{value:"CNY"}},[t._v("CNY")]),t._v(" "),o("option",{attrs:{value:"COP"}},[t._v("COP")]),t._v(" "),o("option",{attrs:{value:"CZK"}},[t._v("CZK")]),t._v(" "),o("option",{attrs:{value:"DKK"}},[t._v("DKK")]),t._v(" "),o("option",{attrs:{value:"DOP"}},[t._v("DOP")]),t._v(" "),o("option",{attrs:{value:"EGP"}},[t._v("EGP")]),t._v(" "),o("option",{attrs:{value:"EUR"}},[t._v("EUR")]),t._v(" "),o("option",{attrs:{value:"FJD"}},[t._v("FJD")]),t._v(" "),o("option",{attrs:{value:"GBP"}},[t._v("GBP")]),t._v(" "),o("option",{attrs:{value:"GTQ"}},[t._v("GTQ")]),t._v(" "),o("option",{attrs:{value:"HKD"}},[t._v("HKD")]),t._v(" "),o("option",{attrs:{value:"HRK"}},[t._v("HRK")]),t._v(" "),o("option",{attrs:{value:"HUF"}},[t._v("HUF")]),t._v(" "),o("option",{attrs:{value:"IDR"}},[t._v("IDR")]),t._v(" "),o("option",{attrs:{value:"ILS"}},[t._v("ILS")]),t._v(" "),o("option",{attrs:{value:"INR"}},[t._v("INR")]),t._v(" "),o("option",{attrs:{value:"ISK"}},[t._v("ISK")]),t._v(" "),o("option",{attrs:{value:"JPY"}},[t._v("JPY")]),t._v(" "),o("option",{attrs:{value:"KRW"}},[t._v("KRW")]),t._v(" "),o("option",{attrs:{value:"KZT"}},[t._v("KZT")]),t._v(" "),o("option",{attrs:{value:"MXN"}},[t._v("MXN")]),t._v(" "),o("option",{attrs:{value:"MYR"}},[t._v("MYR")]),t._v(" "),o("option",{attrs:{value:"NOK"}},[t._v("NOK")]),t._v(" "),o("option",{attrs:{value:"NZD"}},[t._v("NZD")]),t._v(" "),o("option",{attrs:{value:"PAB"}},[t._v("PAB")]),t._v(" "),o("option",{attrs:{value:"PEN"}},[t._v("PEN")]),t._v(" "),o("option",{attrs:{value:"PHP"}},[t._v("PHP")]),t._v(" "),o("option",{attrs:{value:"PKR"}},[t._v("PKR")]),t._v(" "),o("option",{attrs:{value:"PLN"}},[t._v("PLN")]),t._v(" "),o("option",{attrs:{value:"PYG"}},[t._v("PYG")]),t._v(" "),o("option",{attrs:{value:"RON"}},[t._v("RON")]),t._v(" "),o("option",{attrs:{value:"RUB"}},[t._v("RUB")]),t._v(" "),o("option",{attrs:{value:"SAR"}},[t._v("SAR")]),t._v(" "),o("option",{attrs:{value:"SEK"}},[t._v("SEK")]),t._v(" "),o("option",{attrs:{value:"SGD"}},[t._v("SGD")]),t._v(" "),o("option",{attrs:{value:"THB"}},[t._v("THB")]),t._v(" "),o("option",{attrs:{value:"TRY"}},[t._v("TRY")]),t._v(" "),o("option",{attrs:{value:"TWD"}},[t._v("TWD")]),t._v(" "),o("option",{attrs:{value:"UAH"}},[t._v("UAH")]),t._v(" "),o("option",{attrs:{value:"USD"}},[t._v("USD")]),t._v(" "),o("option",{attrs:{value:"UYU"}},[t._v("UYU")]),t._v(" "),o("option",{attrs:{value:"VND"}},[t._v("VND")]),t._v(" "),o("option",{attrs:{value:"ZAR"}},[t._v("ZAR")])]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.amountOne,expression:"amountOne"}],attrs:{type:"number",name:"input-one",id:"input-one"},domProps:{value:t.amountOne},on:{input:[function(o){o.target.composing||(t.amountOne=o.target.value)},function(o){return t.fetchData()}]}})]),t._v(" "),o("div",{staticClass:"container-two"},[o("button",{on:{click:function(o){return t.switchValue()}}},[t._v("Switch")]),t._v(" "),o("h4",{attrs:{id:"baseValue"}},[t._v("1 "+t._s(t.currency_one)+" = "+t._s(t.rate)+" "+t._s(t.currency_two))])]),t._v(" "),o("div",{staticClass:"container-three"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.currency_two,expression:"currency_two"}],attrs:{name:"second-currency",id:"second-currency"},on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currency_two=o.target.multiple?e:e[0]}}},[o("option",{attrs:{value:"AED"}},[t._v("AED")]),t._v(" "),o("option",{attrs:{value:"ARS"}},[t._v("ARS")]),t._v(" "),o("option",{attrs:{value:"AUD"}},[t._v("AUD")]),t._v(" "),o("option",{attrs:{value:"BGN"}},[t._v("BGN")]),t._v(" "),o("option",{attrs:{value:"BRL"}},[t._v("BRL")]),t._v(" "),o("option",{attrs:{value:"BSD"}},[t._v("BSD")]),t._v(" "),o("option",{attrs:{value:"CAD"}},[t._v("CAD")]),t._v(" "),o("option",{attrs:{value:"CHF"}},[t._v("CHF")]),t._v(" "),o("option",{attrs:{value:"CLP"}},[t._v("CLP")]),t._v(" "),o("option",{attrs:{value:"CNY"}},[t._v("CNY")]),t._v(" "),o("option",{attrs:{value:"COP"}},[t._v("COP")]),t._v(" "),o("option",{attrs:{value:"CZK"}},[t._v("CZK")]),t._v(" "),o("option",{attrs:{value:"DKK"}},[t._v("DKK")]),t._v(" "),o("option",{attrs:{value:"DOP"}},[t._v("DOP")]),t._v(" "),o("option",{attrs:{value:"EGP"}},[t._v("EGP")]),t._v(" "),o("option",{attrs:{value:"EUR"}},[t._v("EUR")]),t._v(" "),o("option",{attrs:{value:"FJD"}},[t._v("FJD")]),t._v(" "),o("option",{attrs:{value:"GBP"}},[t._v("GBP")]),t._v(" "),o("option",{attrs:{value:"GTQ"}},[t._v("GTQ")]),t._v(" "),o("option",{attrs:{value:"HKD"}},[t._v("HKD")]),t._v(" "),o("option",{attrs:{value:"HRK"}},[t._v("HRK")]),t._v(" "),o("option",{attrs:{value:"HUF"}},[t._v("HUF")]),t._v(" "),o("option",{attrs:{value:"IDR"}},[t._v("IDR")]),t._v(" "),o("option",{attrs:{value:"ILS"}},[t._v("ILS")]),t._v(" "),o("option",{attrs:{value:"INR"}},[t._v("INR")]),t._v(" "),o("option",{attrs:{value:"ISK"}},[t._v("ISK")]),t._v(" "),o("option",{attrs:{value:"JPY"}},[t._v("JPY")]),t._v(" "),o("option",{attrs:{value:"KRW"}},[t._v("KRW")]),t._v(" "),o("option",{attrs:{value:"KZT"}},[t._v("KZT")]),t._v(" "),o("option",{attrs:{value:"MXN"}},[t._v("MXN")]),t._v(" "),o("option",{attrs:{value:"MYR"}},[t._v("MYR")]),t._v(" "),o("option",{attrs:{value:"NOK"}},[t._v("NOK")]),t._v(" "),o("option",{attrs:{value:"NZD"}},[t._v("NZD")]),t._v(" "),o("option",{attrs:{value:"PAB"}},[t._v("PAB")]),t._v(" "),o("option",{attrs:{value:"PEN"}},[t._v("PEN")]),t._v(" "),o("option",{attrs:{value:"PHP"}},[t._v("PHP")]),t._v(" "),o("option",{attrs:{value:"PKR"}},[t._v("PKR")]),t._v(" "),o("option",{attrs:{value:"PLN"}},[t._v("PLN")]),t._v(" "),o("option",{attrs:{value:"PYG"}},[t._v("PYG")]),t._v(" "),o("option",{attrs:{value:"RON"}},[t._v("RON")]),t._v(" "),o("option",{attrs:{value:"RUB"}},[t._v("RUB")]),t._v(" "),o("option",{attrs:{value:"SAR"}},[t._v("SAR")]),t._v(" "),o("option",{attrs:{value:"SEK"}},[t._v("SEK")]),t._v(" "),o("option",{attrs:{value:"SGD"}},[t._v("SGD")]),t._v(" "),o("option",{attrs:{value:"THB"}},[t._v("THB")]),t._v(" "),o("option",{attrs:{value:"TRY"}},[t._v("TRY")]),t._v(" "),o("option",{attrs:{value:"TWD"}},[t._v("TWD")]),t._v(" "),o("option",{attrs:{value:"UAH"}},[t._v("UAH")]),t._v(" "),o("option",{attrs:{value:"USD"}},[t._v("USD")]),t._v(" "),o("option",{attrs:{value:"UYU"}},[t._v("UYU")]),t._v(" "),o("option",{attrs:{value:"VND"}},[t._v("VND")]),t._v(" "),o("option",{attrs:{value:"ZAR"}},[t._v("ZAR")])]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.amountTwo,expression:"amountTwo"}],attrs:{type:"number",name:"input-two",id:"input-two",placeholder:"0"},domProps:{value:t.amountTwo},on:{input:[function(o){o.target.composing||(t.amountTwo=o.target.value)},function(o){return t.fetchData2()}]}})]),t._v(" "),o("div",{staticClass:"container-four"},[o("h4",{attrs:{id:"lastlyUpdated"}},[t._v(t._s(t.data.time_last_update_utc))])])])])}),[],!1,null,"52974b38",null);o.default=component.exports},290:function(t,o,e){"use strict";e.r(o);var v={components:{Converter:e(289).default},name:"IndexPage"},n=e(61),component=Object(n.a)(v,(function(){return(0,this._self._c)("converter")}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Converter:e(289).default})}}]);