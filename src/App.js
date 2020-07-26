import React from 'react';
import {Grid} from '@material-ui/core';
import styles from './App.css';
import { Component1 } from './components/component1/Component1';
import { Component2 } from './components/Component2/Component2';
import { Component3 } from './components/Component3/Component3';
import { Component4 } from './components/Component4/Component4';

function App() {
  return (
    <div>

      <div>
        <Grid container>
          <Grid item xs={12}>
            <Component1 className={styles.container1} />
            <Component2 className={styles.container2} />
            <Component3 className={styles.container3} />
            <Component4 className={styles.container4} />
          </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default App;
