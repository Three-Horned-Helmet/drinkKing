import React, {useState} from 'react';

const LowestNumberComponent = () => {

    const [numberPickedState, setNumberPickedState] = useState({
        pickedNumbers: [],
        inputNumber: 1,
    })

    const handleChangeInputText = (inputNumberText = 1) => {
        
    }

    return (
        <View>
            <Text>
                Lowest Number
            </Text>
            <TextInput
            keyboardType="numeric"
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            value={numberPickedState.inputNumber}
            defaultValue={"0"}
            onChangeText={inputNumberText => {
            handleChangeInputText(inputNumberText);
        }}
      />
        </View>
    );
};

export default LowestNumberComponent;