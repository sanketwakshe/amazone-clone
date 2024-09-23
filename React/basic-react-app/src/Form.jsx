function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submit");
}
export default function Form(){
    return(
        <form>
            <input placeholder='write something' />
            <button onClick={handleFormSubmit}>submit</button>
        </form>
    );
}