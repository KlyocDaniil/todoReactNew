import React, {useState} from "react"
import MyButton from "./UI/button/MyButton";
import {Navigate, useNavigate} from "react-router-dom";
const PostItem = (props) =>{

    let dateNow = new Date

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };

    const router = useNavigate()

    return (
        <div className='post'>
            <div className='post_content'>
                <strong>{props.post.id}. {props.post.title}</strong>

                <div>
                    <h4 style={{marginBottom:10, fontWeight:300, fontSize:13}}> {' ' + dateNow.toLocaleString('ru', options)} </h4>
                </div>

                <div>
                    {props.post.body}
                </div>
            </div>

            <div className='post_btns'>
                <MyButton style = {{marginBottom:5}} onClick = {() => props.remove(props.post)} >
                    X
                </MyButton>

                <MyButton onClick={() => router(`/posts/${props.post.id}`) }>
                    Открыть
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
