function Todos(props: any) {
    
    return (
        <div className="border border-black max-w-xl mt-2 ml-4 mr-4 p-2">
            <label>
                <input type='checkbox' name="isDone"/>
                {props.task}
            </label>
        </div>
    )
}

export default Todos;