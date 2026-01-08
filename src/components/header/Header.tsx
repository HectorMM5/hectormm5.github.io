import './Header.css'

function header({ title, subtitle } : { title : string, subtitle : string }) {

    return (
        <div className="headerBlock">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
        
    )

}

export default header;