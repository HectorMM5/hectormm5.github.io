import './NavButton.css'

function NavButton({ name }: { name: string }) {

    return (
        <div className="navButton">
            {name}
        </div>
        
    )

}

export default NavButton;
