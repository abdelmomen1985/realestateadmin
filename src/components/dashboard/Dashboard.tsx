import { Icon, makeStyles } from "@material-ui/core";
import * as React from "react";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardIcon from "../Card/CardIcon";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import CardFooter from "../Card/CardFooter";
import Danger from "../Typography/Danger";
import Warning from "../Typography/Warning";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import TrendingUpTwoToneIcon from "@material-ui/icons/TrendingUpTwoTone";

const useStyles = makeStyles(styles as any);

export default () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <GridContainer>
          <GridItem {...{ xs: 12, sm: 6 }}>
            <Card>
              <CardHeader stats icon>
                <CardIcon color="success">
                  <AccessAlarmIcon />
                </CardIcon>
                <p className={classes.allText}>New Leads </p>
                <h3 className={classes.allText}>
                  29/50 <small>Leads</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Get more info
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem {...{ xs: 12, sm: 6 }}>
            <Card>
              <CardHeader stats icon>
                <CardIcon color="info">
                  <VisibilityTwoToneIcon />
                </CardIcon>
                <p className={classes.allText}> New Properities Views </p>
                <h3 className={classes.allText}>
                  2150 <small>View</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Get more info
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem {...{ xs: 12, sm: 6 }}>
            <Card>
              <CardHeader stats icon>
                <CardIcon color="danger">
                  <TrendingUpTwoToneIcon />
                </CardIcon>
                <p className={classes.allText}> Average Conversion Rate </p>
                <h3 className={classes.allText}>
                  8.30 <small>%</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Get more info
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
};
