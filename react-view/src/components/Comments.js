import React, { Component } from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdContentCut } from "react-icons/md";
import CommentApiService from "../apis/CommentApiService";

const styles = {
  root: {
    width: "20%",
    margin: "auto",
    marginTop: 16,
    padding: 16,
    textAlign: "left",
    backgroundColor: "#ffffff",
    borderRadius: 16,
  },
  commentContainer: {
    display: "inline-block",
    marginLeft: 16,
    textAlign: "left",
    verticalAlign: "top",
  },
  contentText: {
    color: "black",
    fontSize: 16,
  },
};
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      user_id: this.props.user_id,
    };
    console.log(this.state.id);
    console.log(this.state.user_id);
  }

  render() {
    return (
      <div
        className="row"
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          height: "50px",
          borderRadius: 20,
          margin: 3,
        }}
      >
        <div className="col-10" style={{ color: "black", fontSize: 16 }}>
          {this.props.content}
        </div>
        <div className="col-2">
          {/* 댓글작성자 본인의 경우 삭제가 가능하도록 */}
          {sessionStorage.getItem("user") === this.props.user_id.toString() ? (
            <MdContentCut
              onClick={() =>
                this.props.deleteComment(this.state.id, this.state.user_id)
              }
            />
          ) : (
            <BsFillChatQuoteFill />
          )}
        </div>
      </div>
    );
  }
}

export default Comments;
