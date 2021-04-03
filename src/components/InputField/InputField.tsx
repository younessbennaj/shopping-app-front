import * as React from "react";

import { Input, Stack } from "@chakra-ui/react";

import { Field } from "formik";

export interface InputFieldProps {
  label: string;
  placeholder: string;
  name: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  name,
}) => {
  return (
    <Stack spacing={2} direction="column">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field }: { field: any }) => (
          <div>
            <Input id={name} name={name} placeholder={placeholder} {...field} />
          </div>
        )}
      </Field>
    </Stack>
  );
};
