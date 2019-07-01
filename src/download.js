import {
  strict
} from "assert";

var species_select = [{
    view: "label",
    label: "Select a species:"
  },
  {
    view: "select",
    name: "species",
    options: "data/spec_list.json"
  }
];
var species_select_form = new webix.ui({
  css: "",
  container: "species_select_div",
  id: "species_select_form",
  view: "form",
  scroll: false,
  width: 300,
  elements: species_select
});

const formats = {
  exp_int_table: 'experimental interaction table',
  exp_int_mitab: 'experimental interaction  MITAB',
  pred_int_table: 'predicted interaction table',
  pred_int_mitab: 'predicted interaction MITAB',
  bind_table: 'binding site table',
  bind_seq: 'binding site sequences'
}

var data = {
  Caenorhabditis_elegans: [{
    exp_int_table: "Caenorhabditis_elegans_interactions_LS_simpleFormat.csv.gz",
    exp_int_mitab: "Caenorhabditis_elegans_interactions_LS_mitab.tsv.gz",
    pred_int_table: "Caenorhabditis_elegans_interactions_SS_simpleFormat.csv",
    pred_int_mitab: "Caenorhabditis_elegans_interactions_SS_mitab.tsv",
    bind_table: "Caenorhabditis_elegans_bindingSites_LS_annotation.csv",
    bind_seq: "Caenorhabditis_elegans_LS_bindingSites.fasta"
  }]
};

$$("species_select_form").elements["species"].attachEvent("onChange", function (newv, oldv) {
  var html = '';
  $.each(data[newv][0], function (i, item) {
    console.log(i)
    html += `<p><a href="data/download/${item}"><i>${newv}</i> ${formats[i]}</a></p>`;
  });
  $("#download_div").html(html);
  console.log(data[newv][0])
});