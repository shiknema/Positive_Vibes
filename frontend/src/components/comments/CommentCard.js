import React from "react";

function CommentCard({ comment, onDeleteClick }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <p>{comment.body}</p>
        <button className="btn btn-outline-danger" onClick={onDeleteClick}>
          Delete Comment
        </button>
      </div>
    </div>
  );
}

export default CommentCard;
