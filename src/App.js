import { Component } from "react";
import Header from "./components/Header";

import Pagenation from "./components/Pagination";
import Cotegories from "./components/Categories";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems:[],
      data: [
        //hats 9
        { 
          id: 1,
          name: "Brown Brim",
          imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
          price: 25,
          category:"hats"

        },
        {
          id: 2,
          name: "Blue Beanie",
          imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
          price: 18,
          category:"hats"
        },
        {
          id: 3,
          name: "Brown Cowboy",
          imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
          price: 35,
          category:"hats"
        },
        {
          id: 4,
          name: "Grey Brim",
          imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
          price: 25,
          category:"hats"
        },
        {
          id: 5,
          name: "Green Beanie",
          imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
          price: 18,
          category:"hats"
          
        },
        {
          id: 6,
          name: "Palm Tree Cap",
          imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
          price: 14,
          category:"hats"
        },
        {
          id: 7,
          name: "Red Beanie",
          imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
          price: 18,
          category:"hats"
        },
        {
          id: 8,
          name: "Wolf Cap",
          imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
          price: 14,
          category:"hats"
        },
        {
          id: 9,
          name: "Blue Snapback",
          imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
          price: 16,
          category:"hats"
        },
        // sneakers 7
        {
          id: 10,
          name: "Adidas NMD",
          imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
          price: 220,
          category:"sneakers"
       
        },
        {
          id: 11,
          name: "Adidas Yeezy",
          imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
          price: 280,
          category:"sneakers"
       
        },
        {
          id: 12,
          name: "Black Converse",
          imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
          price: 110,
          category:"sneakers"
       
        },
        {
          id: 13,
          name: "Nike White AirForce",
          imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
          price: 160,
          category:"sneakers"
        },
        {
          id: 14,
          name: "Nike Red High Tops",
          imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
          price: 160,
          category:"sneakers"
       
        },
        {
          id: 15,
          name: "Nike Brown High Tops",
          imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
          price: 160,
          category:"sneakers"
        },
        {
          id: 16,
          name: "Air Jordan Limited",
          imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
          price: 190,
          category:"sneakers"
        },
        {
          id: 17,
          name: "Timberlands",
          imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
          price: 200,
          category:"sneakers"
          
        },
        //jackets 5
        {
          id: 18,
          name: "Black Jean Shearling",
          imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
          price: 125,
          category:"jackets"
        },
        {
          id: 19,
          name: "Blue Jean Jacket",
          imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
          price: 90,
          category:"jackets"
        },
        {
          id: 20,
          name: "Grey Jean Jacket",
          imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
          price: 90,
          category:"jackets"
        },
        {
          id: 21,
          name: "Brown Shearling",
          imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
          price: 165,
          category:"jackets"
        },
        {
          id: 22,
          name: "Tan Trench",
          imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
          price: 185,
          category:"jackets"
        },
        //wommens 7
        {
          id: 23,
          name: "Blue Tanktop",
          imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
          price: 25,
          category:"womens"
        },
        {
          id: 24,
          name: "Floral Blouse",
          imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
          price: 20,
          category:"womens"
        },
        {
          id: 25,
          name: "Floral Dress",
          imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
          price: 80,
          category:"womens"
        },
        {
          id: 26,
          name: "Red Dots Dress",
          imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
          price: 80,
          category:"womens"
        },
        {
          id: 27,
          name: "Striped Sweater",
          imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
          price: 45,
          category:"womens"
        },
        {
          id: 28,
          name: "Yellow Track Suit",
          imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
          price: 135,
          category:"womens"
        },
        {
          id: 29,
          name: "White Blouse",
          imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
          price: 20,
          category:"womens"
        },

        {
          id: 30,
          name: "Camo Down Vest",
          imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
          price: 325,
          category:"mens"
        },
        {
          id: 31,
          name: "Floral T-shirt",
          imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
          price: 20,
          category:"mens"
        },
        {
          id: 32,
          name: "Black & White Longsleeve",
          imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
          price: 25,
          category:"mens"
        },
        {
          id: 33,
          name: "Pink T-shirt",
          imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
          price: 25,
          category:"mens"

        },
        {
          id: 34,
          name: "Jean Long Sleeve",
          imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
          price: 40,
          category:"mens"
        },
        {
          id: 35,
          name: "Burgundy T-shirt",
          imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
          price: 25,
          category:"mens"
        },
      ],
    };
    this.state.currentItems=this.state.data
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header  orders={this.state.orders} onDelete={this.deleteOrder} />
        <Cotegories  chooseCategory={this.chooseCategory} />
        <Pagenation
          data={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        
        {/* <Footer /> */}
      </div>
    );
  }
  chooseCategory(category){
    if(category==='all'){
      this.setState({currentItems:this.state.data})
      return
    }
   this.setState({
    currentItems:this.state.data.filter(el=>el.category===category)
   })
  }
  deleteOrder(id) {
    console.log(id);
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });

  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
     
    }
  }
}

export default App;
