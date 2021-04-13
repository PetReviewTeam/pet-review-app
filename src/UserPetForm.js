const UserPetForm = () => {
    return (
        <>
            <form action="submit" className="petEntry">
                <label htmlFor="petName" className="sr-only">What is your pet's name?</label>
                <input type="text" id="petName" name="petName" maxLength="15"/>

                <label htmlFor="petAge" className="sr-only">How old is your pet?</label>
                <input type="text" id="petAge" name="petAge" maxLength="3"/>

                <label htmlFor="petSpecies" className="sr-only">What is your Pet's species?</label>
                <input type="text" id="petSpecies" name="petSpecies" maxLength="15"/>

                <label htmlFor="petLikes" className="sr-only">What does your pet like?</label>
                <input type="text" id="petLikes" name="petLikes" maxLength="20"/>

                <label htmlFor="petDislikes" className="sr-only">What does your pet not like?</label>
                <input type="text" id="petDislikes" name="petDislikes" maxLength="20"/>
                
                <label htmlFor="petPersonality" className="sr-only">What is your pet's personality like?</label>
                <input type="text" id="petPersonality" name="petPersonality" maxLength="30"/>

                <label htmlFor="petImage" className="sr-only">Enter the url for your pet photo!</label>
                <input type="text" id="petImage" name="petImage"/>

                <button>Submit your pet!</button>

            </form>
        </>
    )
}


export default UserPetForm;