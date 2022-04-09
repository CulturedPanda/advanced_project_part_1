import './SharedDesignStyle.css'

function SharedDesign( {children} ){
    return (
            <div className="background container-fluid vw-100 vh-100">
                <div id="top-triangle" className="gray-triangle"/>
                {children}
            </div>
    )
}

export default SharedDesign;