import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { styles } from "./styles";

import { Profile } from "../../components/profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointments";
import { ListDivider}  from "../../components/ListDivider"



export function Home() {
    const[category, setCategory] = useState('');

    const appointments =[
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'Hoje é o dia aonde vamos chegar no papelão 5'
        },{
            id: '2',
            guild: {
            id: '1',
            name: 'Lendarios',
            icon: null,
            owner: true
            },
        category: '1',
        date: '22/06 às 20:40',
        description: 'Hoje é o dia aonde vamos chegar no papelão 5'
        }
    ]
    
    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }


    return (
        <View>


            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            
            <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
            
            <View style={styles.content}>
                <ListHeader title="partidas agendadas" subtitle="Total 6" />

                <FlatList data={appointments} keyExtractor={item=> item.id} renderItem={({ item }) => ( <Appointment data={item} /> )} ItemSeparatorComponent={() => <ListDivider />} style={styles.matches} showsVerticalScrollIndicator={false}  />
            </View>
            
        </View>
    );
}