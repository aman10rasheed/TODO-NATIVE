import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TodoScreen = () => {

    const data = [
        {
            id: "1",
            task: "go to moive"
        },
        {
            id: "2",
            task: "go to gym"
        },
        {
            id: "3",
            task: "go to school"
        },
    ]
    return (
        <View style={{ margin: 15 }}>
            <Text style={{ fontWeight: 700, fontSize: 40, textAlign: "center" }}>ToDo</Text>
            <TextInput
                style={styles.textInput}
                placeholder='ADD A TASK' />
            <TouchableOpacity
                style={styles.button}>
                <Text
                    style={styles.btnText}>ADD</Text>
            </TouchableOpacity>
            <View style={styles.taskBox}>
                {/* <Text style={styles.task}>{data}</Text> */}
                <Text>EDIT</Text>
                <Text>DELET</Text>
            </View>
        </View>
    )
}

export default TodoScreen

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        backgroundColor: "black",
        margin: "auto",
        borderRadius: 6,
        marginTop: 6,
        padding: 6
    },
    textInput: {
        height: 30,
        borderWidth: 2,
        borderColor: "blue",
        borderRadius: 6,
        paddingHorizontal: 16
    },
    btnText: {
        fontSize: 20,
        color: "white",
        alignItems: "center"
    },
    taskBox: {
        flexDirection: "row",
        backgroundColor: "blue",
        marginTop: 30,
        padding: 20,
        borderRadius: 8,
        gap: 7
    },
    task: {
        flex: 1,
        fontSize: 20,
        color: "white"
    }
})