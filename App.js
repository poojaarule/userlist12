import UserProfile from "./component/Userprofile/index.js";
import { Component } from "react";
let initialuserlist=[
  {
    id:1,
    imgUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"pooja",
    role:"sofware enginering"
  },
  {
    id:2,
    imgUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"mahadev",
    role:"sofware enginering"
  },
  {
    id:3,
    imgUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"ayush",
    role:"sofware enginering"
  },
  {
    id:4,
    imgUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"avantika",
    role:"sofware enginering"
  },
  {
    id:5,
    imgUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"arthi arule",
    role:"sofware enginering"
  },
]
class App extends Component{
  state={searchInput:" ",userdetails1:initialuserlist}
  onchangeinput=(event)=>{
    this.setState({searchInput:event.target.value})
  
  }
  deleteUser=(id)=>{
    const {userdetails1}=this.state 
    const filteredUsersData = userdetails1.filter(
     each => each.id !== id
   )
   this.setState({ 
    searchInput:filteredUsersData
   })
   }
  render(){
   const {searchInput,userdetails1}=this.state 
   let searchResult=initialuserlist.filter(eachuser=>eachuser.name.includes(searchInput))
   console.log(searchResult)
 
   
    return(
      <div>
        <center>
        <h1>User List</h1>
       <input type="search" onChange={this.onchangeinput}/>
        <ul>
          {searchResult.map(eachitem=>(<UserProfile userdetails1={eachitem}  deleteuser1={this.deleteUser}/>))}
        
        </ul>
        </center>
      </div>
    )
  }
}
export default App;