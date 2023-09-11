import React, {Children, FC, ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
import {PADDING, WIDTH} from '../constants/constants';

export const HStack: FC<HStackPropsType> = ({children}) => {
    let sumWidth = 0;

    Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) {
            return
        }

        const {width} = child.props;
        sumWidth += width;
    })

    if ((WIDTH - PADDING * 2) < sumWidth) {
        return (
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal: -PADDING, flexGrow: 0}}>
                {children}
            </ScrollView>
        )
    }

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {children}
        </View>
    );
};

interface HStackPropsType {
    children: ReactNode;
}