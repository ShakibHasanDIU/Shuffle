import React, { useEffect, useState } from "react";

const myArray = [
  { colors: '#0088FE', count: 15 },
  { colors: '#00C49F', count: 25 },
  { colors: '#FFBB28', count: 18 },
  { colors: '#FF8042', count: 30 }
];

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

function App(props) {
  const [list, setList] = useState(myArray);
  useEffect(() => {
    const mountArray = shuffle(myArray);
    setList(mountArray);
  }, []);

  function handleShuffle() {
    const changes = shuffle([...list]);
    setList(changes);
    console.log("Shuffle", myArray, changes);
  }

  return (
    <div>
    <div className= 'holder'>
        <div className= 'funny'>{list.map((a, i) => <p style={{ background: a.colors }} key={i}>{a.count}</p>)}</div>
      </div>
    <div className="shuffle"><button onClick={handleShuffle}>Shuffle</button>
    </div>
    </div>
  );
}

export default App;
