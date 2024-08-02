const Filter = ({ value, handleChange }) => (
    <div className="filter">
        Find countries <input value={value} onChange={handleChange}/>
    </div>
)

export default Filter