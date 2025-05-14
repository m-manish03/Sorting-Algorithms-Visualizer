import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { VscGithub } from "react-icons/vsc";
import { sortingAlgorithms } from "../common/config";
import { useData } from "../common/store";
import shallow from "zustand/shallow";
import './button.css';

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 0",
    [theme.breakpoints.down('sm')]: {
      padding: "5px 0",
    },
  },
  title: {
    fontSize: "1.5rem",
    margin: 0,
    color: "inherit",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: "1rem",
    },
  },
  githubLink: {
    display: "flex",
    alignItems: "center",
    color: "black",
    textDecoration: "none",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#0366d6",
    },
  },
  githubIcon: {
    fontSize: "2rem",
    marginRight: "15px",
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.5rem",
      marginRight: "10px",
    },
  },
}));

export function NavBar() {
  const classes = useStyles();

  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
    shallow
  );

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <a 
          href="https://github.com/m-manish03/Sorting-Algorithms-Visualizer" 
          className={classes.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          title="View on GitHub"
        >
          <h2 className={classes.title}>
            <VscGithub className={classes.githubIcon} />
            <span className="desktop-title">Sorting Algorithms Visualizer</span>
            <span className="mobile-title" style={{display: 'none'}}>Sorting Visualizer</span>
          </h2>
        </a>
      </div>
      <AppBar position="static" color="default">
        <Tabs
          value={algorithm}
          onChange={(event, id) => setAlgorithm(id)}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {sortingAlgorithms.map((algorithm) => (
            <Tab
              label={algorithm.title}
              {...a11yProps(0)}
              key={algorithm.title}
            />
          ))}
          <Tab label="All" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
    </div>
  );
}