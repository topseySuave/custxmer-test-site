import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Image,
} from "@chakra-ui/react";

import Image1 from "../assets/big_plus_opened.webp";
import Image2 from "../assets/log_in.webp";
import Image3 from "../assets/providers.webp";

export default function CallToAction() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Manage and contact your service providers by{" "}
          <Text as={"span"} color={"brand.100"}>
            simply tapping your phone!
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          earum officia odit illum sed ea tempore ut quia similique, unde odio
          impedit, voluptas amet excepturi a id rem obcaecati. Est.
        </Text>
        <Flex
          w={"full"}
          position="relative"
          justifyContent={"center"}
          alignItems={"center"}
          mt={[20]}
        >
          <Image
            maxW={["50%", "unset"]}
            src={Image3.src}
            alt={"3 hero image"}
          />
          <Image
            maxW={["50%", "unset"]}
            src={Image2.src}
            alt={"2 hero image"}
            position={"absolute"}
          />
          <Image
            maxW={["50%", "unset"]}
            src={Image1.src}
            alt={"1 hero image"}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
