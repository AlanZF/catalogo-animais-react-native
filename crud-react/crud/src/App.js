import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimalList from './views/AnimalList'
import AnimalForm from './views/AnimalForm'
import { Button } from '@rneui/base';
import { AnimalsProvider } from './context/AnimalContext';

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <AnimalsProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="AnimalList"
                    screenOptions={screenOptions}>
                    <Stack.Screen
                        name="AnimalList"
                        component={AnimalList}
                        options={({ navigation }) => {
                            return {
                                title: "Lista de animais",
                                headerRight: () => (
                                    <Button
                                        //type="clear"
                                        //icon={<Icon name="delete" size={25} color="white"/>}
                                        title="Adicionar"
                                        onPress={() => navigation.navigate('AnimalForm')}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="AnimalForm"
                        component={AnimalForm}
                        options={
                            { title: "Formulário de Animais" }
                        }
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AnimalsProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff'
}