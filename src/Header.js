import React from 'react';

class Actions extends React.Component {
constructor(props){
    super(props);
    this.state = {}
  }

 render(){
     return(
       <div className="">
       <input type="text" placeholder="Search..." title="Search by status" value={this.props.value} onChange={this.props.searchHandler}/>
       <button type="button" class="btn btn-default" title="Sort by status">SortBy A&D</button>
       </div>
     );
   }
};

export default Actions;