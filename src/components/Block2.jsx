
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../redux/slices/todo';

export default function Block2() {
    const state = useSelector(state => state.todo)
    const dispatch = useDispatch()
    console.log('RENDER BLOCK 2');


    const handleRemove = (id) => {
        dispatch({type: 'todo/remove', payload: id})
    }
    return (
        <div>Block 2
            {
                state.loading && <h1>Loading ...</h1>
            }

{
                state.error && <h1>{state.error?.detail ?? 'Произошла ошибка!'}</h1>
            }
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>COMPLETE</th>
                    </tr>
                </thead>
                {
                    state.data.map(item => (
                        <tr onClick={() => handleRemove(item.id)}>
                            <th>{item.id}</th>
                            <th>{item.title}</th>
                            <th>{item.price}</th>
                            <th><input type="checkbox" checked={item.is_complete} id="" /></th>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}
