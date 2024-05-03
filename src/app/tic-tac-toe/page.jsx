"use client"

import Styles from "./tictactoe.module.css";
import { useEffect, useState } from "react";

import axios from "axios";

import React from "react"

export default function Tic() {
  const [hits, setHits] = useState([["", "", "", "", "", "", "", "", ""]]);
  const [showMove, setShowMove] = useState("X");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);

  function showMoves(index) {
    if (index % 2 === 0) setShowMove("X");

    if (index % 2 !== 0) setShowMove("O");
  }

  

  const addHits = (url, postdata) => {
    if (loading) return loading;
    if (error) console.log(error);
    console.log("it is working");
    axios
      .post(url, postdata)
      .then((response) => {
        setCount(count + 1);
        console.log("This has been posted", response.data);
        console.log("count=", count)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log(false);
      });
  };

  const moves = (url, index) => {
    if (loading) return loading;
    if (error) console.log(error);

    axios
      .delete(url + `/${index}`)
      .then((response) => {
        console.log("This user has been deleted", response.data);
        
        showMoves(index);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    
    
    setLoading(true);
    axios
      .get("../api/xo")
      .then((response) => {
        console.log("response.data=",response.data)
        
        const allhits = response.data.map((hit) => [hit.box1, hit.box2, hit.box3, 
          hit.box4, hit.box5, hit.box6,
          hit.box7, hit.box8, hit.box9 ])
         console.log("allhits", allhits) 
        if (allhits.length !== 0)  setHits([["", "", "", "", "", "", "", "", ""], ...allhits]);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    }
  
  , [count]);

  

  return (
    <div className={Styles.main}>
      <h2 className={Styles.title}>Welcome to Tic-tac-toe!</h2>
      <Table
        newhit={addHits}
        hits={hits}
        showMove={showMove}
        showMoves={showMoves}
      />
      <History hits={hits} moves={moves} />
    </div>
  );
}

function History({ hits, moves }) {
  return (
    <>
      
      {hits.map((hit, index) => {
        if (index == 0) {
          return (
            <button key={hit} onClick={() => moves("../api/xo",index+1)}>
              reset
            </button>
          );
        } else {
          console.log("hitshistory=", hits)
          return (
            <button key={hit} onClick={() => moves("../api/xo",index+1)}>
              go to move {index}
            </button>
          );
        }
      })}
    </>
  );
}

function Table({ newhit, hits, showMoves, showMove }) {
  const [clickDisabled, setClickDisabled] = useState(false);

  let len = hits.length;
 
  let hit = [...hits[hits.length - 1]];
  console.log("hit=", hit)
  function disableClick(trueFalse) {
    setClickDisabled(trueFalse);
  }

  function handleClick(index) {
    console.log(hit[index])
    console.log("hithandle=", hit)
    if (hit[index] === "") {
      showMoves(len);
      hit[index] = showMove;
      let hitForSubmit = {index: len, box1: hit[0], box2: hit[1],  box3: hit[2],  box4: hit[3],
        box5: hit[4],  box6: hit[5],  box7: hit[6],  box8: hit[7],  box9: hit[8]}
      console.log("hitForSubmit", hitForSubmit)  
      newhit('../api/xo', hitForSubmit);
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

function RenderTable({ hit, handleClick, clickDisabled }) {
  return (
    <>
      <table className={Styles.table}>
        <tr>
          <td
            className={Styles.td}
            onClick={clickDisabled ? () => {} : () => handleClick(0)}
          >
            {hit[0]}
          </td>
          <td
            className={Styles.td}
            onClick={clickDisabled ? () => {} : () => handleClick(1)}
          >
            {hit[1]}
          </td>
          <td
            className={Styles.td}
            onClick={clickDisabled ? () => {} : () => handleClick(2)}
          >
            {hit[2]}
          </td>
        </tr>

        <tr>
          <td
            className={Styles.td}
            onClick={clickDisabled ? () => {} : () => handleClick(3)}
          >
            {hit[3]}
          </td>
          <td
            className={Styles.td}
            onClick={clickDisabled ? () => {} : () => handleClick(4)}
          >
            {hit[4]}
          </td>
          <td
            className={Styles.td}
            onClick={clickDisabled ? () => {} : () => handleClick(5)}
          >
            {hit[5]}
          </td>
        </tr>

        <tr>
          <td
            className={Styles.td}
            onClick={clickDisabled ? () => {} : () => handleClick(6)}
          >
            {hit[6]}
          </td>
          <td
            className={Styles.td}
            onClick={clickDisabled ? () => {} : () => handleClick(7)}
          >
            {hit[7]}
          </td>
          <td
            className={Styles.td}
            onClick={clickDisabled ? () => {} : () => handleClick(8)}
          >
            {hit[8]}
          </td>
        </tr>
      </table>
    </>
  );
}

function Decision({ hit, disableClick }) {
  function decide(element) {
    return (
      (hit[0] == element && hit[1] == element && hit[2] == element) ||
      (hit[3] == element && hit[4] == element && hit[5] == element) ||
      (hit[6] == element && hit[7] == element && hit[8] == element) ||
      (hit[1] == element && hit[4] == element && hit[7] == element) ||
      (hit[2] == element && hit[5] == element && hit[8] == element) ||
      (hit[0] == element && hit[3] == element && hit[6] == element) ||
      (hit[0] == element && hit[4] == element && hit[8] == element) ||
      (hit[2] == element && hit[4] == element && hit[6] == element)
    );
  }

  if (decide("X")) {
    disableClick(true);

    return (
      <>
        <h2> X wins!</h2>
      </>
    );
  }

  if (decide("O")) {
    disableClick(true);

    return (
      <>
        <h2> O wins!</h2>
      </>
    );
  }

  disableClick(false);
}
