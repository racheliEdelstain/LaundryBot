import './styles/UnderStyle.css'

export default function UnderPile({isPile,urlImage}) {
    return <div className="under-area">
        <p>זוהתה ערימה? </p>
        <p>{isPile}</p>
        <div className='newImageArea'>

            <img src={urlImage} alt="new image"></img>
        </div>
    </div>
}