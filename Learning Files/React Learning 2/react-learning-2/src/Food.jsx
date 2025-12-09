import {useState} from 'react'

function Food() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        if (newFood === "") {
            alert("Please enter a food!");
        }
        else {
            document.getElementById("foodInput").value = "";
            setFoods(f => [...f, newFood]);
        }
    }
    function handleRemoveFood(index) {
        setFoods(f => f.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Food:</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>
                                                {food}
                                            </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter your food name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default Food