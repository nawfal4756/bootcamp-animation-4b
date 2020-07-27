import React from 'react'
import styles from './Component2.module.css';
import pic from '../../Images/Pic 1.svg';
import { Grid, Typography } from '@material-ui/core';
import useWebAnimation from '@wellyshen/use-web-animations';

export const Component2 = () => {
    const {ref} = useWebAnimation({
        keyframes: [
            {transform: "translateY(20px)"},
            {transform: "translateY(-20px)"}
        ],
        timing: {
            duration: 4000,
            iterations: Infinity,
            direction: "alternate",
        }
    });

    return (
        <div className={styles.container}>
            <Grid container spacing={2}>
                <div className={styles.container2}>
                    <Grid item xs={12} md={5}>
                        <img src={pic} alt="" className={styles.image} ref={ref} />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h1">Heading 2</Typography>
                        <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}
