<!-- PROJECT LOGO -->
> ⚠️  **NOTE: This package is in very early stage of development. NOT recommended for production use yet.**

<br />

<p align="center">
  <a href="https://github.com/dotundefined/mui-numpad">
    <img src="https://i.imgur.com/n8LojKk.png" title="logo" alt="numpad logo" />
  </a>

  <h3 align="center">MUI-NUMPAD</h3>

  <p align="center">
    Numpad component for your React app.
    <br />
    <a href="https://mui-numpad.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/dotundefined/mui-numpad/issues">Report Bug</a>
    ·
    <a href="https://github.com/dotundefined/mui-numpad/issues">Request Feature</a>
    ·
    <a href="https://github.com/dotundefined/mui-numpad/issues">Ask a question</a>
  </p>
</p>
<br />

![npm](https://img.shields.io/npm/dw/mui-numpad?style=flat-square)
![Maintenance](https://img.shields.io/maintenance/yes/2020?style=flat-square)




<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Usage](#usage)
* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## Getting Started

mui-numpad is available as an [npm package](https://www.npmjs.com/package/mui-numpad).

### Installation

```bash
// with npm
npm install mui-numpad
// with yarn
yarn add mui-numpad
```

### Usage

#### Simple numpad

```javascript
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';

import MuiNumpad from 'mui-numpad';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        width: '100%',
    }
}));

function SimpleNumpad() {
    const classes = useStyles();
    const [value, setValue] = useState();

    const onChange = (_value) => {
        setValue(_value);
    }

    return (
        <Grid container spacing={2}>
            <Grid item className={classes.gridItem} xs={3}>
                <TextField 
                margin="dense"
                className={classes.textField}
                value={value}
                variant="outlined" />
            </Grid>
            <Grid item xs={3}>
                <MuiNumpad
                    onChange={onChange}
                />
            </Grid>
        </Grid>
    );
}

export default SimpleNumpad;
```

<!-- ABOUT THE PROJECT -->
## About The Project

Numpad component for your React app.


### Built With

* [React.js](https://reactjs.org/)
* [Material UI](https://material-ui.com/)



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/dotundefined/mui-numpad/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Jasmin Mustafic

`Gmail:` mustaficjasmin7@gmail.com

`Patreon:` https://www.patreon.com/dotundefined

`Linkedin:` https://www.linkedin.com/in/jasmin-mustafic-126141151/
