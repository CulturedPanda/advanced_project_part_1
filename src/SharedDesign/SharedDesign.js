import './SharedDesignStyle.css'

/**
 * The shared design all pages share among them.
 * @param children
 * @returns {JSX.Element}
 */
function SharedDesign({children}) {
    return (
        <div className="background container-fluid vw-100 vh-100">
            {children}
        </div>
    )
}

export default SharedDesign;