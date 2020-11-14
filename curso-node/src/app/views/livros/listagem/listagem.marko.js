// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/curso-node$1.0.0/src/app/views/livros/listagem/listagem.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body><table><tr><th>id</th><th>linguagem</th></tr>");

  var $for$0 = 0;

  marko_forOf(data.livros, function(linguagem) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(linguagem.id) +
      "</td><td>" +
      marko_escapeXml(linguagem.titulo) +
      "</td></tr>");
  });

  out.w("</table>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "9");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/curso-node$1.0.0/src/app/views/livros/listagem/listagem.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
