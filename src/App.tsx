import React, { useState, useEffect } from "react";

import { ItemType } from "./types";

import { GETItem } from "./requests";

import { AppLayout } from "./components/AppLayout";
import { ShoppingList } from "./components/ShoppingList";
import { ItemsList } from "./components/ItemsList";
import { ItemForm } from "./components/ItemForm";
import { ItemDetails } from "./components/ItemDetails";

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
    <AppLayout>
      <ItemsList setItemId={setItemId} itemsToAdd={itemsToAdd} />
      <ItemDetails
        item={item}
        setItemsToAdd={setItemsToAdd}
        itemsToAdd={itemsToAdd}
      />
      <ShoppingList />
      <ItemForm />
    </AppLayout>
  );
}

export default App;
