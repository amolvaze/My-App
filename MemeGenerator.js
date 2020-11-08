import React, {Component} from "react"

class MemeGenerator extends Component{
 
  constructor() {
   
    super()
    this.state = {
     
      topText: " ",
      bottomText: " ",
      randomImg: "http://i.imgflip.com/1bij.jpg" ,
      allMemeImgs: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  
  componentDidMount() {

    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
    
     const {memes} = response.data
     //console.log(memes[0])
     this.setState( {
      
      allMemeImgs : memes
 
     })
 
    })
 
   }




  handleChange(event) {
  
   const { name, value } = event.target
   
   this.setState({
  
   [name] : value

    })
  
  
 
   

  }

  handleSubmit(event) {
   
   event.preventDefault()
   const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
   const randMemeImg = this.state.allMemeImgs[randNum].url

   this.setState({
  
   randomImg: randMemeImg

   })



  }

  render(){

  	 return (
   
    <div> 

     
      <form onSubmit = {this.handleSubmit} > 
       
       <input onChange = {this.handleChange} type = "text" name = "topText"  placeholder= "Top Text" value = {this.state.topText} required />
        <input onChange = {this.handleChange} type = "text" name = "bottomText"  placeholder= "Bottom Text" value = {this.state.bottomText} required />

    <button type = "submit" required > Gen</button>
    <br />
    <br />
      </form>



      <div> 
  
    <img src = {this.state.randomImg}
      width = "1000" height = "1000" alt = " " />

      <h2> {this.state.topText} </h2> 
      <h2> {this.state.bottomText} </h2> 

      </div>
       
    </div>
    
  	 	)
  }


}

export default MemeGenerator
