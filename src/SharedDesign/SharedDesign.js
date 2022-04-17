import './SharedDesignStyle.css'

function SharedDesign( {children} ){
    return (
            <div className="background container-fluid vw-100 vh-100">
                {children}
            </div>
    )
}

export default SharedDesign;