import './ButtonWrapper.css'

function ButtonWrapper({ children }: { children : React.ReactNode }) {

    return (
        <div className="ButtonWrapper">{children}</div>
    )

}

export default ButtonWrapper;