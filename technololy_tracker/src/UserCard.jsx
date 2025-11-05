function UserCard({ name, role, avatarUrl, isOnline })
{
    return (
        <div className="UserCard">
            <div className="avatar-section">
                <img src={avatarUrl} alt={`avatar ${name}`} />
            </div>
            <div>
                <p>Статус: {isOnline ? "Онлайн" : "Оффлайн"}</p>
            </div>
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    )
}

export default UserCard;