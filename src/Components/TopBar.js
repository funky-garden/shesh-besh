import './TopBar.scss'

const TurnIndicator = ({ turn }) => {
    const text = `Current Turn: Player ${turn} `
    return <div className='turnIndicator'> { text } </div>
}
const Dice = () => {

    return <div className='diceContainer'>Dice PlaceHolder</div>
}
export const TopBar = ({ turn }) => {
    console.log('Top Bar Turn :', turn)

    return (
        <div className='topbar'>
            <TurnIndicator turn={turn}/>
            <Dice />
        </div>
    )
}

export default TopBar

