# @socials/centra
> **Fork of [@aero/centra](https://git.farfrom.earth/aero/forks/centra) to support window.fetch and XMLHttpRequest**

## Usage
```js
const fetch = require('@socials/centra');

fetch('https://augu.dev', 'get')
  .then(async res => {
    const data = await res.text();
    console.log(data);
  }).catch(console.error);
```

## Credits
- [**Ethan Davis**](https://github.com/ethanent/centra)
- [**Aero Team**](https://git.farfrom.earth/aero)

## License
**@socials/centra** is released under the MIT License, read [here](/LICENSE) for more information.