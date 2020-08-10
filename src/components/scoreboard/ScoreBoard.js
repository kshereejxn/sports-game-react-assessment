import React from 'react';


function ScoreBoard(props){
    return (
      <div className="ScoreBoard">
        <div className="teamStats">
          <h3>Vistors</h3>
          <h3>{props.visitingTeamStats.score}</h3>
          
        </div>
          <h2>ScoreBoard</h2>
        <div>
          <h3>Home</h3>
          <h3>{props.homeTeamStats.score}</h3>
        </div>

      </div>
    )
  }

export default ScoreBoard;