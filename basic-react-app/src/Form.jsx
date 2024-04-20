function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form (){
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="type message"/>
            <button >Submit</button>
        </form>
    )
}