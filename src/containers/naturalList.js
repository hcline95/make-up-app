import React, { Component } from 'react';
import { connect } from 'react-redux';


class NaturalMakeUpList extends Component {

 renderNaturalMakeUp (makeUpData) {
   let newMakeUpData = Object.values(makeUpData);

   let natural = makeUpData.filter(m => m.tag_list.includes("Natural"))
 console.log("natural", natural)
     return (

                natural.map(m => (
                    <div className="col-3 makeup-item text-center" key={m.id}>
                      <img src={m.image_link} alt="" width="140" height="auto" className="rounded mx-auto d-block"></img>
                      <div className="item-name">{m.name}</div>
                      <div className="item-brand">{m.brand}</div>
                      <div className="price">${m.price}</div>
                      <button type="button" class="btn btn-outline-info"><a href={m.product_link} className="text-info">Buy it Now</a></button>
                      </div>

                ))



        )
      }

render() {
    return (
      <div id="main-view" className="container">
      <h1 className="text-left">Natural Products</h1>
        <hr></hr>
        <div className="row d-flex ">



          {this.props.makeUp.map(this.renderNaturalMakeUp)}


        </div>
        </div>

    );
  }
}

function mapStateToProps({ makeUp }) {
  console.log('makeup', {makeUp})
  return { makeUp };
}

export default connect(mapStateToProps)(NaturalMakeUpList);
