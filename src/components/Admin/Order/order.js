import React,{Component} from 'react';
import './order.css'

class Order extends Component{

    order=JSON.parse(localStorage.getItem("Response")).dasbhoardPage.orders.map((item,pos)=>{
        return(
                    <tbody key={pos} className="sep-line">
                        <tr className="order-row" >
                            <th scope="row" >
                                <b>{`#${item.orderNo}`}</b>
                            </th>
                            <td><div className={[item.status==='Pending'?'pending':
                            (item.status==='Cancelled'?'cancelled':
                            (item.status==='Moving'?'moving':'deliver'))].join(' ')}></div>{item.status}</td>
                            <td>{item.operators}</td>
                            <td>{item.location}</td>
                            <td>{item.distance}</td>
                            <td>{item.startDate}</td>
                            <td>{item.deliveryDate}</td>
                        </tr>
                    </tbody>
            
        )
    })

    render(){
        return(
            <div>
                <table className="order-table">
                <thead>
                    <tr>
                        <th scope="col">ORDER NO</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">OPERATORS</th>
                        <th scope="col">LOCATION</th>
                        <th scope="col">DISTANCE</th>
                        <th scope="col">START DATE</th>
                        <th scope="col">EST DELIEVERY DUE</th>
                    </tr>
                    </thead>
                    {this.order}
            </table>
            </div>
        )
    }

}

export default Order;