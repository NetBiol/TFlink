import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';

$(document).ready(function () {
  cytoscape.use(coseBilkent);

  function createNodes(cy, dataId) {
    const base_protein = $('#protein_name').text();
    const nodes = $('#' + dataId)
      .val()
      .split('\n')
      .map(row => row.split(',')[0]
        .trim()
      );
    cy.add({ group: 'nodes', data: { id: base_protein } });
    cy.nodes(`[id = '${base_protein}']`).style('background-color', '#f0506e');
    for (let node of nodes) {
      cy.add({ group: 'nodes', data: { id: node } });
      cy.add({ group: 'edges', data: { source: base_protein, target: node } });
    }
    cy.layout({ name: 'cose-bilkent' }).run();
  }

  const cyStyle = [
    {
      selector: 'node',
      style: {
        'height': 40,
        'width': function (ele) { return ele.data('id').length * 10 + 20 },
        'background-color': '#70adb5',
        'label': 'data(id)',
        'text-halign': 'center',
        'text-valign': 'center'
      }
    },

    {
      selector: 'edge',
      style: {
        width: 2,
        'curve-style': 'bezier',
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ];
  const cyLayout = { name: 'cose-bilkent' };
  const cyWheelSensitivity = 0.5;

  let cyTarget = $('#target-network-div').length ? cytoscape({
    container: $('#target-network-div'),
    style: cyStyle,
    layout: cyLayout,
    wheelSensitivity: cyWheelSensitivity,
  }) : null;
  let cyTf = $('#tf-network-div').length ? cytoscape({
    container: $('#tf-network-div'),
    style: cyStyle,
    layout: cyLayout,
    wheelSensitivity: cyWheelSensitivity,
  }) : null;

  if (cyTarget) {
    createNodes(cyTarget, 'target_data');
    const targetControlDiv = webix.ui({
      container: 'targetControlDiv',
      css: { 'background-color': 'transparent !important' },
      view: 'form',
      borderless: true,
      paddingY: 5,
      paddingX: 10,
      cols: [
        {
          view: "button", type: 'icon', icon: 'wxi-download', width: 35, value: "Download image", tooltip: true,
          click: function () {
            webix.html.download(cyTarget.png(), "TFLink_" + $('#uniprot-ac').text() + ".png")
          }
        },
        {
          view: 'button', type: 'icon', icon: 'wxi-sync', width: 35, value: "Fit network", tooltip: true,
          click: function () { cyTarget.fit() }
        },
        {
          view: 'button', type: 'icon', icon: 'wxi-plus', width: 35, value: "Zoom +", tooltip: true,
          click: function () { cyTarget.zoom(cyTarget.zoom() + 0.5) }
        },
        {
          view: 'button', type: 'icon', icon: 'wxi-minus', width: 35, value: "Zoom -", tooltip: true,
          click: function () { cyTarget.zoom(cyTarget.zoom() - 0.5) }
        },
      ]
    });
  }

  if (cyTf) {
    createNodes(cyTf, 'tf_data');
    const tfControlDiv = webix.ui({
      container: 'tfControlDiv',
      css: { 'background-color': 'transparent !important' },
      view: 'form',
      borderless: true,
      paddingY: 5,
      paddingX: 10,
      cols: [
        {
          view: "button", type: 'icon', icon: 'wxi-download', width: 35, value: "Download image", tooltip: true,
          click: function () {
            webix.html.download(cyTf.png(), "TFLink_" + $('#uniprot-ac').text() + ".png")
          }
        },
        {
          view: 'button', type: 'icon', icon: 'wxi-sync', width: 35, value: "Fit network", tooltip: true,
          click: function () { cyTf.fit() }
        },
        {
          view: 'button', type: 'icon', icon: 'wxi-plus', width: 35, value: "Zoom +", tooltip: true,
          click: function () { cyTf.zoom(cyTf.zoom() + 0.5) }
        },
        {
          view: 'button', type: 'icon', icon: 'wxi-minus', width: 35, value: "Zoom -", tooltip: true,
          click: function () { cyTf.zoom(cyTf.zoom() - 0.5) }
        },
      ]
    });
  }

})