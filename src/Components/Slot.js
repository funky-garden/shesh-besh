import React from 'react'
import './Slot.scss'

import Arrow from './Arrow.js'
import Piece from './Piece.js'


const Slot = ({ index, section, numPieces, click }) => {

    const SlotLayer = (contents) => {
        const name = `slot-layer ${section}`
        return (
            <div className={name}>
                {contents}
            </div>
        )
    }


    const arrow =  <Arrow section={section} index={index} />

    const pieces = [...Array(numPieces).keys()].map(_ => {
        return <Piece click={click}/>
    })

    const num = (
        <div>{index}</div>
    )

    return (
        <div className='slot'>
            {SlotLayer(arrow)}
            {SlotLayer(num)}
            {SlotLayer(pieces)}
        </div>
    )
}

export default Slot

