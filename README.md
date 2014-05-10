# transformer.xml-string-to-jsonml

[Transformer](http://github.com/jbenet/transformer) conversion: xml-string to jsonml

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo "<beep>boop</beep>" | transform xml-string jsonml
["beep","boop"]
```

### Javascript

```js
var transformer = require('dat-transformer');
var tXmlStringToJsonml = transformer('xml-string', 'jsonml');
tXmlStringToJsonml('<beep>boop</beep>'); // '[["beep", "boop"]]'
```
