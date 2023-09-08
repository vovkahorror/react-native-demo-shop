import {View, ViewProps} from 'react-native';
import {FC} from 'react';

export const Box: FC<BoxPropsType> = ({children, bgr, width, height, ...restProps}) => {
    return (
        <View
            {...restProps}
            style={[restProps.style, {
            backgroundColor: bgr,
            borderWidth: 1,
            width,
            margin: 3,
            height: height ?? width,
        }]}>
            {children ?? children}
        </View>
    );
};

interface BoxPropsType extends ViewProps {
    bgr: string;
    width: number;
    height?: number;
}