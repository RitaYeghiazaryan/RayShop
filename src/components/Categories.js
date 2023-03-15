import React from 'react';
import { Component } from 'react';
class Categories extends Component{
constructor(props){
    super(props)
    this.state={
        categories:[
            {
                key:"all",
                name:"All"
            },
            {
                key:"hats",
                name:"Hats"
            },
            {
                key:"sneakers",
                name:"Sneakers"
            },
            {
                key:"jackets",
                name:"Jackets"
            },
            {
                key:"womens",
                name:"Womens"
            },
            {
                key:"mens",
                name:"Mens"
            },

            
        ]
    }

}
    render(){
        return(
            <div className='categories'>
                {this.state.categories.map((el)=>(
                    <div className='categories__item' key={el.key} onClick={()=>this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }

}



export default Categories;