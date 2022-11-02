import { useRef, useState, useEffect } from "react";
import "./Index.css";

const App = () => {
  const inputX = useRef(0);
  const inputY = useRef(0);

  const [numbers, setNumbers] = useState({
    numberX: inputX.current.value,
    numberY: inputY.current.value,
  });

  const getTotalHandler = () => {
    setNumbers({
    numberX: +inputX.current.value,
    numberY: +inputY.current.value,
    });
  };

  return (
    <>
    <div className="container">
        <div>
        <label>Masukan X </label>
        <input type="number" ref={inputX} />
        </div>
        <div>
        <label>Masukan Y </label>
        <input type="number" ref={inputY} />
        </div>
        <button className="hitung" 
        onClick={getTotalHandler}>Hitung</button>
        <Calculator numberX={numbers.numberX} numberY={numbers.numberY} />
    </div>
    </>
  );
};

const Calculator = ({ numberX, numberY }) => {
    useEffect(() => {
      console.log(`First render`);
    }, []);
  
    useEffect(() => {
      console.log(`This gets executed each time the props are updated`);
    }, [numberX, numberY]);
  
    return <h1>Hasilnya adalah {numberX * numberY}</h1>;
  };

export default App;
