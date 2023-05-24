import React from 'react'



 function NameList (){
    const names =["Bruce", "Clark", "Diana"]
          const persons= [{
        id: 1,
        name:"Draupadi",
        age:29,
        skill: "JSON",
        },

        {
          id:2,
        name: "Manoj",
        age:30,
        skill:"React",
        }]



        
        const nameList= names.map(name => <h2 key={name} > {name}</h2>)
        
        return
<div>{nameList}</div>
    
  }

export default NameList;