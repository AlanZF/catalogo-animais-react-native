import React, {useState} from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

export default ({route, navigation}) => {
    const [animal, setAnimal] = useState(route.params ? route.params : {})
    return (
        <View style={style.form}>
            <Text style={style.label}>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setAnimal({...animal, name})}
                placeholder="Informe o nome"
                value={animal.name}
            />
            <Text style={style.label}>Filo</Text>
            <TextInput
                style={style.input}
                onChangeText={filo => setAnimal({...animal, filo})}
                placeholder="Informe o filo"
                value={animal.filo}
            />
            <Text style={style.label}>Família</Text>
            <TextInput
                style={style.input}
                onChangeText={familia => setAnimal({...animal, familia})}
                placeholder="Informe a família"
                value={animal.familia}
            />
            <Text style={style.label}>Url do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setAnimal({...animal, avatarUrl})}
                placeholder="Informe a URL do avatar"
                value={animal.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    navigation.goBack()
                }}>
            </Button>
        </View>
    )
}

const style = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    form: {
        padding: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})