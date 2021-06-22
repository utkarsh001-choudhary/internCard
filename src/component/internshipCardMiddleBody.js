import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './internCardStyle.js';

const useStyles = makeStyles(styles);

const InternshipCardMiddleBody = (props) => {

    const classes = useStyles();
    const Icon = props.icon
   
    return (
        <div className={classes.detailsBox}>

            <div className={classes.middleBody}>
                <Icon className={classes.icon}/>
                <p className={classes.type}>{props.info}</p>
            </div>

            <div className={classes.detailsInfo}>
                <p>{props.data}  {props.add} </p>
            </div>

        </div>
    )
}
export default InternshipCardMiddleBody;