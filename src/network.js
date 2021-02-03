import cytoscape from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";

$(document).ready(function() {
  cytoscape.use(coseBilkent);
  const baseId = "node0";
  const targetId = "target_data";
  const tfId = "tf_data";

  function createNodes(cy, dataId, target = false) {
    const base_protein = $("#protein_name").text().split(';')[0];
    const nodes = $("#" + dataId)
      .val()
      .split("\n")
      .map(row => row.split(",")[0].trim());
    const uniqueNodes = [...new Set(nodes)];
    cy.add({
      group: "nodes",
      data: {
        id: baseId,
        name: base_protein
      }
    });
    let nodeId = 1;
    for (let node of uniqueNodes) {
      if (cy.nodes(`[name = "${node}"]`).length) {
        cy.add({
          group: "edges",
          data: {
            source: baseId,
            target: baseId
          }
        });
      } else {
        node = node.split(';')[0];
        cy.add({
          group: "nodes",
          data: {
            id: `node${nodeId}`,
            name: node
          }
        });

        target
          ? cy.add({
              group: "edges",
              data: {
                source: baseId,
                target: `node${nodeId++}`
              }
            })
          : cy.add({
              group: "edges",
              data: {
                source: `node${nodeId++}`,
                target: baseId
              }
            });
      }
    }
    cy.layout({
      name: "cose-bilkent"
    }).run();
  }

  function createControlDiv(cy, container) {
    webix.ui({
      container: container,
      css: {
        "background-color": "transparent !important"
      },
      view: "form",
      borderless: true,
      paddingY: 5,
      paddingX: 10,
      cols: [
        {
          view: "button",
          type: "icon",
          icon: "wxi-download",
          width: 35,
          value: "Download image",
          tooltip: true,
          click: function() {
            webix.html.download(
              cy.png(),
              "TFLink_" + $("#uniprot-ac").text() + ".png"
            );
          }
        },
        {
          view: "button",
          type: "icon",
          icon: "wxi-sync",
          width: 35,
          value: "Fit network",
          tooltip: true,
          click: function() {
            cy.fit();
          }
        },
        {
          view: "button",
          type: "icon",
          icon: "wxi-plus",
          width: 35,
          value: "Zoom +",
          tooltip: true,
          click: function() {
            cy.zoom(cy.zoom() + 0.5);
          }
        },
        {
          view: "button",
          type: "icon",
          icon: "wxi-minus",
          width: 35,
          value: "Zoom -",
          tooltip: true,
          click: function() {
            cy.zoom(cy.zoom() - 0.5);
          }
        }
      ]
    });
  }

  const cyStyle = [
    {
      selector: "node",
      style: {
        height: 40,
        width: function(ele) {
          return ele.data("id").length * 10 + 20;
        },
        label: "data(name)",
        "text-halign": "center",
        "text-valign": "center"
      }
    },

    {
      selector: "edge",
      style: {
        width: 2,
        "curve-style": "bezier",
        "line-color": "#ccc",
        "target-arrow-color": "#ccc",
        "target-arrow-shape": "triangle"
      }
    }
  ];
  const cyLayout = {
    name: "cose-bilkent"
  };
  const cyWheelSensitivity = 0.5;

  let cyTarget =
    $("#target-network-div").length &&
    $("#targets-below-100").offsetParent !== null
      ? cytoscape({
          container: $("#target-network-div"),
          style: cyStyle,
          layout: cyLayout,
          wheelSensitivity: cyWheelSensitivity
        })
      : null;
  let cyTf =
    $("#tf-network-div").length && $("#tfs-below-100").offsetParent !== null
      ? cytoscape({
          container: $("#tf-network-div"),
          style: cyStyle,
          layout: cyLayout,
          wheelSensitivity: cyWheelSensitivity
        })
      : null;

  if (cyTarget) {
    cyTarget
      .style()
      .selector("node")
      .style({
        "background-color": "#70adb5"
      });
    cyTarget
      .style()
      .selector(`[id = '${baseId}']`)
      .style({
        "background-color": "#f0506e"
      })
      .update();

    createNodes(cyTarget, targetId, true);
    createControlDiv(cyTarget, "targetControlDiv");
  }

  if (cyTf) {
    cyTf
      .style()
      .selector("node")
      .style({
        "background-color": "#f0506e"
      });
    cyTf
      .style()
      .selector(`[id = '${baseId}']`)
      .style({
        "background-color": "#70adb5"
      })
      .update();
    createNodes(cyTf, tfId);
    createControlDiv(cyTf, "tfControlDiv");
  }
});
