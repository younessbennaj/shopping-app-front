import React, { useState, useEffect } from "react";

import { ItemType } from "./types";

import { GETItem } from "./requests";

import { ShoppingList } from "./components/ShoppingList";
import { ItemsList } from "./components/ItemsList";
import { ItemForm } from "./components/ItemForm";
import { ItemDetails } from "./components/ItemDetails";

import { Container } from "@chakra-ui/react";

function App() {
  const [itemId, setItemId] = useState<string>("");
  const [item, setItem] = useState<ItemType | null>(null);
  const [itemsToAdd, setItemsToAdd] = useState<string[]>([]);

  useEffect(() => {
    GETItem(itemId).then((res) => {
      setItem(res.data.data);
    });
  }, [itemId]);

  return (
    <Container>
      <ItemsList setItemId={setItemId} itemsToAdd={itemsToAdd} />
      <ItemDetails
        item={item}
        setItemsToAdd={setItemsToAdd}
        itemsToAdd={itemsToAdd}
      />
      <ShoppingList />
      <ItemForm />
    </Container>
  );
}

export default App;
