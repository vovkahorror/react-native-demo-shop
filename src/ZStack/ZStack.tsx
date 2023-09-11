import {Children, cloneElement, FC, ReactNode} from 'react';
import {View} from 'react-native';

const getAbsoluteChildren = (children: ReactNode | ReactNode[], reverse: boolean) => {
    let childrenArray = Children.toArray(children);

    if (reverse) {
        childrenArray = childrenArray.reverse();
    }

    return childrenArray.map((child: any) => {
        return cloneElement(
            child,
            {position: 'absolute'},
            child.props.children
        )
    })
}

export const ZStack: FC<ZStackPropsType> = ({children, reverse = false}) => {
    return (
        <View style={{position: 'relative'}}>
            {getAbsoluteChildren(children, reverse)}
        </View>
    )
}

interface ZStackPropsType {
    children: ReactNode | ReactNode[];
    reverse?: boolean;
}