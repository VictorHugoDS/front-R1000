import style from '../../styles/components/menu/style.module.scss';
import { useRouter } from 'next/router'

export default function menu() {

  // o valor na posição 0 é o que irá aparecer no menu
  // o valor na posição 1 é o link que ele irá seguir ao ser clicado
  const router = useRouter();

  const itensMenu = [
    ['Home','/login'],
    ['Evento - R1000', '/eventos'],
    ['Adicionar', '/efd/adicionar'],
  ]

  return (
    <div className={style.menu}>
      {itensMenu.map((value) => {
        return (
          <li className={style.line} key={value[0]}>
            <button
              onClick={() => { router.push(value[1]) }}
              className={style.link}>
              {value[0]}
            </button>
          </li>
        )
      })}
    </div>
  )
}

