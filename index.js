var Conversion = require('transformer-conversion');
var tXmlString = require('transformer.xml-string');
var tJsonml = require('transformer.jsonml');
// require any other modules you may need here.
var jsxml = require('jsxml');

module.exports = Conversion(tXmlString, tJsonml, convert);

function convert(xml) {
  return jsxml.fromXml(xml)[0];
  // https://github.com/rasmuserik/jsxml/issues/1
}
