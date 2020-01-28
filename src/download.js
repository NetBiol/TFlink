const speciesList = [
  {
    id: 0,
    value: "Select an organism"
  },
  {
    id: "Caenorhabditis_elegans",
    value: "Caenorhabditis elegans"
  },
  {
    id: "Danio_rerio",
    value: "Danio rerio"
  },
  {
    id: "Drosophila_melanogaster",
    value: "Drosophila melanogaster"
  },
  {
    id: "Homo_sapiens",
    value: "Homo sapiens"
  },
  {
    id: "Mus_musculus",
    value: "Mus musculus"
  },
  {
    id: "Rattus_norvegicus",
    value: "Rattus norvegicus"
  },
  {
    id: "Saccharomyces_cerevisiae",
    value: "Saccharomyces cerevisiae"
  }
];

const formats = [
  "interaction table",
  "interaction MITAB",
  "interaction GMT",
  "binding site table",
  "binding site sequences"
];

const ssDownloadFormats = [
  "ss_interaction_table",
  "ss_interaction_mitab",
  "ss_interaction_gmt",
  "ss_binding_site_table",
  "ss_binding_site_sequence"
];
const lsDownloadFormats = [
  "ls_interaction_table",
  "ls_interaction_mitab",
  "ls_interaction_gmt",
  "ls_binding_site_table",
  "ls_binding_site_sequence"
];

var species_select = [
  {
    view: "label",
    label: "Select a species:"
  },
  {
    view: "select",
    name: "species",
    options: speciesList
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

let downloadFiles = {};
$.getJSON("/data/download_files.json", function(json) {
  downloadFiles = json;
});

$$("species_select_form").elements["species"].attachEvent("onChange", function(
  species
) {
  let htmlSS = "<h3>Small-scale</h3>";
  let htmlLS = "<h3>Large-scale</h3>";
  const index = speciesList.findIndex(function(item, i) {
    return item.id === species;
  });

  ssDownloadFormats.forEach((key, i) => {
    if (!downloadFiles[species].hasOwnProperty(key)) {
      htmlSS += "<p>&nbsp;</p>";
      return;
    }

    let url = downloadFiles[species][key].startsWith("http")
      ? downloadFiles[species][key]
      : (url = `/data/download/${species}_${downloadFiles[species][key]}`);

    if (i == 3) htmlSS += "<p>&nbsp;</p>";
    htmlSS += `<p><a href="${url}"><i>${speciesList[index].value}</i> small-scale ${formats[i]}</a></p>`;
  });
  lsDownloadFormats.forEach((key, i) => {
    if (!downloadFiles[species].hasOwnProperty(key)) {
      htmlLS += "<p>&nbsp;</p>";
      return;
    }

    let url = downloadFiles[species][key].startsWith("http")
      ? downloadFiles[species][key]
      : (url = `/data/download/${species}_${downloadFiles[species][key]}`);

    if (i == 3) htmlLS += "<p>&nbsp;</p>";
    htmlLS += `<p><a href="${url}"><i>${speciesList[index].value}</i> large-scale ${formats[i]}</a></p>`;
  });

  $("#download_div_ss").html(htmlSS);
  $("#download_div_ls").html(htmlLS);
});
