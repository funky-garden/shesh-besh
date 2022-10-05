let dragging = null
let startingIndexDrag = null
let colorIndex = null

export const dragStart = (e, index, colorInd) => {
    dragging = e.target
    startingIndexDrag = index
    colorIndex = colorInd
}

export const dragEnd= () => {
    dragging = null
    startingIndexDrag = null
    colorIndex = null
}

export const dragOver = (event, index ) => {
    event.preventDefault()
}

export const drop = (event, endingIndex, updateLocation) => {
    updateLocation(startingIndexDrag, endingIndex, colorIndex)
}

