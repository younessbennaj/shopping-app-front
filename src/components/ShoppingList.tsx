import React, { useState, useEffect } from "react";
import { ItemType } from "../types";
import { GETShoppingList } from "../requests";
import { Heading, Box, UnorderedList, ListItem } from "@chakra-ui/react";

export interface ShoppingListProps {}

export const ShoppingList: React.FC<ShoppingListProps> = () => {
  const [shoppingList, setShoppingList] = useState<ItemType[]>([]);
  useEffect(() => {
    GETShoppingList().then((res) => {
      setShoppingList(res.data.data);
    });
  }, []);

  return (
    <Box bg="red.100" p={4}>
      <Heading>Shopping List</Heading>

      <UnorderedList>
        {shoppingList.map((item: ItemType) => {
          return <ListItem key={item.id}>{item.name}</ListItem>;
        })}
      </UnorderedList>
    </Box>
  );
};
