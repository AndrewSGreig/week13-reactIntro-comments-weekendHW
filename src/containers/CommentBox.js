import React, { Component } from "react";
import CommentList from "../components/CommentList";

class CommentBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      comments:[
        {
          id:1,
          author: "Niall",
          text:"I love Comments more every day"
        },
        {
          id:2,
          author: "Craig",
          text:"Comment Box is awesome!"
        }
      ]
    };
  }

  render(){
    return (
      <div className="comment-box">
      <h2>Comments</h2>
      <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default CommentBox;
