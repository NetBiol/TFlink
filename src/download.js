$(document).ready(function () {
  const cdnUrl = "https://cdn.netbiol.org/tflink/download_files/TFLink";
  let speciesList = [];
  $.ajax({
    url: "/data/spec_list.json",
    dataType: "json",
    success: function (json) {
      speciesList = json;
    },
    async: false,
  });

  const formats = [
    "interaction table",
    "interaction MITAB",
    "interaction GMT uniprotID",
    "interaction GMT NCBI GeneID",
    "interaction GMT gene name",
    "binding site table",
    "binding site sequences",
  ];

  const ssDownloadFormats = [
    "ss_interaction_table",
    "ss_interaction_mitab",
    "ss_interaction_gmt",
    "ss_interaction_gmt_ncbi",
    "ss_interaction_gmt_name",
    "ss_binding_site_table",
    "ss_binding_site_sequence",
  ];
  const lsDownloadFormats = [
    "ls_interaction_table",
    "ls_interaction_mitab",
    "ls_interaction_gmt",
    "ls_interaction_gmt_ncbi",
    "ls_interaction_gmt_name",
    "ls_binding_site_table",
    "ls_binding_site_sequence",
  ];
  const allDownloadFormats = [
    "all_interaction_table",
    "all_interaction_mitab",
    "all_interaction_gmt",
    "all_interaction_gmt_ncbi",
    "all_interaction_gmt_name",
    "all_binding_site_table",
    "all_binding_site_sequence",
  ];

  var species_select = [
    {
      view: "label",
      label: "Select an organism:",
    },
    {
      view: "select",
      css: "browse-select",
      name: "species",
      options: speciesList,
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

  let downloadFiles = {};
  $.getJSON("/data/download_files.json", function (json) {
    downloadFiles = json;
  });

  $$("species_select_form").elements["species"].attachEvent(
    "onChange",
    function (species) {
      let htmlSS = "<h3>Small-scale</h3>";
      let htmlLS = "<h3>Large-scale</h3>";
      let htmlAll = "<h3>All</h3>";
      const index = speciesList.findIndex(function (item, i) {
        return item.id === species;
      });

      const breakpoint = 5;

      ssDownloadFormats.forEach((key, i) => {
        if (i == breakpoint) htmlSS += "<p>&nbsp;</p>";
        if (!downloadFiles[species].hasOwnProperty(key)) {
          htmlSS += "<p>&nbsp; <br/> &nbsp;</p>";
          return;
        }
        let url = `${cdnUrl}_${species}_${downloadFiles[species][key]}`;

        htmlSS += `<p><a href="${url}"><i>${speciesList[index].value}</i> small-scale ${formats[i]}</a></p>`;
      });

      lsDownloadFormats.forEach((key, i) => {
        if (i == breakpoint) htmlLS += "<p>&nbsp;</p>";
        if (!downloadFiles[species].hasOwnProperty(key)) {
          htmlLS += "<p>&nbsp; <br/> &nbsp;</p>";
          return;
        }
        let url = `${cdnUrl}_${species}_${downloadFiles[species][key]}`;

        htmlLS += `<p><a href="${url}"><i>${speciesList[index].value}</i> large-scale ${formats[i]}</a></p>`;
      });

      allDownloadFormats.forEach((key, i) => {
        if (i == breakpoint) htmlAll += "<p>&nbsp;</p>";
        if (!downloadFiles[species].hasOwnProperty(key)) {
          htmlAll += "<p>&nbsp; <br/> &nbsp;</p>";
          return;
        }
        let url = `${cdnUrl}_${species}_${downloadFiles[species][key]}`;

        htmlAll += `<p><a href="${url}"><i>${speciesList[index].value}</i> small and large-scale ${formats[i]}</a></p>`;
      });

      let siluette = `<img src="/images/siluettes/${species}.svg" />`;

      $("#download_div_ss").html(htmlSS);
      $("#download_div_ls").html(htmlLS);
      $("#download_div_all").html(htmlAll);
      $("#species_siluette").html(siluette);
    }
  );
});
