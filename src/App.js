import React, { useState } from "react";
import axios from "axios"
import "./App.css"
const App = () => {
    const [input, setInput] = useState("")
    const [price, setPrice] = useState("")
    const [name, setName] = useState("")
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://rest.coinapi.io/v1/assets/${input}?apikey=AD22F2AA-95FC-4147-8082-69747ED9DDCC`)
            setPrice(response.data[0].price_usd)
            setName(response.data[0].name)
            console.log(response.data)
        }
        catch (err) {
            setPrice("Enter Correct Abbreviation")
            setName("Invalid")
            console.log(err)
        }

    }


    return (
        <div className="a-container">
            <div>
                <form onSubmit={onSubmit}>
                    <h1 className="text-1">crypto price checker</h1>
                    <div className="input-field">
                        <input
                            placeholder="Enter Abbreviation"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div className="btn-ele">
                        <button className="btn-1">Check Price</button>
                    </div>
                    <h2 className="text-2">Results:</h2>
                    <div className="result-ele">
                        <span>Coin Full Name : {name}</span>
                        <span>Price : {price} $</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App;     
