import React , {Component}from 'react';
import ReactDOM ,{createRoot}from 'react-dom/client';
import './index.css';
import { Header } from './Header/header';
import { Body } from './Body/body';
import { Footer } from './Footer/footer';
// import { Footer } from './Footer/footer';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


class Main extends Component{

  constructor(){
    super();
    this.state={
      name:"aravindh",
      age:20,
      profile:"FrontEndDeveloper"
    }
    
  }

  change(age){
    console.log(age)
    
  }

  changeState(){
    
    this.setState({age:50,profile:"developer"});
  }

  hello(age){
    console.log(age)
  }


  render(){
    return(
      <div>
        {this.state.age}
        <button onClick={()=>this.changeState()}>chane</button>
        <Header name={this.state.profile} />
        <Body change={this.change}/>
        <Footer/>
      </div>
    );
  }
}

// class Header extends Component{
//   render(){
//     return <div className='header'>header</div>
//   }
// }

// class Body extends Component{
//   render(){
//     return <div className='body'>Body</div>
//   }
// }

// class Footer extends Component{
//   render(){
//     return <div className='footer'>Footer</div>
//   }
// }

const root=createRoot(document.getElementById("root"));
root.render(<Main/>)
