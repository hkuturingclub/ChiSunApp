import React from 'react';
import { Accordion } from 'native-base';
import { FlatList } from 'react-native';
import Item from './ManagementItem';


const ManagementList = ({ items, numColumns, seniorTeam }) =>  (
  <FlatList
    numColumns={numColumns}
    renderItem={({item}) => (
      <Item
        floors={item.floors}
        name={item.name}
        image={item.image}
        seniorTeam={seniorTeam}
        position={item.position}
        email={item.email}
      />
    )}
    keyExtractor={(item) => item.id}
    data={items}
  />
)

export default ManagementList;


