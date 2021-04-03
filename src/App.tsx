import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, FormikHelpers } from "formik";
import {
  Container,
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Stack,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

import { InputField } from "./components/InputField";

// Types

interface ItemType {
  name: string;
  category: string;
  furtherInformation: string;
  image: string;
}

//Requests

const GETShoppingList = () => {
  return axios.get("/shopping_list/33");
};

const GETItems = () => {
  return axios.get("/items");
};

const POSTItems = (values: ItemType) => {
  return axios.post("/items", values);
};

export interface ShoppingListProps {}

const ShoppingList: React.FC<ShoppingListProps> = () => {
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
          return <ListItem key={item.name}>{item.name}</ListItem>;
        })}
      </UnorderedList>
    </Box>
  );
};

export interface ItemsListProps {}

const ItemsList: React.FC<ItemsListProps> = () => {
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
          return <ListItem key={item.name}>{item.name}</ListItem>;
        })}
      </UnorderedList>
    </Box>
  );
};

export interface FormValues {
  name: string;
  furtherInformation: string;
  image: string;
  category: string;
}

function App() {
  const [successMessage, setSuccessMessage] = useState(null);
  return (
    <Container>
      <ItemsList />
      <ShoppingList />
      <Box>
        <Heading>Add a new item</Heading>

        <Formik
          initialValues={{
            name: "",
            furtherInformation: "",
            image: "",
            category: "",
          }}
          onSubmit={(
            values: FormValues,
            { setSubmitting }: FormikHelpers<FormValues>
          ) => {
            POSTItems(values).then((res) => {
              setSuccessMessage(res.data.message);
            });
            setSubmitting(false);
          }}
        >
          <Form>
            <Stack spacing={4} direction="column" align="start">
              <InputField name="name" label="Name" placeholder="Enter a name" />
              <InputField
                name="furtherInformation"
                label="Further information"
                placeholder="Enter further informations"
              />
              <InputField
                name="image"
                label="Image url"
                placeholder="Enter an image url"
              />
              <InputField
                name="category"
                label="Category"
                placeholder="Enter a category"
              />

              <Button colorScheme="blue" type="submit">
                Submit
              </Button>
              {successMessage && (
                <Alert status="success">
                  <AlertIcon />
                  <Box flex="1">
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription display="block">
                      {successMessage}
                    </AlertDescription>
                  </Box>
                  <CloseButton position="absolute" right="8px" top="8px" />
                </Alert>
              )}
            </Stack>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}

export default App;
