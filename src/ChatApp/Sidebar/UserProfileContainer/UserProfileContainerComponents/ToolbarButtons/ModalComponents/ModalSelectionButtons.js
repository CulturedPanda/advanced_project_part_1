function ModalSelectionButtons({props}){
    return(
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1"
                   autoComplete="off" value="1" onChange={()=>props.set("1")}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio1">Nickname</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2"
                   autoComplete="off" defaultChecked={true}
                   value="2" onChange={()=>props.set("2")}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio2">Username</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3"
                   autoComplete="off" value="3" onChange={()=>props.set("3")}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio3">Email</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio4"
                   autoComplete="off" value="4" onChange={()=>props.set("4")}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio4">Phone number</label>
        </div>
    )
}

export default ModalSelectionButtons;