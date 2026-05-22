function ListGroup() {
    let items = ["Integra", "Alucard", "Seras", "Pip"];

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className="list-group-item" key={item} onClick={() => console.log(index, item)}>{item}</li>
                ))}
            </ul>
        </>
    );
};

export default ListGroup;