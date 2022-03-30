import './SharedDesignStyle.css'

function SharedDesign( {children} ){
    return (
            <div className="background">
                {children}
            </div>
    )
}

export default SharedDesign;