import React from 'react'
import './Slot.scss'

import Arrow from './Arrow.js'
import Piece from './Piece.js'
import { dragOver, drop } from '../Dragger.js'

const Slot = ({ index, section, numPieces, click, updateLocation}) => {

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


    const arrow =  <Arrow section={section} index={index} />


    let whitePieces = [...Array(numPieces[0]).keys()].map(_ => {
        return <Piece click={() => click(index, 0)} color='white' index={index} />
    })

    let blackPieces = [...Array(numPieces[1]).keys()].map(_ => {
        return <Piece click={() => click(index, 1)} color='black' index={index} />
    })

    const num = (
        <div>{index}</div>
    )

    const newDragOver = (e) => {
        dragOver(e, index)
    }

    const newDrop = (e) => {
        drop(e, index, updateLocation)
    }

    return (
        <div className='slot' onDragOver={newDragOver} onDrop={newDrop}>
            {SlotLayer(arrow)}
            {SlotLayer(num)}
            {SlotLayer([...whitePieces, ...blackPieces])}
        </div>
    )
}

export default Slot

