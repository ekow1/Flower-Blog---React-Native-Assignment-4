import React from 'react';
import { FlatList } from "react-native";
import Home from '../Screens/Home';





const ListOfFlowers = () => {
    const minRead = ' mins read';
    const db =[
      {
        id:1,
        img:require("../images/northerly-flora.jpg"),
        heading:"Nothernly Floral  people turn to flowers for their medicinal powers. ...",
        owner:"Dylis Nyamison",
        time:`${11 + minRead}`,
        user:require('../images/hilda.png'), 
        article:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
      },
      
      {
        id:2,
        img:require("../images/helianthus-yellow.jpg"),
        heading:"Heliaanthus Flower elegant multi-purpose sunflower with awesome smell",
        owner:"Ekow Enu",
        time:`${9 + minRead}`,
        user:require("../images/ekow.webp"), 
        article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id:3,
        img:require("../images/azalea.webp"),
        heading:"Azalea Flower elegant multi-purpose medicinal flower with awesome smell",
        owner:"Enoch Ofosu",
        time:`${5 + minRead}`,
        user:require("../images/enoch.jpg"), 
        article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id:4,
        img:require("../images/red-rose.jpg"),
        heading:"Hot Red Rose Flower elegant love flower  with romantic smell for loved ones",
        owner:"Hilda Love",
        time:`${8 + minRead}`,
        user:require("../images/dylis.jpg"), 
        article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id:5,
        img:require("../images/forget-me-not.jpg"),
        heading:"Forget-me-not is a cute biennial or perennial flower, depending on the variety and climate.",
        owner:"Dylis Nyamison",
        time:`${8 + minRead}`,
        user:require("../images/dylis.jpg"), 
        article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
    //   {
    //     id:2,
    //     img:require("../images/helianthus-yellow.jpg"),
    //     heading:"Heliaanthus Flower elegant multi-purpose sunflower with awsome smell",
    //     owner:"Ekow Enu",
    //     time:`${9 + minRead}`,
    //     user:require("../images/ekow.webp"), 
    //     article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //   },

    
    ];

  return (
    <FlatList
      data={db}
      renderItem={({item})=> {
        return (
          <Home
            img= {item.img}
            Heading= {item.heading}
            Owner= {item.owner}
            User= {item.user}
            Time= {item.time}
            Article= {item.article}
            Id={item.id}
            Color= {item.color}
          />
        )
    }}
    keyExtractor={(item)=>item.id }
    />
);
}

export default ListOfFlowers;