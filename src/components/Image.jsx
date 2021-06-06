import React from "react";

const Image = (props) => {
    return (
        <img width={props.w} height={props.h} src={props.source} alt="house"/>
    )
};
export default Image;