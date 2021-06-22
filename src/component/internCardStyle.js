
const cardStyle = {
    card: {
        paddingTop: '8px',
        margin: " 10px auto",
        maxWidth: "600px",
        border: "3px solid #CAF7E3",
        padding: "1.5%",
        borderRadius: "3px",
        overflow: "hidden"
    },

    // HEADER
    cardHeader: {
        position: "relative"
    },
    interLogo: {
        position: "absolute",
        right: "0",
        top: "-13px",
        width: "25%"
    },

    //  LOCATION
    locationDiv: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '3px',
        padding: '0'
    },
    locationDetails: {
        marginLeft: "25px",
        fontSize: "18px",
        marginTop: '0',
        marginBottom: '0'
    },
    locationIcon: {
        color: "#005A8D",
        marginBottom: '0',
        marginLeft: '-3px',
    },
    // CARDBODY

    cardBody: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "left",
        padding: '0',
        marginTop: "0px",
        marginBottom: "3%"
    },
    detailsBox: {
        margin: " 8px 2rem 8px 2px ",
    },
    middleBody: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        padding: '0'
    },
    icon: {
        margin: "8px",
        marginLeft: "-2px",
        color: "#005A8D",
    },
    type: {
        margin: "8px",
        paddingTop: "5px"
    },

    detailsInfo: {
        textAlign: "center",
        display: "flex",
        backgroundColor: "#75aed4",
        color: "white",
        width: "115px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "2px",
        marginTop: "8px",
        marginLeft: '0'
    },


    // BUTTONS
    card_buttons: {
        backgroundColor: "#005A8D ",
        marginRight: "4% !important",
        marginBottom: " 1%!important",
        "@media (max-width: 398px)": {
            marginBottom: " 3% !important"
        },
    },
    card_bottom: {
        display: "flex",
        flexDirection: "row",
    },
    sponsorDiv: {
        textAlign: "right",
        margin: "0"
    },
    training_para: {
        marginRight: "5%"
    },
    training_button: {
        border: "0",
        color: "#28d85d"
    },
}
export default cardStyle;
