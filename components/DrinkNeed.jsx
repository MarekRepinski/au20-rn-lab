import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

const DrinkNeed = ({ nextScreen }) => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const [drink, setDrink] = useState({});
    const [ing1, setIng1] = useState(' ');
    const [ing2, setIng2] = useState(' ');
    const [ing3, setIng3] = useState(' ');
    const [ing4, setIng4] = useState(' ');
    const [ing5, setIng5] = useState(' ');

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((json) => {
                setDrink(json.drinks[0]);
                setIng(json.drinks[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Special Drink for You:</Text>
            <Text style={styles.title}>{drink.strDrink}</Text>
            <Image source={{ uri: drink.strDrinkThumb }}
                style={styles.image} />
            <Text style={styles.title2}>Ingredients</Text>
            <Text style={styles.bread}>{ing1}</Text>
            <Text style={styles.bread}>{ing2}</Text>
            <Text style={styles.bread}>{ing3}</Text>
            <Text style={styles.bread}>{ing4}</Text>
            <Text style={styles.bread}>{ing5}</Text>
            <Text style={styles.title2}>Instructions</Text>
            <Text style={styles.breadLast}>{drink.strInstructions}</Text>
            <Button
                color='aqua'
                title='Back'
                onPress={nextScreen} />
        </ScrollView>
    );

    function setIng(json) {
        setIng1(json.strMeasure1 + ' ' + json.strIngredient1);

        if (json.strIngredient2 != 'null') {
            if (json.strMeasure2 != 'null') {
                setIng2(json.strMeasure2 + ' ' + json.strIngredient2);
            } else {
                setIng2(json.strIngredient2);
            }
        } else {
            setIng2(' ');
        }

        if (json.strIngredient3 != 'null') {
            if (json.strMeasure3 != 'null') {
                setIng3(json.strMeasure3 + ' ' + json.strIngredient3);
            } else {
                setIng3(json.strIngredient3);
            }
        } else {
            setIng3(' ');
        }

        if (json.strIngredient4 != 'null') {
            if (json.strMeasure4 != 'null') {
                setIng4(json.strMeasure4 + ' ' + json.strIngredient4);
            } else {
                setIng4(json.strIngredient4);
            }
        } else {
            setIng4(' ');
        }

        if (json.strIngredient5 != 'null') {
            if (json.strMeasure5 != 'null') {
                setIng5(json.strMeasure5 + ' ' + json.strIngredient5);
            } else {
                setIng5(json.strIngredient5);
            }
        } else {
            setIng5(' ');
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: 300,
    },
    button: {
        marginTop: 40,
    },
    image: {
        marginTop: 5,
        padding: 5,
        width: '80%',
        height: '80%',
        alignSelf: 'center',
    },
    header: {
        marginTop: 40,
        padding: 5,
        backgroundColor: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    title: {
        padding: 5,
        backgroundColor: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center',
    },
    title2: {
        marginTop: 5,
        padding: 5,
        backgroundColor: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
    },
    bread: {
        padding: 2,
        backgroundColor: '#fff',
    },
    breadLast: {
        marginBottom: 20,
        padding: 5,
        backgroundColor: '#fff',
    },
});

export default DrinkNeed;