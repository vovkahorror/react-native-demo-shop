import {View} from 'react-native';
import {FC, ReactNode} from 'react';

export const VStack: FC<VStackPropsType> = ({children}) => {
    return (
        <View>
            {children}
        </View>
    );
};

interface VStackPropsType {
    children: ReactNode;
}