import {Children, cloneElement, FC, ReactNode} from 'react';
import {View} from 'react-native';

const getAbsoluteChildren = (children: ReactNode | ReactNode[]) => {
    let childrenArray = Children.toArray(children);

    return childrenArray.map((child: any) => {
        return cloneElement(
            child,
            {position: 'absolute'},
            child.props.children
        )
    })
}

export const ZStack: FC<ZStackPropsType> = ({children}) => {
    return (
        <View style={{position: 'relative'}}>
            {getAbsoluteChildren(children)}
        </View>
    )
}

interface ZStackPropsType {
    children: ReactNode | ReactNode[];
}