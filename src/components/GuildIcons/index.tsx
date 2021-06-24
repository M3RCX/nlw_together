import React from "react";
import { Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from './styles'



type Props = RectButtonProps &{
   
    
}

export function GuildIcon({   }: Props) {
    const uri = 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';

    return(
            <Image source={{uri}} style={styles.image} resizeMode='cover' />
    );
}