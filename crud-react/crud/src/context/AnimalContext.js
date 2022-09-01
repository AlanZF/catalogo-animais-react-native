import React, { createContext, useReducer } from 'react'
import animals from '../data/animals'

const initialState = { animals }
const AnimalContext = createContext({})

const actions = {
    createAnimal(state, action) {
        const animal = action.payload
        animal.id = Math.random()
        return {
            ...state,
            animals: [...state.animals, animal]
        }
    },
    updateAnimal(state, action) {
        const updated = action.payload
        return {
            ...state,
            animals: state.animals.map(a => a.id === updated.id ? updated : a)
        }
    },
    deleteAnimal(state, action) {
        const animal = action.payload
        return {
            ...state,
            animals: state.animals.filter(a => a.id !== animal.id)
        }
    }
}

export const AnimalsProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AnimalContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AnimalContext.Provider>
    )
}

export default AnimalContext