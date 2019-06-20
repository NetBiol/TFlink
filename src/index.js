import "./css/main.css";

var data_url_prefix = "";

webix.ready(function () {
  var dtable = new webix.ui({
    container: "browsetable",
    id: "dtable",
    view: "datatable",
    css: "",
    columns: [{
        id: "uniprotAC_tf",
        map: "#data0#",
        header: ["uniprotAC_tf", {
          content: "textFilter"
        }],
        adjust: true
      },
      {
        id: "uniprotAC_target",
        map: "#data1#",
        header: ["uniprotAC_target", {
          content: "textFilter"
        }],
        adjust: true
      },
      {
        id: "otherAC_tf",
        map: "#data2#",
        header: ["otherAC_tf", {
          content: "textFilter"
        }],
        adjust: true
      },
      {
        id: "otherAC_target",
        map: "#data3#",
        header: ["otherAC_target", {
          content: "textFilter"
        }],
        adjust: true
      },
      {
        id: "name_tf",
        map: "#data4#",
        header: ["name_tf", {
          content: "textFilter"
        }],
        adjust: true
      },
      {
        id: "name_target",
        map: "#data5#",
        header: ["name_target", {
          content: "textFilter"
        }],
        adjust: true
      },
      {
        id: "detection_method",
        map: "#data6#",
        header: ["detection_method", {
          content: "textFilter"
        }],
        adjust: true
      },
      {
        id: "pubmedAC",
        map: "#data7#",
        header: ["pubmedAC", {
          content: "textFilter"
        }],
        adjust: true
      },
      {
        id: "source_database",
        map: "#data9#",
        header: ["source_database", {
          content: "textFilter"
        }],
        adjust: true
      }
    ],
    resizeColumn: true,
    datatype: "csv",
    url: data_url_prefix + 'data/nodes.csv',
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
        window.location.href = data_url_prefix + "protein/" + dtable.getItem(id.row).uniprot.toLowerCase() + "/";
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
    dtable.load(data_url_prefix + "data/nodes" + newv + ".csv");
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