import React from "react";
import "./Styles.css";
import "./barbell.jpg";
import "./barbell2.jpg";

function Products(props){ console.log(props)
    return(
        <div className="Productframe">
            <a href="lol">
            <img  className="Productframe_pic" src={props.img} ></img>
            </a>
            <a className="Productframe_Name" href="lol">Shtanga {props.lift}</a>
            <p className="Product_text">Bar Weight:{props.text}</p>
            <p className="Product_text">Maximum Weight:{props.text2}</p>
            <p className="Product_text">Price:{props.text3}</p>
        </div>
    )
}
export default Products