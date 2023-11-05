"use client";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link as LinkItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useColorMode,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import {NavItem} from "@/utils/interfaces"
import { usePathname } from 'next/navigation'


//  
export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  


  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "#0d1117")}
        color={useColorModeValue("yellow.600", "white")}
        minH={"60px"}
        position={"sticky"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
          
            fontWeight={"extrabold"}
            className={colorMode ==="dark"? "bg-gray text-[#ffc000]": "bg_white text-[#ffc000]"}
    
            >
            RS
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}>
          <Button display={{ base: "none", md: "inline-flex" }}  fontSize={"xs"} color={useColorModeValue("gray.600", "white")} as={"a"}>Call:  +92 (323) 199-0919</Button>

          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"xs"}
            fontWeight={600}
            color={"white"}
            bg={"#ffc000"}
            href={"#"}
            _hover={{
              bg: "transparent",
              color: "#ffc000"
            }}
            // className={`font-sm text-gray-200 bg-[#ffc000]${colorMode === "dark"? "":""}`}
          >
            Book Appointment
          </Button>
          <ThemeSwitchButton/>
          
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}


// 
const DesktopNav = () => {
  const pathname = usePathname()
  const { colorMode } = useColorMode();
  
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <LinkItem
                as={Link}
                href={navItem.href ?? "#"}
                color={colorMode ? "gray.500": "gray.200"}
                // color={useColorMode("gray.500", "gray.200")}
                fontSize={"sm"}
                fontWeight={"500"}
                _hover={{
                  color: "#ffc000",
                }}
                _active={{
                  color: "#ffc000"
                }}
                className={
                  pathname === navItem.href
                    ? "active" // Add a custom "active" class for active links
                    : ""
                }
                 >
                {navItem.label}
              </LinkItem>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                className={colorMode === "dark" ? "bg-white" : "bg-yellow-400"}
                p={4}
                rounded={"xl"}
                minW={"sm"}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const { colorMode } = useColorMode()
  
  return (
    <Link
      role={"group"}
      href={href ?? "#"}
      className={`p-2 text-sm font-md block rounded-sm ${colorMode === "dark" ? "text-white hover:bg-gray-900" : "text-yellow-400 hover:bg-yellow-500"}`}
     >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}>
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const pathname = usePathname()
  const { isOpen, onToggle } = useDisclosure();
  
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          _hover={{
            color: "#ffc000"
          }}
          _active={{
            color:"#ffc000"
          }}
          className={
            pathname === href ? "active" : "" // Add "active" class for active links
          }
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}>
          {children &&
            children.map((child) => (
              <LinkItem as={Link} key={child.label} py={2} href={child.href}>
                {child.label}
              </LinkItem>
            ))}
            <Link href={"#"}  as={"a"}>Call:  +92 (311) 626-7258</Link>

            <LinkItem
            as={Link}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              className={`bg-yellow-400`}
              href={"#"}
              _hover={{
                bg: "yellow.300",
              }}>
              Book Appointment
            </LinkItem>
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS: Array<NavItem> = [
  {
        label: "Home",
      href:"/"
  },
  {
      label: "About",
      href: "/about",
    
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];