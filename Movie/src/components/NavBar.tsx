import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/dog-8576035_1280.png";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="40px">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
