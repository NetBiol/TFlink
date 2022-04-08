$(document).ready(function () {
  const multiIdPattern = /(; ?)/gi;

  var targetTable = $("#target_data").val()
    ? webix.ui({
        container: "target_div",
        rows: [
          {
            id: "targetTable",
            view: "datatable",
            fixedRowHeight: false,
            css: "",
            columns: [
              {
                id: "data0",
                header: [
                  "Protein name",
                  {
                    content: "textFilter",
                  },
                ],
                template: function (obj) {
                  return `<a href='/protein/${obj.data1.toLowerCase()}/' target='_blank'>${
                    obj.data0
                  }</a>`;
                },
                adjust: true,
                minWidth: 115,
                maxWidth: 200,
                tooltip: false,
              },
              {
                id: "data1",
                header: [
                  "Uniprot ID",
                  {
                    content: "textFilter",
                  },
                ],
                template:
                  "<a href='https://www.uniprot.org/uniprot/#data1#' target='_blank'>#data1#</a>",
                maxWidth: 200,
                tooltip: false,
              },
              {
                id: "data2",
                header: [
                  "NCBI Gene ID",
                  {
                    content: "textFilter",
                  },
                ],
                template: function (obj) {
                  if (obj.data2 === "-") return "-";
                  const multiIdReplaced = obj.data2.replace(
                    multiIdPattern,
                    "+OR+"
                  );
                  return `<a href='https://www.ncbi.nlm.nih.gov/gene/?term=${multiIdReplaced}' target='_blank'>${obj.data2}</a>`;
                },
                adjust: true,
                maxWidth: 200,
                tooltip: false,
              },
              {
                id: "data3",
                header: [
                  "Source database",
                  {
                    content: "textFilter",
                  },
                ],
                maxWidth: 300,
                fillspace: 1,
              },
              {
                id: "data4",
                header: [
                  "Detection method",
                  {
                    content: "textFilter",
                  },
                ],
                maxWidth: 400,
                fillspace: 1,
              },
              {
                id: "data5",
                header: [
                  "Publication",
                  {
                    content: "textFilter",
                  },
                ],
                template: `<a href='https://pubmed.ncbi.nlm.nih.gov/?term=#data5#' target='_blank'>
                <i uk-icon='icon: link'></i>Pubmed</a>`,
                width: 110,
                tooltip: false,
              },
              {
                id: "data6",
                width: 170,
                header: [
                  "Small-scale evidence",
                  {
                    content: "selectFilter",
                  },
                ],
                tooltip: false,
              },
            ],
            tooltip: true,
            autoheight: true,
            resizeColumn: true,
            on: {
              onresize: webix.once(function () {
                this.adjustRowHeight("data0", true);
              }),
            },
            scroll: false,
            datatype: "csv",
            data: $("#target_data").val(),
            pager: {
              css: "",
              template:
                "{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
              container: "target_paging",
              size: 10,
              group: 5,
            },
          },
        ],
      })
    : undefined;

  var tfTable = $("#tf_data").val()
    ? webix.ui({
        container: "tf_div",
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
                    content: "textFilter",
                  },
                ],
                template: function (obj) {
                  return `<a href='/protein/${obj.data1.toLowerCase()}/' target='_blank'>${
                    obj.data0
                  }</a>`;
                },
                adjust: true,
                minWidth: 115,
                maxWidth: 200,
                tooltip: false,
              },
              {
                id: "data1",
                header: [
                  "Uniprot ID",
                  {
                    content: "textFilter",
                  },
                ],
                template:
                  "<a href='https://www.uniprot.org/uniprot/#data1#' target='_blank'>#data1#</a>",
                maxWidth: 200,
                tooltip: false,
              },
              {
                id: "data2",
                header: [
                  "NCBI Gene ID",
                  {
                    content: "textFilter",
                  },
                ],
                template: function (obj) {
                  if (obj.data2 === "-") return "-";
                  const multiIdReplaced = obj.data2.replace(
                    multiIdPattern,
                    "+OR+"
                  );
                  return `<a href='https://www.ncbi.nlm.nih.gov/gene/?term=${multiIdReplaced}' target='_blank'>${obj.data2}</a>`;
                },
                adjust: true,
                maxWidth: 200,
                tooltip: false,
              },
              {
                id: "data3",
                header: [
                  "Source database",
                  {
                    content: "textFilter",
                  },
                ],
                adjust: true,
                maxWidth: 300,
                fillspace: 1,
              },
              {
                id: "data4",
                header: [
                  "Detection method",
                  {
                    content: "textFilter",
                  },
                ],
                maxWidth: 400,
                fillspace: 1,
              },
              {
                id: "data5",
                header: [
                  "Publication",
                  {
                    content: "textFilter",
                  },
                ],
                template: `<a href='https://pubmed.ncbi.nlm.nih.gov/?term=#data5#' target='_blank'>
                <i uk-icon='icon: link'></i>Pubmed</a>`,
                adjust: true,
                width: 110,
                tooltip: false,
              },
              {
                id: "data6",
                width: 170,
                header: [
                  "Small-scale evidence",
                  {
                    content: "selectFilter",
                  },
                ],
                tooltip: false,
              },
            ],
            tooltip: true,
            autoheight: true,
            resizeColumn: true,
            scroll: false,
            datatype: "csv",
            data: $("#tf_data").val(),
            pager: {
              css: "",
              template:
                "{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
              container: "tf_paging",
              size: 10,
              group: 5,
            },
          },
        ],
      })
    : undefined;

  var bindingSitesTable = $("#binding_sites_data").val()
    ? webix.ui({
        container: "binding_sites_div",
        rows: [
          {
            id: "bindingSitesTable",
            view: "datatable",
            css: "target-blank",
            columns: [
              {
                id: "data0",
                header: [
                  "TFLink ID",
                  {
                    content: "textFilter",
                  },
                ],
                css: "rank",
                adjust: true,
              },
              {
                id: "data4",
                header: [
                  "Assembly",
                  {
                    content: "textFilter",
                  },
                ],
                adjust: true,
              },
              {
                id: "data5",
                header: [
                  "Chromosome",
                  {
                    content: "textFilter",
                  },
                ],
                adjust: true,
              },
              {
                id: "data6",
                header: [
                  "Start",
                  {
                    content: "textFilter",
                  },
                ],
                adjust: true,
              },
              {
                id: "data7",
                header: [
                  "End",
                  {
                    content: "textFilter",
                  },
                ],
                adjust: true,
              },
              {
                id: "data8",
                header: [
                  "Strand",
                  {
                    content: "textFilter",
                  },
                ],
                adjust: true,
              },
              {
                id: "data9",
                header: ["Genome browser"],
                // template: `<a href='https://genome.ucsc.edu/cgi-bin/hgTracks?db=#data9#' target='_blank'>
                // <i uk-icon='icon: link'></i>USCS</a>`,
                template: function (obj) {
                  return obj.data9 != "-"
                    ? `<a href='https://genome.ucsc.edu/cgi-bin/hgTracks?db=${obj.data9}/' target='_blank'><i uk-icon='icon: link'></i>USCS</a>`
                    : "-";
                },
                adjust: true,
              },
              {
                id: "data10",
                header: [
                  "Detection method",
                  {
                    content: "textFilter",
                  },
                ],
                adjust: true,
              },
              {
                id: "data11",
                header: ["Publication "],
                template: `<a href='https://pubmed.ncbi.nlm.nih.gov/?term=#data11#' target='_blank'>
                <i uk-icon='icon: link'></i>Pubmed</a>`,
                adjust: true,
              },
              {
                id: "data12",
                header: [
                  "Source database",
                  {
                    content: "textFilter",
                  },
                ],
                adjust: true,
              },
              {
                id: "data13",
                header: [
                  "Small-scale evidence",
                  {
                    content: "selectFilter",
                  },
                ],
                width: 110,
              },
              {
                id: "data14",
                header: [
                  "Nr. of overlapping binding sites",
                  {
                    content: "textFilter",
                  },
                ],
                width: 140,
              },
            ],
            autoheight: true,
            css: "binding-sites-table",
            // autowidth: true,
            scroll: false,
            resizeColumn: true,
            datatype: "csv",
            data: $("#binding_sites_data").val(),
            pager: {
              css: "",
              template:
                "{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
              container: "binding_sites_paging",
              size: 10,
              group: 5,
            },
          },
        ],
      })
    : undefined;

  if ($("#ortholog_data").val()) {
    const orthologs = $.parseJSON($("#ortholog_data").val());
    $.each(orthologs, function (i, item) {
      $("#ulOrtholog").append(
        `<li>${item.species}: ${item.id.join(", ")}</li>`
      );
    });
  }

  let speciesList = [];
  $.ajax({
    url: "/data/spec_list.json",
    dataType: "json",
    success: function (json) {
      speciesList = json;
    },
    async: false,
  });

  const organism = $("#organism").text();
  const index = speciesList.findIndex(function (item, i) {
    return item.value === organism;
  });
  const species = speciesList[index].id;
  let siluette = `<img src="/images/siluettes/${species}.svg" />`;
  $("#species_siluette").html(siluette);

  $(".target-blank a").attr("target", "_blank");
});
