!function(a){var n={};function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=a,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}({9:function(t,e){$(document).ready(function(){targetTable=$("#target_data").val()?webix.ui({container:"target_div",autowidth:!0,rows:[{id:"targetTable",view:"datatable",css:"",columns:[{id:"data0",header:["Protein name",{content:"textFilter"}],css:"rank",adjust:!0},{id:"data1",header:["Uniprot ID",{content:"textFilter"}],adjust:!0},{id:"data2",header:["NCBI Gene ID",{content:"textFilter"}],adjust:!0},{id:"data3",header:["Source database",{content:"textFilter"}],adjust:!0},{id:"data4",header:["Detection method",{content:"textFilter"}],adjust:!0},{id:"data5",header:["Publications",{content:"textFilter"}],adjust:!0}],autoheight:!0,autowidth:!0,datatype:"csv",data:$("#target_data").val()}]}):void 0,tfTable=$("#tf_data").val()?webix.ui({container:"tf_div",autowidth:!0,rows:[{id:"tfTable",view:"datatable",css:"",columns:[{id:"data0",header:["Protein name",{content:"textFilter"}],css:"rank",adjust:!0},{id:"data1",header:["Uniprot ID",{content:"textFilter"}],adjust:!0},{id:"data2",header:["NCBI Gene ID",{content:"textFilter"}],adjust:!0},{id:"data3",header:["Source database",{content:"textFilter"}],adjust:!0},{id:"data4",header:["Detection method",{content:"textFilter"}],adjust:!0},{id:"data5",header:["Publications",{content:"textFilter"}],adjust:!0}],autoheight:!0,autowidth:!0,datatype:"csv",data:$("#tf_data").val()}]}):void 0})}});