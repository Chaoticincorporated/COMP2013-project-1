export default function NavBar({username}) {
    return (
        <div className="NavBar">
            <p className="NavUser">welcome {username}</p>
            <h1 className="NavTitle">Groceries</h1>
        </div>
    )
}