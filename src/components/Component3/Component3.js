import React from 'react'
import styles from './Component3.module.css';
import {Grid, Typography} from '@material-ui/core';
import pic from '../../Images/Pic 2.svg';

export const Component3 = () => {
    return (
        <div className={styles.container}>
            <Grid container spacing={2}>
                <div className={styles.container2}>
                    <Grid item xs={10} md={5}>
                        <Typography><h1>Heading 3</h1></Typography>
                        <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    </Grid>
                    <Grid item xs={10} md={5}>
                        <img src={pic} alt="" className={styles.image} />
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}
