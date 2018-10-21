import React from 'react';
import axios from 'axios';
import {Card, Docs} from './CardView';
import Actions from './Header';

class FullCardView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            value: ''
        }
        this.searchHandler = this.searchHandler.bind(this);
    }
        componentDidMount(){
            setInterval(() => {
            axios.get("https://api.myjson.com/bins/85j00")
              .then((response) => {
                    //const res = response.data.reduce((acc, x) => [...acc, Object.values(x).map((y, i) => y)], []);
                    console.log(response);
                    this.setState({
                        isLoaded: true,
                        items: response.data
                    })        
                 })
             },10000);
            }
            
            searchHandler(e){
                console.log(e.target.value);
                this.setState({
                  value: e.target.value
                })
              }
                 
          render(){
            let filterName = this.state.items.filter(
                (val) => {
                    return val.status.indexOf(this.state.value) !== -1;
                }
            );
           
            if(!this.state.isLoaded){
                return <div className="loading">Loading...</div>
            }
            else {
            return(
                <div className="wrapper">
                <header className="App-header">
                    <p>Stride.ai Dashboard</p>
                    <Actions 
                        searchHandler={this.searchHandler}
                        value={this.value}    
                        />
                     </header>
                    <div className="cards-wrapper">
                        {filterName.map(item => (
                            <Card data={item} key={item.id}/>
                        ))}
                        </div>
                </div>
            )
          }
        }
    }

export default FullCardView;