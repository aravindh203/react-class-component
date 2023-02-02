import React , {Component}from 'react';

export class Header extends Component{
    constructor(){
        super();
        this.age=20;
    }
    
    console(){
        console.log(this);
    }

    render(){
        return <div className='header'>
            {this.props.name}
            {/* <button onClick={()=>{this.props.name(this.props.name)}}>click</button> */}
        </div>
    }
}