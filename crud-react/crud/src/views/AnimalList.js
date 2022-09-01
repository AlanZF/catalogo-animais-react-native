import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import animals from '../data/animals'
import { ListItem, Avatar } from '@rneui/themed'
import { Button, Icon } from '@rneui/base'
import AnimalContext from '../context/AnimalContext'

export default props => {

    const { state, dispatch } = useContext(AnimalContext)

    function confirmAnimalDeletion(animal) {
        Alert.alert('Excluir Animal', 'Deseja excluir o animal?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteAnimal',
                        payload: animal,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(animal) {
        return (
            <>
                <Button
                    title="Editar"
                    color="#FFD700"
                    onPress={() => props.navigation.navigate('AnimalForm', animal)}
                    //icon={<Icon.Button name="edit" size={25} color="blue" />}
                />
                <Button
                    title="Excluir"
                    color="red"
                    onPress={() => confirmAnimalDeletion(animal)}
                    //icon={<Icon.Button name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getAnimalItem({ item: animal }) {
        return (
            <ListItem bottomDivider //rightElement={getActions(animal)}
                onPress={() => props.navigation.navigate('AnimalForm')}>
                <Avatar rounded source={{ uri: animal.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: 'bold' }}>
                        {animal.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        {animal.familia}
                    </ListItem.Subtitle>
                    {getActions(animal)}
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList
            keyExtractor={animal => animal.id.toString()}
            data={state.animals}
            renderItem={getAnimalItem}
        />
    )
}