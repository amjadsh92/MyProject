
import {  useState } from "react";
import React from "react";
import RenderTable from "./RenderTable";
import Decision from "./Decision";

export default function Table({ newhit, hits, showMoves, showMove }) {
    const [clickDisabled, setClickDisabled] = useState(false);
  
    let len = hits.length;
  
    let hit = [...hits[hits.length - 1]];
  
    function disableClick(trueFalse) {
      setClickDisabled(trueFalse);
    }
  
    function handleClick(index) {
      if (hit[index] === "") {
        showMoves(len);
        hit[index] = showMove;
        let hitForSubmit = {
          index: len,
          box1: hit[0],
          box2: hit[1],
          box3: hit[2],
          box4: hit[3],
          box5: hit[4],
          box6: hit[5],
          box7: hit[6],
          box8: hit[7],
          box9: hit[8],
        };
  
        newhit("../api/TicTacToe", hitForSubmit);
      }
    }
  
    return (
      <>
        <RenderTable
          hit={hit}
          handleClick={handleClick}
          clickDisabled={clickDisabled}
        />
        <Decision hit={hit} disableClick={disableClick} />
      </>
    );
  }
  
  
  