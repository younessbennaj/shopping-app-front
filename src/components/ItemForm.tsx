import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { FormValues } from "../types";
import { POSTItems } from "../requests";
import { InputField } from "./InputField";

import {
  Heading,
  Box,
  Stack,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

export interface ItemFormProps {}

export const ItemForm: React.FC<ItemFormProps> = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  return (
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
  );
};
