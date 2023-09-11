import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const BurgerMenuIcon = (props: SvgProps & { colorFill?: string }) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill={props.colorFill || '#fff'}
            d="M4 18a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2H4Zm0-5a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2H4Zm0-5a1 1 0 0 1 0-2h16a1 1 0 1 1 0 2H4Z"
        />
    </Svg>
);
