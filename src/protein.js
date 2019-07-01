$(document).ready(function () {
  var targetTable = $('#target_data').val() ? webix.ui({
    container: "target_div",
    autowidth: true,
    rows: [{
      id: "targetTable",
      view: "datatable",
      css: "",
      columns: [{
          id: "data0",
          header: ["Protein name", {
            content: "textFilter"
          }],
          css: "rank",
          adjust: true
        },
        {
          id: "data1",
          header: ["Uniprot ID", {
            content: "textFilter"
          }],
          adjust: true
        },
        {
          id: "data2",
          header: ["NCBI Gene ID", {
            content: "textFilter"
          }],
          adjust: true
        },
        {
          id: "data3",
          header: ["Source database", {
            content: "textFilter"
          }],
          adjust: true
        },
        {
          id: "data4",
          header: ["Detection method", {
            content: "textFilter"
          }],
          adjust: true
        },
        {
          id: "data5",
          header: ["Publications", {
            content: "textFilter"
          }],
          adjust: true
        }
      ],
      autoheight: true,
      autowidth: true,
      datatype: "csv",
      data: $('#target_data').val(),
      pager: {
        css: "",
        template: "{common.prev()}{common.next()}Page {common.page()} from #limit#",
        container: "target_paging",
        size: 10,
        group: 5
      },
    }, ]
  }) : undefined;

  var tfTable = $('#tf_data').val() ? webix.ui({
    container: "tf_div",
    autowidth: true,
    rows: [{
      id: "tfTable",
      view: "datatable",
      css: "",
      columns: [{
          id: "data0",
          header: ["Protein name", {
            content: "textFilter"
          }],
          css: "rank",
          adjust: true
        },
        {
          id: "data1",
          header: ["Uniprot ID", {
            content: "textFilter"
          }],
          adjust: true
        },
        {
          id: "data2",
          header: ["NCBI Gene ID", {
            content: "textFilter"
          }],
          adjust: true
        },
        {
          id: "data3",
          header: ["Source database", {
            content: "textFilter"
          }],
          adjust: true
        },
        {
          id: "data4",
          header: ["Detection method", {
            content: "textFilter"
          }],
          adjust: true
        },
        {
          id: "data5",
          header: ["Publications", {
            content: "textFilter"
          }],
          adjust: true
        }
      ],
      autoheight: true,
      autowidth: true,
      datatype: "csv",
      data: $('#tf_data').val(),
      pager: {
        css: "",
        template: "{common.prev()}{common.next()}Page {common.page()} from #limit#",
        container: "tf_paging",
        size: 10,
        group: 5
      },
    }, ]
  }) : undefined;

  var bindingSitesTable = $('#binding_sites_data').val() ? webix.ui({
    container: "binding_sites_div",
    autowidth: true,
    rows: [{
      id: "bindingSitesTable",
      view: "datatable",
      css: "",
      columns: [{
          id: "data0",
          header: ["Protein name", {
            content: "textFilter"
          }],
          css: "rank",
          adjust: true
        },
        {
          id: "data1",
          header: ["Uniprot ID", {
            content: "textFilter"
          }],
          adjust: true
        },
        {
          id: "data2",
          header: ["NCBI Gene ID", {
            content: "textFilter"
          }],
          adjust: true
        },
        {
          id: "data3",
          header: ["Source database", {
            content: "textFilter"
          }],
          adjust: true
        },
        {
          id: "data4",
          header: ["Detection method", {
            content: "textFilter"
          }],
          adjust: true
        },
        {
          id: "data5",
          header: ["Publications", {
            content: "textFilter"
          }],
          adjust: true
        }
      ],
      autoheight: true,
      autowidth: true,
      datatype: "csv",
      data: $('#binding_sites_data').val(),
      pager: {
        css: "",
        template: "{common.prev()}{common.next()}Page {common.page()} from #limit#",
        container: "binding_sites_paging",
        size: 10,
        group: 5
      },
    }, ]
  }) : undefined;

  //   if ($(window).width() < 850) {
  //     $$('interactiontable').hideColumn("data2");
  //     $$('interactiontable').setColumnWidth("data0", 80);
  //     $$('interactiontable').setColumnWidth("data1", 80);
  //   };
  // });

  // $(window).resize(function () {
  //   if ($(window).width() < 850) {
  //     $$('interactiontable').hideColumn("data2");
  //     $$('interactiontable').setColumnWidth("data0", 80);
  //     $$('interactiontable').setColumnWidth("data1", 80);
  //     $$('interactiontable').setColumnWidth("data3", 100);
  //   }
  //   if ($(window).width() >= 850) {
  //     $$('interactiontable').showColumn("data2");
  //     $$('interactiontable').setColumnWidth("data0", 100);
  //     $$('interactiontable').setColumnWidth("data1", 100);
  //     $$('interactiontable').setColumnWidth("data3", 150);
  //   }
  // });
  // interactiontablediv.define("width", $("#interactiontablediv").width());
  // interactiontablediv.resize();
  // $(window).resize(function() {
  //     interactiontablediv.define("width", $("#interactiontablediv").width());
  //     interactiontablediv.resize();
  // });
  // $$('interactiontable').define("width", $("#interactiontablediv").width());
  // $$('interactiontable').resize();
  // $(window).resize(function() {
  //     $$('interactiontable').define("width", $("#interactiontablediv").width());
  //     $$('interactiontable').resize();
});