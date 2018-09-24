# @frontendmonster/styled-utils

utilities for css-in-js dev

## thickness

returns css like thickness function

### Usage

```javascript
import { ThicknessHelper } from '@frontendmonster/styled-utils';

const pxThickness = ThicknessHelper('px');
const empxThickness = ThicknessHelper('em', 'px');
const empxpcThickness = ThicknessHelper('em', 'px', 'pc');
const empxpcpsThickness = ThicknessHelper('em', 'px', 'pc', '%');

pxThickness(1);       // '1px 1px 1px 1px'
pxThickness(1, 2);    // '1px 2px 1px 2px'
pxThickness(1,2,3);   // '1px 2px 3px 2px'
pxThickness(1,2,3,4); // '1px 2px 3px 4px'

empxThickness(0,2,3,4); // '0em 2px 3em 4px'

empxpcThickness(0,2,3,4); // '0em 2px 3pc 4px'

empxpcpsThickness(0,2,3,4); // '0em 2px 3pc 4%'
```

## placeholder

returns cross-brwser placeholder style

### Usage

```javascript
import { placeholder } from '@frontendmonster/styled-utils';

const style = `
  color: #222;
  opacity: .4;

  &:focus {
    opacity: .6
  }
`

placeholder(style);

/*
result will be:

`::-webkit-input-placeholder {
  color: #222; opacity: .4; &:focus { opacity: .6 }
}

::-moz-placeholder {
  color: #222; opacity: .4; &:focus { opacity: .6 }
}

:-ms-input-placeholder {
  color: #222; opacity: .4; &:focus { opacity: .6 }
}

:-moz-placeholder {
  color: #222; opacity: .4; &:focus { opacity: .6 }
}`
*/
```
