let dragging = null
let startingIndexDrag = null
let colorIndex = null

export const dragStart = (e, index, colorInd) => {
    console.log('starting drag from index ', index)
    dragging = e.target
    startingIndexDrag = index
    colorIndex = colorInd
}

export const dragEnd= () => {
    console.log('ending drag')
    dragging = null
    startingIndexDrag = null
    colorIndex = null
}

export const dragOver = (event, index ) => {
    event.preventDefault()
    if(dragging) {
        console.log(`item from ${startingIndexDrag} over ${index}`)
    }
}

export const drop = (event, endingIndex, updateLocation) => {
    console.log(updateLocation)
    updateLocation(startingIndexDrag, endingIndex, colorIndex)
}

