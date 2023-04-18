function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    scr={props.autore.avatarUrl}
                    alt={props.autore.name} />
                    <div className="UserInfo-name">
                        {props.autore.name}
                    </div>
            </div>
            <div className="Comment-text">
                {props.testo}
            </div>
        </div>
    );
}

export default Comment;