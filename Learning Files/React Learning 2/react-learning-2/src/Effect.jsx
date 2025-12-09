import {useState, useEffect} from 'react';

function Effect() {
    const [statefulCount, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        document.title = statefulCount + " " + color;
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [statefulCount, color]);

    function addCount() {
        setCount(c => c + 1);
    }
    function substractCount() {
        setCount(c => c - 1);
    }
    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }
    function handleResize() {
        setWidth(w => window.innerWidth);
        setHeight(h => window.innerHeight);
    }

    return (
        <>
        <p style={{color: color}}>Count: {statefulCount}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={substractCount}>Substract</button>
        <button onClick={changeColor}>Change Color</button>
        <p>
            Window Width: {width}px <br/>
            Window Height: {height}px
        </p>
        </>
    );
}

export default Effect