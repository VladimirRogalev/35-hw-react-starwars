import React from 'react';


const Friend = ({friendPhoto, pos}) => { // friendPhoto and position
    let styles = 'col-4 p-1';
    if(pos === 7) {
        styles += " bottom-left"
    }
    if(pos === 9) {
        styles += " bottom-right"
    }
    // console.log(props)
    return (
        <img className={styles} src={friendPhoto} alt='friend'/>
    );
};

export default Friend;