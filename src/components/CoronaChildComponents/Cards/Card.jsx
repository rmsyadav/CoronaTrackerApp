import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import style from './Card.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const infected={
        
    borderRadius:"10px solid rgba(0,0,255,0.5)",
}  
function Cards({data:{confirmed ,recovered,deaths,lastUpdate}}) {
    if(!confirmed)
    {
        return 'Loading.....';
    }
    
    return (
        <div className={style.container}>
            <Grid container spacing={3} justify="center">
                 <Grid component={Card} xs={12} md={3} item  className={cx(style.card,style.infected)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                        <CountUp
                           start={0}
                           end={confirmed.value}
                           duration={2.5}
                           separator=","
                          ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active case of covid19</Typography>
                    </CardContent>
                 </Grid>
                 <Grid component={Card} xs={12} md={3} item  className={cx(style.card,style.recovered)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>recovered</Typography>
                        <Typography variant="h5">
                        <CountUp
                           start={0}
                           end={recovered.value}
                           duration={2.5}
                           separator=","
                          ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active case of covid19</Typography>
                    </CardContent>
                 </Grid>
                <Grid component={Card} xs={12} md={3} item  className={cx(style.card,style.deaths)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>deaths</Typography>
                        <Typography variant="h5">
                        <CountUp
                           start={0}
                           end={deaths.value}
                           duration={2.5}
                           separator=","
                          ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active case of covid19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
