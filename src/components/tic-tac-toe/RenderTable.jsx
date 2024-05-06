import {  useState } from "react";
import React from "react";
import Styles from "@/Assets/TicTacToe/Styles/tic-tac-toe.module.css"




export default function RenderTable({ hit, handleClick, clickDisabled }) {
    return (
      <>
        <table className={Styles.table}>
          <tbody>
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
          </tbody>
        </table>
      </>
    );
  }