import React from 'react'
import './Slot.scss'

import Arrow from './Arrow.js'
import Piece from './Piece.js'


const Slot = ({ section, index }) => {

    const SlotLayer = (contents) => {
        const name = `slot-layer ${section}`
        return (
            <div className={name}>
                {contents}
            </div>
        )
    }


    const arrow =  <Arrow section={section} index={index} />
    const piece =  <Piece />
    return (
        <div className='slot'>
            {SlotLayer(arrow)}
            {SlotLayer([piece, piece, piece])}
        </div>
    )
}

export default Slot

