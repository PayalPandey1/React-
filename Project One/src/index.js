
import ReactDOM from 'react-dom' ;
import React, { Component } from 'react'; 
import JSON from './Components/db.json'
import './Components/one.css'
// Components
import Header from './Components/header'  ;
import NewsList from './Components/news_items' ;


class App extends Component
{
    state = {
        news: JSON,
        filtered : [] 
    }

    getKeyword = (event) => 
    {
        let keyword = event.target.value 
        var filtering = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1 
        }) 
        this.setState( {filtered : filtering}  )
        console.log(filtering) 
    }
  

    render()
    {

        return(
            <div>
                <Header keysk = {this.getKeyword} /> 
                <NewsList news = {this.state.filtered.length ===  0 ? this.state.news : this.state.filtered } />
                {console.log(this.state.news)}
            </div>
        )
   
    }
}

ReactDOM.render( < App/> , document.querySelector('#root')) ;

