import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

const style = {
    container: {
        borderRadius: 20
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
};

export const Button = ({title, color = 'red', size = 'm'}) => {
    style.container.backgroundColor = color;

    switch(size) {
        case 'xs':
            style.container.paddingHorizontal = 4;
            style.container.paddingVertical = 8;
            break;
        case 's':
            style.container.paddingHorizontal = 14;
            style.container.paddingVertical = 18;
            break;
        case 'm':
            style.container.paddingHorizontal = 24;
            style.container.paddingVertical = 28;
            break;
        case 'lg':
            style.container.paddingHorizontal = 34;
            style.container.paddingVertical = 38;
            break;
        case 'xl':
            style.container.paddingHorizontal = 44;
            style.container.paddingVertical = 48;
            break;
        default:
            style.container.paddingHorizontal = 54;
            style.container.paddingVertical = 58;
            break;
    }

    return (
        <TouchableOpacity style={style.container}>
            <Text style = {style.title}>{title}</Text>            
        </TouchableOpacity>
    );
};
