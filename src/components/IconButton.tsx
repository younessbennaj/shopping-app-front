import { Icon, Flex } from "@chakra-ui/react";

export interface IconButtonProps {
  icon: any;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  return (
    <Flex
      as="button"
      justify="center"
      align="center"
      width="100%"
      className="icon-button"
      sx={{
        "&:after": {
          display: "block",
          paddingBottom: "100%",
          content: "''",
        },
      }}
    >
      <Icon as={icon} w={6} h={6} />
    </Flex>
  );
};
