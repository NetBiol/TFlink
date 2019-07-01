const speciesList = [{
  "id": 0,
  "value": "Select an organism"
}, {
  "id": "Caenorhabditis_elegans",
  "value": "Caenorhabditis elegans"
}, {
  "id": "Danio_rerio",
  "value": "Danio rerio"
}, {
  "id": "Drosophila_melanogaster",
  "value": "Drosophila melanogaster"
}, {
  "id": "Homo_sapiens",
  "value": "Homo sapiens"
}, {
  "id": "Mus_musculus",
  "value": "Mus musculus"
}, {
  "id": "Rattus_norvegicus",
  "value": "Rattus norvegicus"
}, {
  "id": "Saccharomyces_cerevisiae",
  "value": "Saccharomyces cerevisiae"
}]

var species_select = [{
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

const formats = [
  'interaction table',
  'interaction MITAB',
  'interaction GMT',
  'binding site table',
  'binding site sequences'
]

const typesSS = [
  '_interactions_SS_simpleFormat.csv',
  '_interactions_SS_mitab.tsv',
  '_interactions_SS_GMT.gmt',
  '_bindingSites_SS_annotation.csv',
  '_SS_bindingSites.fasta'
]

const typesLS = [
  '_interactions_LS_simpleFormat.csv.gz',
  '_interactions_LS_mitab.csv.gz',
  '_interactions_LS_GMT.gmt',
  '_bindingSites_LS_annotation.csv',
  '_LS_bindingSites.fasta'
]

function UrlExists(url, cb) {
  jQuery.ajax({
    url: url,
    dataType: 'text',
    type: 'GET',
    complete: function (xhr) {
      if (typeof cb === 'function')
        cb.apply(this, [xhr.status]);
    }
  });
}

$$("species_select_form").elements["species"].attachEvent("onChange", function (species) {
  let htmlSS = '<h3>Small-scale</h3>';
  let htmlLS = '<h3>Large-scale</h3>';
  const index = speciesList.findIndex(function (item, i) {
    return item.id === species
  });
  for (let i = 0; i < typesSS.length; i++) {
    let url = `/data/download/${species + typesSS[i]}`;
    if (i == 3) htmlSS += '<p>&nbsp;</p>'
    htmlSS += `<p><a href="${url}"><i>${speciesList[index].value}</i> small-scale ${formats[i]}</a></p>`;
  }
  for (let i = 0; i < typesLS.length; i++) {
    let url = `/data/download/${species + typesLS[i]}`;
    if (i == 3) htmlLS += '<p>&nbsp;</p>'
    htmlLS += `<p><a href="${url}"><i>${speciesList[index].value}</i> large-scale ${formats[i]}</a></p>`;
  };

  $("#download_div_ss").html(htmlSS);
  $("#download_div_ls").html(htmlLS);
});