import _ from 'lodash';

var data_url_prefix = "";

webix.ready(function() {
  var dtable = new webix.ui({
    container: "browsetable",
    id: "dtable",
    view: "datatable",
    css: "",
    hidden: true,
    columns: [{
        id: "protein_name",
        map:"#data0#",
        header: ["Protein name", {
          content: "textFilter"
        }],
        adjust: true
      },
      {
        id: "uniprot_id",
        map:"#data1#",
        header: ["Uniprot ID", {
          content: "textFilter"
        }],
        adjust: true
      },
      {
        id: "ncbi_gene_id",
        map: "#data2#",
        header: ["NCBI Gene ID", {
          content: "textFilter"
        }],
        adjust: true
      },
      {
        id: "function",
        map: "#data3#",
        header: ["Function", {
          content: "selectFilter"
        }],
        adjust: true
      }
    ],
    resizeColumn: true,
    datatype: "csv",
    autoheight: true,
    autowidth: true,
    pager: {
      css: "",
      template: "{common.prev()}{common.next()}Page {common.page()} from #limit#",
      container: "paging_here",
      size: 25,
      group: 5
    },
    hover: "browse_row_hover",
    on: {
      "onItemClick": function (id, e, trg) {
        window.location.href = data_url_prefix + "protein/" + dtable.getItem(id.row).uniprot_id.toLowerCase() + "/";
        // window.location.href = "uniprot.html";
        //webix.message("Click on row: "+dtable.getItem(id.row).uniprot);
      }
    }
  });
  webix.extend($$("dtable"), webix.ProgressBar);
  var species_select = [{
      view: "label",
      label: "Select a species:"
    },
    {
      view: "select",
      name: "species",
      options: data_url_prefix + "data/spec_list.json"
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
  $$("species_select_form").elements["species"].attachEvent("onChange", function (newv, oldv) {
    $$("dtable").showProgress({
      type: "bottom",
      delay: 3000,
      hide: true
    });
    dtable.clearAll();
    dtable.load(data_url_prefix + "data/browse_tables/" + newv + "_LT_browse" + ".csv", "csv");
    $$("dtable").show();
    $$("dtable").refresh();
    // webix.message("Value changed from: "+oldv+" to: "+newv);
  });
  // $(window).resize(function () {
  //   if ($(window).width() < 1050) {
  //     dtable.hideColumn("numort");
  //     dtable.hideColumn("numint");
  //   }
  //   if ($(window).width() >= 1050) {
  //     dtable.showColumn("numort");
  //     dtable.showColumn("numint");
  //   }
  //   if ($(window).width() < 850) {
  //     dtable.setColumnWidth("uniprot", 80);
  //     dtable.setColumnWidth("genename", 120);
  //     dtable.setColumnWidth("locus", 120);
  //   }
  //   if ($(window).width() >= 850) {
  //     dtable.setColumnWidth("uniprot", 150);
  //     dtable.setColumnWidth("genename", 250);
  //     dtable.setColumnWidth("locus", 250);
  //   }
  // });
  // if ($(window).width() < 1050) {
  //   dtable.hideColumn("numort");
  //   dtable.hideColumn("numint");
  // }
  // if ($(window).width() < 850) {
  //   dtable.setColumnWidth("uniprot", 80);
  //   dtable.setColumnWidth("genename", 120);
  //   dtable.setColumnWidth("locus", 120);
  // }
});