import React from 'react'
import './Slot.scss'

import Arrow from './Arrow.js'
import Piece from './Piece.js'
import { dragOver, drop } from '../Dragger.js'

const createPieces = (numPieces, index) => {
    const num  = numPieces[0] || numPieces[1]
    if(!num) {
        return []
    }
    const team = numPieces[0] ? '0' : '1'

    const pieces = [...Array(num).keys()].map(ind => {
        return <Piece team={team} index={index}/>
    })
    return pieces

}

const Slot = ({ index, section, numPieces, updateLocation}) => {

    let slotCount = 0
    const SlotLayer = (contents) => {
        const name = `slot-layer ${section}`
        const key = `slot-layer-${slotCount}`
        slotCount++;
        return (
            <div className={name} key={key}>
                {contents}
            </div>
        )
    }

    const arrowLayer =  <Arrow section={section} index={index} />
    const indexLayer =  <div>{index}</div>

    const pieceLayer = createPieces(numPieces, index)

    const newDragOver = (e) => {
        dragOver(e, index)
    }

    const newDrop = (e) => {
        drop(e, index, updateLocation)
    }

    return (
        <div className='slot' onDragOver={newDragOver} onDrop={newDrop}>
            {SlotLayer(arrowLayer)}
            {SlotLayer(indexLayer)}
            {SlotLayer(pieceLayer)}
        </div>
    )
}

export default Slot

