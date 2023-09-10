import {FC, ReactNode} from 'react';
import {View} from 'react-native';

export const HStack: FC<HStackPropsType> = ({children}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {children}
        </View>
    );
};

interface HStackPropsType {
    children: ReactNode;
}