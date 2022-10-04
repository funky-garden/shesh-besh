import React from 'react'
import './Slot.scss'

import Arrow from './Arrow.js'


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
    return (
        <div className='slot'>
            {SlotLayer(arrow)}
        </div>
    )
}

export default Slot

