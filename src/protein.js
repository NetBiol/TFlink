$(document).ready(function() {
  var targetTable = $("#target_data").val()
    ? webix.ui({
        container: "target_div",
        rows: [
          {
            id: "targetTable",
            view: "datatable",
            css: "",
            columns: [
              {
                id: "data0",
                header: [
                  "Protein name",
                  {
                    content: "textFilter"
                  }
                ],
                adjust: true
              },
              {
                id: "data1",
                header: [
                  "Uniprot ID",
                  {
                    content: "textFilter"
                  }
                ],
                template:
                  "<a href='https://www.uniprot.org/uniprot/#data1#' target='_blank'>#data1#</a>",
                adjust: true
              },
              {
                id: "data2",
                header: [
                  "NCBI Gene ID",
                  {
                    content: "textFilter"
                  }
                ],
                template:
                  "<a href='https://www.ncbi.nlm.nih.gov/gene/?term=#data2#' target='_blank'>#data2#</a>",
                adjust: true
              },
              {
                id: "data3",
                header: [
                  "Source database",
                  {
                    content: "textFilter"
                  }
                ],
                fillspace: true
              },
              {
                id: "data4",
                header: [
                  "Detection method",
                  {
                    content: "textFilter"
                  }
                ],
                fillspace: true
              },
              {
                id: "data5",
                header: [
                  "Publication",
                  {
                    content: "textFilter"
                  }
                ],
                adjust: true
              }
            ],
            autoheight: true,
            scroll: false,
            datatype: "csv",
            data: $("#target_data").val(),
            pager: {
              css: "",
              template:
                "{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
              container: "target_paging",
              size: 10,
              group: 5
            }
          }
        ]
      })
    : undefined;

  var tfTable = $("#tf_data").val()
    ? webix.ui({
        container: "tf_div",
        autowidth: true,
        rows: [
          {
            id: "tfTable",
            view: "datatable",
            css: "",
            columns: [
              {
                id: "data0",
                header: [
                  "Protein name",
                  {
                    content: "textFilter"
                  }
                ],
                adjust: true
              },
              {
                id: "data1",
                header: [
                  "Uniprot ID",
                  {
                    content: "textFilter"
                  }
                ],
                template:
                  "<a href='https://www.uniprot.org/uniprot/#data1#' target='_blank'>#data1#</a>",
                adjust: true
              },
              {
                id: "data2",
                header: [
                  "NCBI Gene ID",
                  {
                    content: "textFilter"
                  }
                ],
                template:
                  "<a href='https://www.ncbi.nlm.nih.gov/gene/?term=#data2#' target='_blank'>#data2#</a>",
                adjust: true
              },
              {
                id: "data3",
                header: [
                  "Source database",
                  {
                    content: "textFilter"
                  }
                ],
                fillspace: true
              },
              {
                id: "data4",
                header: [
                  "Detection method",
                  {
                    content: "textFilter"
                  }
                ],
                fillspace: true
              },
              {
                id: "data5",
                header: [
                  "Publication",
                  {
                    content: "textFilter"
                  }
                ],
                adjust: true
              }
            ],
            autoheight: true,
            scroll: false,
            datatype: "csv",
            data: $("#tf_data").val(),
            pager: {
              css: "",
              template:
                "{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
              container: "tf_paging",
              size: 10,
              group: 5
            }
          }
        ]
      })
    : undefined;

  var bindingSitesTable = $("#binding_sites_data").val()
    ? webix.ui({
        container: "binding_sites_div",
        autowidth: true,
        rows: [
          {
            id: "bindingSitesTable",
            view: "datatable",
            css: "",
            columns: [
              {
                id: "data0",
                header: [
                  "TFLink ID",
                  {
                    content: "textFilter"
                  }
                ],
                css: "rank",
                adjust: true
              },
              {
                id: "data1",
                header: [
                  "Detection method",
                  {
                    content: "textFilter"
                  }
                ],
                adjust: true
              },
              {
                id: "data2",
                header: [
                  "Publication ",
                  {
                    content: "textFilter"
                  }
                ],
                adjust: true
              },
              {
                id: "data3",
                header: [
                  "Source database",
                  {
                    content: "textFilter"
                  }
                ],
                adjust: true
              },
              {
                id: "data4",
                header: [
                  "Assembly",
                  {
                    content: "textFilter"
                  }
                ],
                adjust: true
              },
              {
                id: "data5",
                header: [
                  "Chromosome",
                  {
                    content: "textFilter"
                  }
                ],
                adjust: true
              },
              {
                id: "data6",
                header: [
                  "Start",
                  {
                    content: "textFilter"
                  }
                ],
                adjust: true
              },
              {
                id: "data7",
                header: [
                  "End",
                  {
                    content: "textFilter"
                  }
                ],
                adjust: true
              }
            ],
            autoheight: true,
            autowidth: true,
            datatype: "csv",
            data: $("#binding_sites_data").val(),
            pager: {
              css: "",
              template:
                "{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
              container: "binding_sites_paging",
              size: 10,
              group: 5
            }
          }
        ]
      })
    : undefined;

  const orthologs = $.parseJSON($("#ortholog_data").val());
  console.log(orthologs);
  $.each(orthologs, function(i, item) {
    $("#ulOrtholog").append(`<li>${item.species}: ${item.id.join(', ')}</li>`);
  });
});
