import React, {Component} from "react";

export class Body extends Component{
    render(){
        return <div className='body'>Body
            <button onClick={()=>this.props.change("worked")}>chage state</button>
        </div>
    }
}