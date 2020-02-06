import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';

$(document).ready(function() {
  cytoscape.use(coseBilkent);
  const baseId = 'node0';

  function createNodes(cy, dataId, target = false) {
    const base_protein = $('#protein_name').text();
    const nodes = $('#' + dataId)
      .val()
      .split('\n')
      .map(row => row.split(',')[0].trim());
    const selfRegulating = nodes.every((val, i, arr) => val === arr[0]);
    cy.add({ group: 'nodes', data: { id: baseId, name: base_protein } });
    let nodeId = 1;
    for (let node of nodes) {
      if (cy.nodes(`[name = "${node}"]`).length > 1) continue;

      if (selfRegulating) {
        cy.add({
          group: 'edges',
          data: { source: baseId, target: baseId }
        });
      } else {
        cy.add({ group: 'nodes', data: { id: `node${nodeId}`, name: node } });

        if (target) {
          cy.add({
            group: 'edges',
            data: { source: baseId, target: `node${nodeId++}` }
          });
        } else {
          cy.add({
            group: 'edges',
            data: { source: `node${nodeId++}`, target: baseId }
          });
        }
      }
    }
    cy.layout({ name: 'cose-bilkent' }).run();
  }

  const cyStyle = [
    {
      selector: 'node',
      style: {
        height: 40,
        width: function(ele) {
          return ele.data('id').length * 10 + 20;
        },
        label: 'data(name)',
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

  let cyTarget = $('#target-network-div').length
    ? cytoscape({
        container: $('#target-network-div'),
        style: cyStyle,
        layout: cyLayout,
        wheelSensitivity: cyWheelSensitivity
      })
    : null;
  let cyTf = $('#tf-network-div').length
    ? cytoscape({
        container: $('#tf-network-div'),
        style: cyStyle,
        layout: cyLayout,
        wheelSensitivity: cyWheelSensitivity
      })
    : null;

  if (cyTarget) {
    cyTarget
      .style()
      .selector('node')
      .style({
        'background-color': '#70adb5'
      });
    cyTarget
      .style()
      .selector(`[id = '${baseId}']`)
      .style({
        'background-color': '#f0506e'
      })
      .update();

    createNodes(cyTarget, 'target_data', true);
    const targetControlDiv = webix.ui({
      container: 'targetControlDiv',
      css: { 'background-color': 'transparent !important' },
      view: 'form',
      borderless: true,
      paddingY: 5,
      paddingX: 10,
      cols: [
        {
          view: 'button',
          type: 'icon',
          icon: 'wxi-download',
          width: 35,
          value: 'Download image',
          tooltip: true,
          click: function() {
            webix.html.download(
              cyTarget.png(),
              'TFLink_' + $('#uniprot-ac').text() + '.png'
            );
          }
        },
        {
          view: 'button',
          type: 'icon',
          icon: 'wxi-sync',
          width: 35,
          value: 'Fit network',
          tooltip: true,
          click: function() {
            cyTarget.fit();
          }
        },
        {
          view: 'button',
          type: 'icon',
          icon: 'wxi-plus',
          width: 35,
          value: 'Zoom +',
          tooltip: true,
          click: function() {
            cyTarget.zoom(cyTarget.zoom() + 0.5);
          }
        },
        {
          view: 'button',
          type: 'icon',
          icon: 'wxi-minus',
          width: 35,
          value: 'Zoom -',
          tooltip: true,
          click: function() {
            cyTarget.zoom(cyTarget.zoom() - 0.5);
          }
        }
      ]
    });
  }

  if (cyTf) {
    cyTf
      .style()
      .selector('node')
      .style({
        'background-color': '#f0506e'
      });
    cyTf
      .style()
      .selector(`[id = '${baseId}']`)
      .style({
        'background-color': '#70adb5'
      })
      .update();
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
          view: 'button',
          type: 'icon',
          icon: 'wxi-download',
          width: 35,
          value: 'Download image',
          tooltip: true,
          click: function() {
            webix.html.download(
              cyTf.png(),
              'TFLink_' + $('#uniprot-ac').text() + '.png'
            );
          }
        },
        {
          view: 'button',
          type: 'icon',
          icon: 'wxi-sync',
          width: 35,
          value: 'Fit network',
          tooltip: true,
          click: function() {
            cyTf.fit();
          }
        },
        {
          view: 'button',
          type: 'icon',
          icon: 'wxi-plus',
          width: 35,
          value: 'Zoom +',
          tooltip: true,
          click: function() {
            cyTf.zoom(cyTf.zoom() + 0.5);
          }
        },
        {
          view: 'button',
          type: 'icon',
          icon: 'wxi-minus',
          width: 35,
          value: 'Zoom -',
          tooltip: true,
          click: function() {
            cyTf.zoom(cyTf.zoom() - 0.5);
          }
        }
      ]
    });
  }
});
