export default function Decision({ hit, disableClick }) {
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