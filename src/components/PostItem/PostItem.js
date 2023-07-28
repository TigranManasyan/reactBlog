import "./PostItem.css";

function PostItem({post, checkReaded}) {
    
    return (
        <div className={ (post.isReaded) ? 'post card mb-2 is-readed' : 'post card mb-2'} >
            <div className="card-header">
                <h3>{post.title}</h3>  
            </div>
            <div className="card-body">
                <p className="card-text">{post.body}</p>
            </div>
            <div className="card-footer">
                <button onClick={() => {
                    checkReaded(post.id);
                }} className="btn btn-primary">Readed</button>
            </div>
        </div>
    );
}

export default PostItem;
