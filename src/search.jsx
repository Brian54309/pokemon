
const Search =()=>{
    formInput="",
    setFormInput,
    handleSearch
    return(
        <div>
            <input
            onChange={(e)=>{
                setFormInput(
                    formInput=e.target.value
                    
                )
            }}>
            </input>
        </div>
    );
}