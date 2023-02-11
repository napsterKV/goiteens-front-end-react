import {useState, useRef, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { myContext } from '../App';
import style from './Card.module.css'
function Card({ img, model, text , id }) {
  const contextValue = useContext(myContext);

  const [onHover, setOnHover] = useState(false);
  const textWrap = useRef()
  const textInner = useRef()
  const navigate = useNavigate();
  useEffect(() => {
      const heigth = textInner.current.getBoundingClientRect().height
      if(onHover){
      textWrap.current.style.height = `${heigth}px`
  }else{
      textWrap.current.style.height = `56px`
  }
  }, [onHover]);

  return (
    <>
    <div onClick={() => {
     navigate("/product/" + id, { replace: true });
    }} className={style.carItemWrap}>
      <div className={style.CardItem} onMouseOver={(event) =>{setOnHover(true)}} onMouseLeave={(event) =>{setOnHover(false)}} >
          <img src={img} alt="model of car" className={style.carImg} />
          <div className={style.carDesription}>
          <h2 className={style.carModel} >{model}</h2>
          <div ref={textWrap} className={style.carTextWrap}>
              <p ref={textInner} className={style.carText}>{text}</p>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}
export default Card