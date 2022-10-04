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


    let whitePieces = [...Array(numPieces[0]).keys()].map(_ => {
        return <Piece click={() => click(index, 0)} color='white'/>
    })

    let blackPieces = [...Array(numPieces[1]).keys()].map(_ => {
        return <Piece click={() => click(index, 1)} color='black'/>
    })

    const num = (
        <div>{index}</div>
    )

    return (
        <div className='slot'>
            {SlotLayer(arrow)}
            {SlotLayer(num)}
            {SlotLayer([...whitePieces, ...blackPieces])}
        </div>
    )
}

export default Slot

