import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './internCardStyle.js';
const useStyles = makeStyles(styles);
const InternshipCardHeader = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.cardHeader}>
            <h1 className={classes.intershipName} >{props.intershipName}</h1>
            <h3 className={classes.companyName}>{props.companyName}</h3>
            {props.img !== "" && <img className={classes.interLogo} src={props.img} alt='intern-logo'></img>}
        </div>
    )
}
export default InternshipCardHeader;