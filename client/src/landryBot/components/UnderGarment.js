import './styles/UnderStyle.css'

export default function UnderGarment({ color, texture, dirty, urlImage }) {
    return <div className="under-area">
        <p >הצבע הדומיננטי: {color}<br />  סוג הבד: {texture} <br /> האם יש כתם? {dirty}</p>
        <div className='newImageArea'>
            <img src={urlImage} alt="new image" />
        </div>
    </div>
}