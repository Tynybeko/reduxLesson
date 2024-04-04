
import React from 'react'
import { useSelector } from 'react-redux';

export default function Block1() {
    const state = useSelector(state => {
        const {mod} = state
        return mod
    })
    console.log('RENDER BLOCK 1');
    console.log(state);
    return (
        <div>Block1</div>
    )
}
