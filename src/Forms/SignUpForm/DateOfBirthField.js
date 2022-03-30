function DateOfBirthField(){
    return (
        <div>
            <form action="/action_page.php">
                <label htmlFor="birthday" className="form-label">Birthday:</label>
                <br></br>
                <input type="date" id="birthday" name="birthday"></input>
            </form>
        </div>
    )
}

export default DateOfBirthField;