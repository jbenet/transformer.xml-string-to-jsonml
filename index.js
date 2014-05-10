var transformer = require('dat-transformer');
var tXmlString = transformer('xml-string');
var tJsonml = transformer('jsonml');
// require any other modules you may need here.
var jsxml = require('jsxml');

module.exports = transformer.Conversion(tXmlString, tJsonml, convert);

function convert(xml) {
  return jsxml.fromXml(xml)[0];
  // https://github.com/rasmuserik/jsxml/issues/1
}
