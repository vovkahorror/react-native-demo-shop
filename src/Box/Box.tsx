import {View, ViewProps} from 'react-native';
import {FC} from 'react';

export const Box: FC<BoxPropsType> = ({children, bgr, width, height, mt, mr, mb, ml, ...restProps}) => {
    return (
        <View
            {...restProps}
            style={[restProps.style, {
                backgroundColor: bgr,
                borderWidth: 1,
                width,
                margin: 3,
                height: height ?? width,
                marginTop: mt,
                marginRight: mr,
                marginBottom: mb,
                marginLeft: ml,
            }]}>
            {children ?? children}
        </View>
    );
};

interface BoxPropsType extends ViewProps {
    bgr: string;
    width: number;
    height?: number;
    mt?: number;
    mr?: number;
    mb?: number;
    ml?: number;
}