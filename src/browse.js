var data_url_prefix = '';

webix.ready(function () {
  var dtable = new webix.ui({
    container: 'browsetable',
    id: 'dtable',
    view: 'datatable',
    css: '',
    columns: [
      {
        id: 'Organism',
        map: '#data0#',
        header: [
          'Organism',
          {
            content: 'selectFilter',
          },
        ],
        width: 200,
        tooltip: false
      },
      {
        id: 'protein_name',
        map: '#data1#',
        header: [
          'Name',
          {
            content: 'textFilter',
          },
        ],
        adjust: true,
        minWidth: 115,
        maxWidth: 200,
        fillspace: true
      },
      {
        id: 'uniprot_id',
        map: '#data2#',
        header: [
          'Uniprot ID',
          {
            content: 'textFilter',
          },
        ],
        width: 110,
        tooltip: false
      },
      {
        id: 'ncbi_gene_id',
        map: '#data3#',
        header: [
          'NCBI Gene ID',
          {
            content: 'textFilter',
          },
        ],
        width: 140
      },
      {
        id: 'function',
        map: '#data4#',
        header: [
          'Function',
          {
            content: 'selectFilter',
          },
        ],
        width: 260,
        tooltip: false
      },
    ],
    url: data_url_prefix + 'data/browse_tables/all_species_LT_browse_update.csv',
    resizeColumn: true,
    datatype: 'csv',
    fixedRowHeight: false,
    autoheight: true,
    scroll: false,
    tooltip: true,
    pager: {
      css: '',
      template:
        '{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}',
      container: 'paging_here',
      size: 25,
      group: 5,
    },
    hover: 'browse_row_hover',
    on: {
      onresize: webix.once(function () {
        this.adjustRowHeight("data1", true);
      }),
      onItemClick: function (id, e, trg) {
        window.open(
          data_url_prefix +
            'protein/' +
            dtable.getItem(id.row).uniprot_id.toLowerCase() +
            '/'
        );
      },
    },
  });
});
