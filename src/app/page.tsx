import { Text, VStack,Stack,useBreakpointValue} from "@chakra-ui/react";
import Hero from "./components/Hero";
import SearchBar from "./components/Searchbar";
import Companies from "./components/Companies";
import CollectionMentors from "./components/CollectionMentors";



export default function Home() {
  return (
<>
   
<Hero/>

<Companies/>

<CollectionMentors/>
</>
  );
}
