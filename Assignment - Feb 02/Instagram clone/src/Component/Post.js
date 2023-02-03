import React from 'react';
import './Home.css';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField} from '@material-ui/core';
import "./Post.css";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="post__avatar" src="https://source.unsplash.com/random" alt="User" />
                    </ListItemAvatar>
                    <ListItemText primary="Suresh Rahul" secondary="New York, US" />
                </ListItem>
                <img
                    className="post__image"
                    src="https://cdnb.artstation.com/p/assets/images/images/056/615/205/large/deep-voyage-warm-anime-landscapeiiii.jpg?1669695007"
                    alt="Post pic"
                />
                <h5 className="post__text"><strong>Suresh Rahul: </strong>picture</h5>
                <div className="post__comments">
                   
                </div>
                <form className="post__form">
                    <TextField
                        label="add comment"
                        size="small"
                        variant="outlined"
                        className="post__input"
                        placeholder="add comment"
                    />
                   
                </form>
            </div>
        </div>
    )
}

export default Post
