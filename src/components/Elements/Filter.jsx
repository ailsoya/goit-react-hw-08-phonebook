import styles from "../Style.module.css"
import { useSelector, useDispatch } from "react-redux"
import { selectFilter } from "redux/contacts/selectors"
import { setFilter } from "redux/filterSlice"

export const Filter = () => {
    const dispatch = useDispatch()
    const value = useSelector(selectFilter).value

    const handleChange = evt => {
        const filter = evt.target.value
        dispatch(setFilter(filter))
    }
    
    return (
        <label className={styles.Filter}>
            Find contacts by name
            <input onChange={evt => handleChange(evt)} type="text" name="filter" value={value} />
        </label>
    )
}