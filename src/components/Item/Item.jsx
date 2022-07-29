import PropTypes from "prop-types"
import s from "./Item.module.css"
export const Item = ({small, handlerModal, large}) => {
    return <li className={s.galleryItem}>
  <img className={s.image} src={small} alt="pictur" onClick={()=> handlerModal(large)}/>
</li>
}

Item.propTypes = {
    small: PropTypes.string.isRequired,
    handlerModal: PropTypes.func,
    large: PropTypes.string.isRequired
}