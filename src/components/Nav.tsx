import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../assets/logo.png";
import router from "next/router";
import Link from "next/link";

const Links = ["Home", "About", "Service", "Contact"];

const NavLink = ({
  children,
  pathname,
}: {
  children: ReactNode;
  pathname: string;
}) => {
  const route = children?.toString().toLowerCase();

  return (
    <Link href={route === "home" ? "/" : `/${route}`}>
      <ChakraLink
        px={2}
        py={1}
        rounded={"md"}
        textTransform={"uppercase"}
        textDecoration={
          route === pathname.replace("/", "") ||
          (route === "home" && pathname === "/")
            ? "underline"
            : "unset"
        }
        _hover={{
          textDecoration: "underline",
          bg: "transparent",
        }}
      >
        {children}
      </ChakraLink>
    </Link>
  );
};

export default function Nav({ isFooter = false }: { isFooter?: boolean }) {
  const [pathname, setpathName] = useState("Home");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setpathName(router.pathname);
  }, []);

  return (
    <>
      <Box bg={"brand.100"} color="white" px={[8, 40]}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {!isFooter && (
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          )}
          <HStack spacing={8} alignItems={"center"}>
            {!isFooter ? (
              <Link href={"/"}>
                <Image
                  cursor={"pointer"}
                  maxH={16}
                  src={Logo.src}
                  alt={"logo"}
                />
              </Link>
            ) : (
              <Box>
                <Text>+1 XXX XXX XXX</Text>
                <Text>custxmer@myworld.com</Text>
              </Box>
            )}
          </HStack>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link} pathname={pathname}>
                {link}
              </NavLink>
            ))}
          </HStack>
          <Flex alignItems={"center"}>
            <HStack>
              <ChakraLink
                target="_blank"
                p={4}
                href="https://twitter.com/custxmerapp"
              >
                <FaTwitter />
              </ChakraLink>
              <ChakraLink
                target="_blank"
                p={4}
                href="https://www.linkedin.com/company/custxmer/"
              >
                <FaLinkedinIn />
              </ChakraLink>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} pathname={pathname}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      {!isFooter && (
        <Box bg="brand.200" py={2} px={40}>
          <Text textTransform={"capitalize"}>{pathname.replace("/", "")}/</Text>
        </Box>
      )}
    </>
  );
}
