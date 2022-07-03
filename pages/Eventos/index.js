import moment from "moment"
import Layout from "../../components/layout";


export default function Eventos() {

    const cards = [
        {
            Recibo: 'Numero do recibo',
            data_inicio: new Date(),
            data_fim: new Date,
        },
        {
            Recibo: 'Numero do recibo',
            data_inicio: new Date(),
            data_fim: new Date,
        },
        {
            Recibo: 'Numero do recibo',
            data_inicio: new Date(),
            data_fim: new Date,
        },
        {
            Recibo: 'Numero do recibo',
            data_inicio: new Date(),
            data_fim: new Date,
        }
    ]

    return (
        <Layout>
            <div className="container-listar-eventos">
                <h1 className="titulo-principal">EFD REINF</h1>

                <div className="content-eventos">
                    <h1 className="titulo-eventos">Eventos enviados</h1>

                    {cards.map((card, index) => {
                        return (
                            <div key={index} className="card-content">
                                <div className="container-num-recibo">

                                    <p>Recibo:{card.Recibo}</p>
                                    <a href="#">ver</a>

                                </div>

                                <div className="container-validade">
                                    <p>validade</p>
                                </div>

                                <div className="container-data--buttons">
                                    <div>
                                        <p>Inicio:{moment(card.data_inicio).format('L')}</p>
                                        <p>Fim:{moment(card.data_fim).format('L')}</p>
                                    </div>
                                    <div>
                                        <button className="button-edit">Editar</button>
                                        <button className="button-excluir">Excluir</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    <div className="container-button-criar-evento"

                        style={{
                            paddingTop: "30px",
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <button>
                            Criar evento
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}