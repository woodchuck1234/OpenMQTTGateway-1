(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{370:function(t,e,r){t.exports=r.p+"assets/img/OpenMQTTgateway_Arduino_Addon_IR.d037a5e7.png"},371:function(t,e,r){t.exports=r.p+"assets/img/OpenMQTTgateway_ESP8266_Addon_IR.0b60a2b2.png"},372:function(t,e,r){t.exports=r.p+"assets/img/OpenMQTTgateway_ESP32_Addon_IR.0be79a89.png"},409:function(t,e,r){"use strict";r.r(e);var a=r(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ir-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ir-gateway"}},[t._v("#")]),t._v(" IR gateway")]),t._v(" "),a("h2",{attrs:{id:"compatible-parts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatible-parts"}},[t._v("#")]),t._v(" Compatible parts")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Module")]),t._v(" "),a("th",[t._v("Purpose")]),t._v(" "),a("th",[t._v("Where to Buy")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("IR diode")]),t._v(" "),a("td",[t._v("Emitting")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("IR receiver")]),t._v(" "),a("td",[t._v("Receiving")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("transistor 2N2222")]),t._v(" "),a("td",[t._v("Amplify uC signal for the IR diode")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("330 ohms resistor")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("220 ohms resistor")]),t._v(" "),a("td",[t._v("limit current to LED")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),a("OutboundLink")],1)])])])]),t._v(" "),a("p",[t._v("The IR setup can work with bc547 and a 4x3 LED-Matrix.")]),t._v(" "),a("h2",{attrs:{id:"pinout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pinout"}},[t._v("#")]),t._v(" Pinout")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Board")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Receiver Pin")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Emitter Pin")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Arduino UNO")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("D2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("D9")])]),t._v(" "),a("tr",[a("td",[t._v("ESP8266")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("D4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("D0")])]),t._v(" "),a("tr",[a("td",[t._v("ESP32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("27/"),a("strong",[t._v("26")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("14")])])])]),t._v(" "),a("p",[t._v("Connect the Emitter and Receiver to a 5V supply source, and the ground of your supply source to the ground of your board.")]),t._v(" "),a("h2",{attrs:{id:"arduino-hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arduino-hardware-setup"}},[t._v("#")]),t._v(" Arduino Hardware setup")]),t._v(" "),a("p",[a("img",{attrs:{src:r(370),alt:"IR"}})]),t._v(" "),a("h2",{attrs:{id:"esp8266-hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-hardware-setup"}},[t._v("#")]),t._v(" ESP8266 Hardware setup")]),t._v(" "),a("p",[a("img",{attrs:{src:r(371),alt:"IR"}})]),t._v(" "),a("h2",{attrs:{id:"esp32-hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp32-hardware-setup"}},[t._v("#")]),t._v(" ESP32 Hardware setup")]),t._v(" "),a("p",[a("img",{attrs:{src:r(372),alt:"IR"}})]),t._v(" "),a("h2",{attrs:{id:"credits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[t._v("#")]),t._v(" Credits")]),t._v(" "),a("p",[t._v("This gateway exists thanks to the work done on "),a("a",{attrs:{href:"https://github.com/z3t0/Arduino-IRremote",target:"_blank",rel:"noopener noreferrer"}},[t._v("IRRemote"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/crankyoldgit/IRremoteESP8266",target:"_blank",rel:"noopener noreferrer"}},[t._v("IRremoteESP8266"),a("OutboundLink")],1),t._v(" libraries. Thanks for the works of contributors and especialy "),a("a",{attrs:{href:"https://github.com/crankyoldgit",target:"_blank",rel:"noopener noreferrer"}},[t._v("@crankyoldgit"),a("OutboundLink")],1),t._v(" for its active contributions.")])])}),[],!1,null,null,null);e.default=s.exports}}]);