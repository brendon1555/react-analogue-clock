[![AnalogueClock](./.github/animation.gif?v=3&s=200)](http://github.com/brendon1555/react-analogue-clock)

# React Analogue Clock

> A customizable analogue clock built with styled-components in React

[![GitHub issues](https://img.shields.io/github/issues/brendon1555/react-analogue-clock)](https://github.com/brendon1555/react-analogue-clock/issues)
[![devDependencies](https://img.shields.io/david/dev/brendon1555/react-analogue-clock)](https://david-dm.org/brendon1555/react-analogue-clock?type=dev)
[![peerDependencies](https://img.shields.io/david/peer/brendon1555/react-analogue-clock)](https://david-dm.org/brendon1555/react-analogue-clock?type=peer)
[![License](https://img.shields.io/github/license/brendon1555/react-analogue-clock)](http://badges.mit-license.org)

---

## Demo

[Online demo](https://brendon1555.github.io/react-analogue-clock/) is available

---

## Installation

```shell
$ yarn add styled-components react-analogue-clock
```

or

```shell
$ npm install --save styled-components react-analogue-clock
```

---

## Usage

```JSX
// code away!

import AnalogueClock from 'react-analogue-clock';


const clockOptions = {
    baseColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 5,
    centerColor: '#000000',
    handColors: {
        hour: '#000000',
        minute: '#000000',
        second: '#000000',
    },
    notchColor: '#000000',
    numbersColor: '#000000',
    showNumbers: true,
    size: 300
}

<AnalogueClock {...clockOptions} />
```

or

#### Test it out with Storybook

```shell
$ yarn storybook
```

## Props

- **baseColor**: `[color]`
  - Background color of the clock face.
- **borderColor**: `[color]`
  - Color of the border.
- **borderWidth**: `[integer]`
  - Width of the border. _0 will hide the border._
- **centerColor**: `[color]`
  - Color of the center dot.
- **handColors**: `[object]`
  - Color of each hand.
  - **hour**: `[color]`
    - Color ogf the hour hand.
  - **minute**: `[color]`
    - Color of the minute hand.
  - **second**: `[color]`
    - Color of the second hand.
- **notchColor**: `[color]`
  - Color of the minute notches.
- **numberColor**: `[color]`
  - Color of the hour numbers. (if enabled)
- **showNumbers**: `[boolean]`
  - Toggle the hour numbers.
- **size**: `[integer]`
  - Size of the clock face in pixels.


> `color` type defined by [extra-prop-types](https://github.com/brendon1555/extra-prop-type)
---

## Contributing

> To get started...

### Step 1

- **Option 1**

  - 🍴 Fork this repo!

- **Option 2**
  - 👯 Clone this repo to your local machine using `https://github.com/brendon1555/react-analogue-clock.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/brendon1555/react-analogue-clock/compare/" target="_blank">`https://github.com/brendon1555/react-analogue-clock/compare/`</a>.

---

## Contributors

|                 <a href="https://brendon1555.com" target="_blank">**Brendon Lees**</a>                  |
| :-----------------------------------------------------------------------------------------------------: |
| [![Brendon1555](https://avatars3.githubusercontent.com/u/12216552?&v=3&s=200)](https://brendon1555.com) |
|          <a href="http://github.com/brendon1555" target="_blank">`github.com/brendon1555`</a>           |

---

## Support

Reach out to me at one of the following places!

- Website at <a href="http://brendon1555.com" target="_blank">`brendon1555.com`</a>
- Twitter at <a href="http://twitter.com/brendon1555" target="_blank">`@brendon1555`</a>

---

## License

[![License](https://img.shields.io/github/license/brendon1555/react-analogue-clock)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="http://brendon1555.com" target="_blank">Brendon Lees</a>.
