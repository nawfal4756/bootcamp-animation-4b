import React from 'react'
import styles from './Component1.module.css';
import {Grid, Typography} from '@material-ui/core';
import Background from '../../Images/Background.svg';
import Brain from '../../Images/Brain.svg';
import useWebAnimation from '@wellyshen/use-web-animations';

export const Component1 = () => {
    const { ref } = useWebAnimation({
        keyframes: [
            {transform: "translateY(4%)"},
            {transform: "translateY(-4%)"},
        ],
        timing: {
            duration: 4000,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in"
        }
    });

    return (
        <div className={styles.container}>
            <Grid container spacing={2}>
                <div className={styles.container2}>
                    <Grid item xs={10} md={5}>
                        <Typography><h1>Heading 1</h1></Typography>
                        <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    </Grid>
                    <Grid item xs={10} md={5}>
                        <img src={Brain} alt="Brain" className={styles.brain} id="brain" ref={ref} />
                        <img src={Background} alt="Brain" className={styles.bg} />                   
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}
