import React from "react";

function CommentForm({ onSubmit }) {
  const [body, setBody] = React.useState("");

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({ body: body });

    setBody("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Write your comment"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-outline-success" onClick={handleSubmit}>
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
