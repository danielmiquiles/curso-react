import React from 'react'
import FamiliaMembro from './FamiliaMembro'
import { cloneElement } from 'react'

export default props => {
    return (
        <div>
            {
                props.children.map((child, i) =>{
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}