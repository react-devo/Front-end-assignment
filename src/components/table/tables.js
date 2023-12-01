import React from "react"
import './tableData.css'

const TableShowing = () => {
    const list = [
        { name: '1', id: 1 },
        { name: '2', id: 2 },
        { name: '3', id: 3 },
        { name: '4', id: 4 },
        { name: 0, id: 5 },
        { name: '6', id: 6 },
        { name: '7', id: 7 },
        { name: '8', id: 8 },
        { name: '9', id: 9 },
    ]

    return (
        <div className="container">
            <div className="grid-container">
                {list.map(({ id, name }) => {
                    return (
                        name?<div id={id} className="tr__container">{name}</div>
                    :  <span >{name}</span>
                    )
                })}
            </div>

        </div>
    )
}

export default TableShowing;