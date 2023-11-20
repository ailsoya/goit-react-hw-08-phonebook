import styles from "../Style.module.css"
import { useSelector, useDispatch } from "react-redux"
import { selectFilter } from "redux/filter/selectors"
import { setFilter } from "redux/filter/slice"

export const Filter = () => {
    const dispatch = useDispatch()
    const value = useSelector(selectFilter)

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