
import React from 'react'
import {connect} from "react-redux";
import {Typography} from "@material-ui/core";


const HomePage = ({ isLogged, currentUser }) => {
  const greetMessage = (
    <Typography variant="h6" >
      { `Hello, ${currentUser}` }
    </Typography>
  );

  const warningMessage = (
    <Typography variant="h6" >
      Dear User! You don`t logged. Please, sign up!
    </Typography>
  );

  return (
    <div>
      <Typography
        component="div"
        style={
          {
            width: '600px',
            margin: 'auto'
          }
        }
      >
        {
          isLogged ? greetMessage : warningMessage
        }
      </Typography>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
    currentUser: state.currentUser
}
};

export default connect(mapStateToProps)(HomePage);