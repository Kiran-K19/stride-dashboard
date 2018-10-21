import React from 'react';
import axios from 'axios';
import {Card, Docs} from './CardView';
import FullCardView from './FullCardView';

class Documents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        axios.get("https://api.myjson.com/bins/85j00")
          .then((response) => {
                this.setState({
                    items: response.data
                })        
             })
        }
    render(){
        let res =  this.state.items.reduce(function(acc,cur){
            return acc.concat(cur.documents)
        },[])
        return(
            <div className="cards-wrapper">
            {res.map(item => (
                <Docs docsList={item} key={item.id}/>
              ))}
            </div>
        );
    }
}

export default Documents;