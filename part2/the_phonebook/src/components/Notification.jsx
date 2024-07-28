const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className={`message ${message.error && 'error'}`}>
        {message.message}
        </div>
    )
}


export default Notification