import './TitleAndText.css'

function TitleAndText({title, text} : {title : string, text: string}) {

    return (
        <div className="authenticity">
            <h2>{title}</h2>
            <h4>{text}</h4>
        </div>
        
    )

}

export default TitleAndText;