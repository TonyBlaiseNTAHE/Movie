import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/dog-8576035_1280.png";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
    </HStack>
  );
};
export default NavBar;
