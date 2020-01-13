import cytoscape from "cytoscape";


function createNodes(cy, dataId) {
  const base_protein = $('#protein_name').text();
  const nodes = $('#' + dataId)
    .val()
    .split('\n')
    .map(row => row.split(',')[0]
      .trim()
    );
  cy.add({ group: 'nodes', data: { id: base_protein } });
  for (let node of nodes) {
    cy.add({ group: 'nodes', data: { id: node } });
    cy.add({ group: 'edges', data: { source: base_protein, target: node } });
  }
  cy.layout({ name: 'cose' }).run();
}

var cy = cytoscape({
  container: $("#interactionnetworkdiv"),

  style: [
    // the stylesheet for the graph
    {
      selector: "node",
      style: {
        "background-color": "#666",
        label: "data(id)"
      }
    },

    {
      selector: "edge",
      style: {
        width: 2,
        "line-color": "#ccc",
        "target-arrow-color": "#ccc",
        "target-arrow-shape": "triangle"
      }
    }
  ],

  layout: {
    name: "cose"
  }
});

createNodes(cy, 'target_data');
