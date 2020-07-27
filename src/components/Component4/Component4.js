import React from 'react'
import styles from './Component4.module.css';
import {Grid, Typography} from '@material-ui/core';
import pic from '../../Images/Pic 3.svg';


export const Component4 = () => {

    return (
        <div className={styles.container} id="container">
            <Grid container spacing={2}>
                <div className={styles.container2} id="inner">
                    <Grid item xs={12} md={5}>
                        <img src={pic} alt="" className={styles.image} />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h1">Heading 4</Typography>
                        <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}
