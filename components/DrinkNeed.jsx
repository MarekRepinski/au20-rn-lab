import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DrinkNeed = ({ nextScreen }) => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    // const url = 'https://api.frankfurter.app/latest';
    const [drink, setDrink] = useState({});

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((json) => {
                console.log(json);
                console.log(json.drinks);
                setDrink(json.drinks[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <div className="App">
            <h3>Vxl</h3>
            <div>AUD: {drink.strDrink}</div>
        </div>
    );
}

export default DrinkNeed;