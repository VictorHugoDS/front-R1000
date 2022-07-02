
import Menu from '../Menu';
import Rodape from '../rodape';

export default function menu({children}) {

    return (
        <>
            <Menu/>
                {children}
            <Rodape/>
        </>
    )
  }
  