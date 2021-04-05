import React from "react";
import { ItemDetailsProps } from "../types";
import { POSTItemToShoppingList } from "../requests";

import { Heading, Box, Button, Text } from "@chakra-ui/react";

export const ItemDetails: React.FC<ItemDetailsProps> = ({
  item,
  setItemsToAdd,
  itemsToAdd,
}) => {
  return (
    <>
      {item && (
        <Box>
          <Heading>Item details</Heading>
          <Text fontSize="sm" color="gray.400">
            Name
          </Text>
          <Text fontSize="md">{item.name}</Text>
          <Text fontSize="sm" color="gray.400">
            Category
          </Text>
          <Text fontSize="md">{item.category}</Text>
          <Text fontSize="sm" color="gray.400">
            Further information
          </Text>
          <Text fontSize="md">{item.furtherInformation}</Text>
          <Button
            colorScheme="blue"
            onClick={() => {
              // setItemsToAdd([...itemsToAdd, item.id]);
              POSTItemToShoppingList(item.id);
            }}
          >
            Add
          </Button>
        </Box>
      )}
    </>
  );
};
