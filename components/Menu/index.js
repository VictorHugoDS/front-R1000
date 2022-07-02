import style from '../../styles/components/menu/style.module.scss';

export default function menu() {

  const itensMenu = {
    Home:'Homeeee',
    News:'News',
    Contact:'Contact',
    About:'About'
  }


    return (
    <div className={style.menu}>
        {Object.keys(itensMenu).map((key)=>{
          return (
            <li className={style.line} key={key}>
              <a href={`/#`} className={style.link}>{key}</a>
            </li>
          )
        })}
      </div>
    )
  }
  