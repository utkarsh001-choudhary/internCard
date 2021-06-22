import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InternshipCardHeader from './internshipCardHeader';
import InternshipCardMiddleBody from './internshipCardMiddleBody';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import styles from './internCardStyle.js';
const useStyles = makeStyles(styles);

const InternshipCard = (props) => {

    const classes = useStyles();
    const {shortDescription,title,poweredBy,location,startDate,duration,applyBy,stipend}=props.data;

    return (
        <div className={classes.card} >

            {/* CARD HEADER */}
            <InternshipCardHeader intershipName={title} companyName={poweredBy.name} img={poweredBy.logo} />
            <p>{shortDescription}</p>

              <div className={classes.locationDiv}>
                 <LocationOnOutlinedIcon className={classes.locationIcon}/>
                 <p className={classes.locationDetails}>{location.remote===false ? (location.city +" , "+ location.state) : "Work from Home" } </p>
              </div>
    

            {/* CARD BODY ALL DETAILS */}

            <div className={classes.cardBody}>
               <InternshipCardMiddleBody index ="0" info="Start Date"  data={startDate} icon={TodayOutlinedIcon}/>
               <InternshipCardMiddleBody index ="1" info="Duration"  data={ duration.numOf} add={duration.units} icon={QueryBuilderOutlinedIcon}/>
               <InternshipCardMiddleBody index ="2" info="Due date"  data={applyBy} icon={CalendarTodayOutlinedIcon}/>
               <InternshipCardMiddleBody index ="3" info="Stipend"  data={stipend} icon={LocalAtmOutlinedIcon}/>
            </div>


               {/* CARD BOTTOM BUTTONS  */}
            <Button variant="contained" className={classes.card_buttons} color="primary">Full Time</Button>
            <Button variant="contained" className={classes.card_buttons} color="primary">Work From Home</Button>
              


              {/* CARD FOOTER */}
            <div className={classes.sponsorDiv}>
                <p style={{ margin: "7px" }}>Sponsored By: {props.sponsor}</p>
            </div>
            <div className={classes.card_bottom}>
                <p className={classes.training_para}>If you want training before applying to internship click on the training</p>
                <Button size="small" variant="outlined" className={classes.training_button} color="primary">More Details</Button>
            </div>
        </div>
    )
}
 export default InternshipCard;