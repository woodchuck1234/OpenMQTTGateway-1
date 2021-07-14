(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{391:function(e,o,t){e.exports=t.p+"assets/img/OpenMQTTgateway_ESP32_binary_flash.e2aec4db.png"},392:function(e,o,t){e.exports=t.p+"assets/img/OpenMQTTgateway_ESP32_binary_flash2.047e266a.png"},393:function(e,o,t){e.exports=t.p+"assets/img/OpenMQTTgateway_NodeMCU_PyFlasher.71bc778e.png"},434:function(e,o,t){"use strict";t.r(o);var a=t(42),s=Object(a.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"option-1-upload-ready-to-go-binaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-1-upload-ready-to-go-binaries"}},[e._v("#")]),e._v(" (Option 1) Upload ready-to-go binaries")]),e._v(" "),a("p",[e._v("This section is useful if you want to directly flash your ESP from your desktop. Once flashed you can change  wifi and broker settings.\nNevertheless you will not be able to change advanced parameters; if you want to do so, refer to "),a("RouterLink",{attrs:{to:"/upload/builds.html"}},[e._v("Upload your configurations")]),e._v(" section.")],1),e._v(" "),a("p",[e._v("Download the binary corresponding to your board and gateway "),a("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" from github and uncompress it.")]),e._v(" "),a("h2",{attrs:{id:"esp32"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp32"}},[e._v("#")]),e._v(" ESP32")]),e._v(" "),a("ul",[a("li",[e._v("Download the bootloader "),a("a",{attrs:{href:"https://github.com/espressif/arduino-esp32/raw/master/tools/sdk/esp32/bin/bootloader_dio_80m.bin",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Download the boot_app0 from "),a("a",{attrs:{href:"https://github.com/espressif/arduino-esp32/raw/master/tools/partitions/boot_app0.bin",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Download the flash tool utility from espressif:\nhttps://www.espressif.com/en/products/hardware/esp32/resources")]),e._v(" "),a("li",[e._v("Uncompress the package")]),e._v(" "),a("li",[e._v("Execute "),a("code",[e._v("flash_download_tools")])]),e._v(" "),a("li",[e._v("Choose Developper mode")]),e._v(" "),a("li",[e._v("Choose ESP32 DownloadTool")]),e._v(" "),a("li",[e._v("Set the files and the address as below:\n"),a("img",{attrs:{src:t(391),alt:"Flash download tool"}}),e._v("\nAnd set the parameters used by arduino IDE, we are able to upload to ESP32 a binary file containing OpenMQTTGateway.")]),e._v(" "),a("li",[e._v("Set the config as above")]),e._v(" "),a("li",[e._v("Connect your ESP32 board and select the COM port")]),e._v(" "),a("li",[e._v("Click on erase if it is your first upload")]),e._v(" "),a("li",[e._v("If you see SYNC (above the START button) for more than 5 seconds, press the boot button of your ESP32")]),e._v(" "),a("li",[e._v("Once done you can click on START button")]),e._v(" "),a("li",[e._v("If you see SYNC (above the START button) for more than 5 seconds, press the boot button of your ESP32\nThe upload details appears in the rear shell windows, you can see also the progress bar changing.")]),e._v(" "),a("li",[e._v('Once done the flash tool display "FINISH" like below\n'),a("img",{attrs:{src:t(392),alt:"Flash download tool 2"}})])]),e._v(" "),a("h2",{attrs:{id:"esp8266"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp8266"}},[e._v("#")]),e._v(" ESP8266")]),e._v(" "),a("ul",[a("li",[e._v("Download the NodeMCU Py Flasher tool :\nhttps://github.com/marcelstoer/nodemcu-pyflasher/releases")]),e._v(" "),a("li",[e._v("Execute "),a("code",[e._v("NodeMCU-PyFlasher")])]),e._v(" "),a("li",[e._v("Set the files and parameters as below:\n"),a("img",{attrs:{src:t(393),alt:""}})]),e._v(" "),a("li",[e._v("Connect your board and select the COM port")]),e._v(" "),a("li",[e._v("Click on "),a("em",[e._v("FlashNodeMCU")]),e._v("\nThe upload details appears.")])]),e._v(" "),a("p",[e._v("With an ESP if you did not set your network and mqtt parameters manually you can now open the "),a("RouterLink",{attrs:{to:"/upload/portal.html"}},[e._v("web portal configuration")]),e._v(".")],1),e._v(" "),a("p",[e._v("Note that to reset the wifi and mqtt settings you can check "),a("em",[e._v("yes, wipes all data")])])])}),[],!1,null,null,null);o.default=s.exports}}]);