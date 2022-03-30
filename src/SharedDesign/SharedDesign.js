import './SharedDesignStyle.css'

function SharedDesign( {children} ){
    return (
            <div class="background">
                {children}
            </div>
    )
}

export default SharedDesign;