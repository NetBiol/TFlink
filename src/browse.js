webix.ready(function () {
  var dtable = new webix.ui({
    container: "browsetable",
    id: "dtable",
    view: "datatable",
    css: "",
    columns: [
      {
        id: "protein_name",
        map: "#data0#",
        header: [
          "Name",
          {
            content: "textFilter",
          },
        ],
        width: 200,
      },
      {
        id: "uniprot_id",
        map: "#data1#",
        header: [
          "Uniprot ID",
          {
            content: "textFilter",
          },
        ],
        width: 150,
      },
      {
        id: "ncbi_gene_id",
        map: "#data2#",
        header: [
          "NCBI Gene ID",
          {
            content: "textFilter",
          },
        ],
        width: 300,
      },
      {
        id: "function",
        map: "#data3#",
        header: [
          "Function",
          {
            content: "selectFilter",
          },
        ],
        width: 250,
      },
    ],
    url: "data/browse_tables/all_species_LT_browse_update.csv",
    resizeColumn: true,
    datatype: "csv",
    autoheight: true,
    autowidth: true,
    pager: {
      css: "",
      template:
        "{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
      container: "paging_here",
      size: 25,
      group: 5,
    },
    hover: "browse_row_hover",
    on: {
      onItemClick: function (id, e, trg) {
        window.open(
          "protein/" + dtable.getItem(id.row).uniprot_id.toLowerCase() + "/"
        );
      },
    },
  });
  webix.extend($$("dtable"), webix.ProgressBar);
  var species_select = [
    {
      view: "label",
      label: "Select an organism:",
    },
    {
      view: "select",
      css: "browse-select",
      name: "species",
      options: "data/spec_list.json",
    },
  ];
  var species_select_form = new webix.ui({
    css: "",
    container: "species_select_div",
    id: "species_select_form",
    view: "form",
    scroll: false,
    width: 300,
    elements: species_select,
  });
  $$("species_select_form").elements["species"].attachEvent(
    "onChange",
    function (newv, oldv) {
      $$("dtable").showProgress({
        type: "bottom",
        delay: 3000,
        hide: true,
      });
      dtable.clearAll();
      dtable.load(
          "data/browse_tables/" +
          newv +
          "_LT_browse_update.csv",
        "csv"
      );
      $$("dtable").show();
      $$("dtable").refresh();
    }
  );
});
