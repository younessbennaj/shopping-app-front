import React, { useState, useEffect } from "react";
import { ItemsListProps, ItemType } from "../types";
import { GETItems, PATCHShoppingList } from "../requests";
import {
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

export const ItemsList: React.FC<ItemsListProps> = ({
  itemsToAdd,
  setItemId,
}) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    GETItems().then((res) => {
      setItems(res.data.data);
    });
  }, []);
  return (
    <Box bg="orange.100" p={4}>
      <Heading>Items List</Heading>
      <UnorderedList>
        {items.map((item: ItemType) => {
          return (
            <ListItem
              onClick={() => {
                setItemId(item.id);
              }}
              key={item.id}
            >
              {item.name}
            </ListItem>
          );
        })}
      </UnorderedList>
      <Button
        onClick={() => {
          PATCHShoppingList(itemsToAdd);
        }}
      >
        Save
      </Button>
    </Box>
  );
};
