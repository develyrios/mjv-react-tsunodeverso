const List = ({id, label, type, name, children}) => {
    
    const users = [
        {
            surname: 'Feitosa',
            age: 24,
            name: 'Bev'
        },
        {
            surname: 'Silva',
            age: 30,
            name: 'Fulano'
        },
    ]

    return(
            <ul>
                {
                    users.map((user, index) => {
                            <li key={index}>{user.surname} - {user.age} - {user.name}</li>
                    })
                }
            </ul>
    )
}

export default List;