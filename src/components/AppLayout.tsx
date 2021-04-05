import {
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
  AiOutlineHistory,
} from "react-icons/ai";
import { GoGraph } from "react-icons/go";

import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { IconButton } from "./IconButton";

export interface AppLayoutProps {}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem colSpan={1}>
        <Stack
          bg="white"
          spacing={4}
          height="100vh"
          direction="column"
          justify="center"
        >
          <IconButton icon={AiOutlineUnorderedList} />
          <IconButton icon={AiOutlineShoppingCart} />
          <IconButton icon={AiOutlineHistory} />
          <IconButton icon={GoGraph} />
        </Stack>
      </GridItem>
      <GridItem
        colSpan={5}
        bg="gray.50"
        px={4}
        height="100vh"
        overflowY="scroll"
      >
        {children}
      </GridItem>
    </Grid>
  );
};
