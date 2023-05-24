import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn:true 
      }
    }
  render(){


    return this.state.isLoggedIn ?(<div>Welcome Manoj</div>):(<div>Welcome draupadi</div>)
    // let message
    // if(this.state.isLoggedIn){
    //     message= <div>welcome Manoj</div>
    // }
    // else{
    //     message=<div>Welcome draupadi</div>
    // }
    // if (this.state.isLoggedIn) {
    //     return<div>Welcome Manoj</div>
        
    // }
    //     else {
    //         return <div>Welcome draupadi</div>
    //     }

    
   
    // return (
    //   <div>{message}</div>
    // )
  }

 }
export default UserGreeting;