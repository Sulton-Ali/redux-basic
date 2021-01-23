import React from 'react'
import {AppBar, Button, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";


const useStyle = makeStyles(() => ({
  AppBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: '10px 30px',
  },
  item: {
    marginRight: '20px'
  },
  itemLink: {
    textDecoration: 'none',
    color: '#fff'
  }
}));

const Header = ({ navLinks }) => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.AppBar}>
      {
        navLinks.map((link, idx) => {
          return <Button key={idx} variant="contained" color="primary" className={classes.item} onClick={link.clickHandler}>
            <Link to={link.path} className={classes.itemLink}>{link.text}</Link>
          </Button>
        })
      }
    </AppBar>
  )
};

export default Header;