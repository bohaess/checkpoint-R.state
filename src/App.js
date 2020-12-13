
import React from 'react'
import img from './imgsrc.jpg'
import img2 from './img2.jpg'
import './App.css'
class App extends React.Component {
  state={
    personn : { fullName:"Ben Hammouda Oubeid Allah",
    bio:"Si on donne l'importane a un âne ce croix cheval", 
    profession :"Pilote hélicoptère",
    imgsrc : img
  },
  show:false,
  time:0
  }
  toggleShow=()=>{
    this.setState({show:!this.state.show}) ;
    console.log(this.state.show) ;
  };
  componentDidMount(){
    setInterval(()=>{
      this.state.show ? this.setState({time:this.state.time+1}):this.setState({time:0})
    },1000)
  }
  
    
  render() {
    return (
       <div className="bodyy">
       
       <button className="btn" onClick={this.toggleShow}>{this.state.show?"hide":"show"}</button>
       
       {
         this.state.show&&
          <div className="profile">
          <h1 className="fname">information sheet :  </h1>
          <h2> {this.state.personn.fullName}</h2>
          <h3> {this.state.personn.profession}   </h3>
          <img className="photo" src ={this.state.personn.imgsrc}/>
          <p>{this.state.personn.bio}</p>
          <p style={{padding:"20px"}}>{this.state.time}</p>
         </div>
         
       }
      
       </div>
        
      
    
    )
  }
 }
 export default App;
