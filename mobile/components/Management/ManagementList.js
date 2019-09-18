import { FlatList } from "react-native";
import Item from "./ManagementItem";
import React from "react";

const ManagementList = ({ items, numColumns, seniorTeam, showFloors }) => (
  <FlatList
    numColumns={numColumns}
    renderItem={({ item }) => (
      <Item
        floors={item.floors}
        name={item.name}
        image={item.image}
        seniorTeam={seniorTeam}
        position={item.position}
        email={item.email}
        showFloors={showFloors}
      />
    )}
    keyExtractor={item => item.id}
    data={items}
  />
);

export default ManagementList;
