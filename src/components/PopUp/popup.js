import React,{Component} from 'react';
import './popup.css';
import Categories from '../Categories/categories';
import ProductList from '../ProductList/productlist';
import { connect } from 'react-redux';

class Popup extends Component{

    state={
        newCategory:'',
        pageData:JSON.parse(localStorage.getItem("Response")).productsPage
    }

    onCrossClick=()=>{
        this.props.history.push('./product')
    }

    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.newCategory.length)
        {
            this.props.history.push('./product')
        }
        //this.props.onCrossClick()
    }

    onInputCategory=(e)=>{
        this.setState({newCategory:e.target.value});
        console.log(e.target.value)
        localStorage.setItem('newCategory',e.target.value)
    }
        // let newCat=this.state.newCategory
        // console.log(newCat)

    onAddClick=()=>{
            var object=JSON.parse(localStorage.getItem('Response'))
            var catList=JSON.parse(localStorage.getItem('Response')).productsPage.categories
            var newCatList=(catList).push(localStorage.getItem('newCategory'))
            console.log(catList)
            console.log(newCatList)
            object.productsPage.categories=catList
            localStorage.setItem('Response',JSON.stringify(object));
            console.log(object.productsPage)
            // object.productsPage.categories.push(newCat)
            // console.log(object.productsPage.categories)
            // localStorage.setItem('Response',JSON.stringify(object));
            // console.log(object.productsPage)
            // this.setState({newCategory:newCat});
            // //this.setState({render:'hi'})
            // window.location.reload();
        }
        
    

    render(){
        return(
            <div>
                <div className="product-page">
             <div className="extra-space">hi</div>
             <div className="pro-container">
                 <div className="pl-con">
                     <div className="pl">
                     <ProductList propsToPass={
                        {
                            productListData:this.state.pageData.products,
                            onClickingCheckbox:this.onChkBoxClick,
                            onDeleteSingleRow:this.onDeleteIconClick
                        }  
                      }/>  
                     </div>
                     <button className="add-btn">ADD NEW PRODUCT</button>
                     <button className="de-se-btn" onClick={(e)=>this.onDeleteSelectedBtnClick(e)}>DELETE SELECTED PRODUCTS</button>
                 </div>
                 <div className="pc-con">
                     <div className="pc">
                         <h2>Product categories</h2>
                         <div className="right-tc">
                             <table className="r-table">
                             <Categories propsToPass={
                                     {
                                        categoriesPageData:this.state.pageData.categories,
                                        onDeleteSingleRow:this.onDeleteIconClick
                                     }
                                 }
                                 
                                 />
                             </table>
                         </div>
                         <button className="category-btn">ADD NEW CATEGORY</button>
                         {/* {this.props.showPopup?<Popup/>:null} */}
                     </div>
                 </div>
             </div>
             <div className="extra-space"></div>
         </div>

            <div className="popup-back">
            <div  className='popup-box'>
                <div className='popup-nav'>
                    <div className='popup-title'>ADD NEW CATEGORY</div>
                    <i class="fas fa-times" onClick={this.onCrossClick}></i>
                </div>
                <form className='popup-form' onSubmit={(e)=>this.onSubmit(e)}>
                    <label>Write Here...</label>
                    <input type='text' onInput={(e)=>this.onInputCategory(e)}></input>
                    <button type='submit' className="popup-btn" onClick={this.onAddClick}>ADD</button>
                </form>
            </div>
            </div>
            </div>
        )
    }



}

const mapDispatchToProps=(dispatch)=>{
    return{
        onCrossClick: ()=>{dispatch({type:'HIDE_POPUP'})}
    }
}

export default connect(null,mapDispatchToProps)(Popup)