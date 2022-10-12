let draggingPiece = null

export const dragStart = (e, piece) => {
    draggingPiece = piece
}

export const dragEnd= () => {
    draggingPiece = null
}

export const dragOver = (event) => {
    event.preventDefault()
}

export const drop = (event, endingIndex, updateLocation) => {
    updateLocation(draggingPiece, endingIndex)
}

