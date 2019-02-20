import React from 'react';

const NewsItem = (props) => {
    
    //console.log(props)
    
    return(
        <div>
            <div>
                <h4> {props.item.title} </h4>
                <div>
                    <h4> {props.item.feed}  </h4>
                </div>
            </div>
        </div>
    )
}

export default NewsItem 


/*<div>
<h4> {item.title} </h4>
<div>
    <h4> {item.feed}  </h4>
</div>
</div>
*/