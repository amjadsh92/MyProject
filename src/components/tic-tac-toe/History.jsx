export default function History({ hits, moves }) {
    return (
      <>
        {hits.map((hit, index) => {
          if (index == 0) {
            return (
              <button key={hit} onClick={() => moves("../api/TicTacToe", index)}>
                reset
              </button>
            );
          } else {
            console.log("hitshistory=", hits);
            return (
              <button key={hit} onClick={() => moves("../api/TicTacToe", index)}>
                go to move {index}
              </button>
            );
          }
        })}
      </>
    );
  }