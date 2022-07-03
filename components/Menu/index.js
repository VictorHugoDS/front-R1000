import style from '../../styles/components/menu/style.module.scss';

export default function menu() {

  // a Key (lado esquerdo) é oq irá aparecer no menu
  // o valor (lado direito) é o link

  const itensMenu = {
    Evento_R100: 'Homeeee',
    Home: '',
    Eventos: '',
  }


  return (
    <div className={style.menu}>
      {Object.keys(itensMenu).map((key) => {
        return (
          <li className={style.line} key={key}>
            {/*Alterar Href no futuro*/}
            <a href={`/${key}`} className={style.link}>{key}</a>
          </li>
        )
      })}
    </div>
  )
}
