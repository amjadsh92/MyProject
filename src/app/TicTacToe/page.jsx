"use client";

import Styles from "@/Assets/TicTacToe/Styles/tic-tac-toe.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Table from "@/components/tic-tac-toe/Table";
import History from "@/components/tic-tac-toe/History";


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
        setHits(hits.filter((hit) => hits.indexOf(hit) <= index));
        showMoves(index);
      })
      .catch((error) => {
        setError(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("../api/TicTacToe")
      .then((response) => {
        const allhits = response.data.map((hit) => [
          hit.box1,
          hit.box2,
          hit.box3,
          hit.box4,
          hit.box5,
          hit.box6,
          hit.box7,
          hit.box8,
          hit.box9,
        ]);

        if (allhits.length !== 0)
          setHits([["", "", "", "", "", "", "", "", ""], ...allhits]);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [count]);

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



