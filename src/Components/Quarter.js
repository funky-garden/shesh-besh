import React from 'react'
import './Quarter.scss'
import Slot from './Slot.js'

const getSlotIndex = (quarterIndex, slotIndex) => {
    if(quarterIndex < 2) {
        return (6 * quarterIndex ) + ( 5 - slotIndex)
    }
    else {
        return (quarterIndex * 6) + slotIndex
    }
}

const Quarter = ({ index, pieces, updateLocation }) => {
    const section = index < 2 ? 'top' : 'bottom'

    const slots = [...Array(6).keys()].map(i => {
        const slotIndex = getSlotIndex(index, i)
        const whitePieces = pieces[0][slotIndex]
        const blackPieces = pieces[1][slotIndex]
        const key = `slot-${slotIndex}`
        return (
            <Slot
            section={section}
            index={slotIndex}
            numPieces={[whitePieces, blackPieces]}
            updateLocation={updateLocation}
            key={key}
            />
        )
    })

    return (
        <div className='quarter'>
        {slots}
        </div>
    )
}

export default Quarter
