import moment from "moment"
import { Modal, CircularProgress } from "@material-ui/core"
import { useEffect, useState } from "react";
import { api, GetAll } from "../../lib/api";
import Home from "../efd/editar/[id]";
import { useRouter } from 'next/router'

export default function Eventos() {

    const [data, setData] = useState();
    const [cards, setCards] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [detailsCard, setDetailsCard] = useState();
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openEditEvent, setOpenEditEvent] = useState(false);

    const Router = useRouter();

    const loadData = async() =>{
        setLoading(true);
        const vetor = []
        const temp = await GetAll('/contribuinte/')
        setData(temp?.data?.data?.[0])
        const test = (temp?.data?.data?.[0])
        test.forEach((card, ind) => {
            vetor.push({
                data_inicio: card.infoContri.inclusao.inivalid,
                data_fim: card.infoContri.inclusao.fimValid,
                Recibo: card.ideContri.nrInsc,
                id: card.id,
                ...card
            })
        })

        setCards(vetor);
        setLoading(false);
    }

    useEffect(() => loadData, [])

    const handleDelete = (e, card) => {
        setDetailsCard(card);
        setOpenModalDelete(true);
        //setOpenModalDelete(true);

    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleSubmitDelete = async () => {
        setLoading(true);
        console.log(detailsCard)
        await api.delete(`/contribuinte/${detailsCard.id}`).then((res) => console.log(err)).catch((err) => console.log(err))
        setOpenModalDelete(false);
        setLoading(false);
        loadData();
    }

    return (
        <div className="container-listar-eventos">
            <h1 className="titulo-principal">EFD REINF</h1>

            {loading ? <CircularProgress style={{ position: "absolute", left: "50%", top: "50%" }} /> : <div className="content-eventos">
                <h1 className="titulo-eventos">Eventos Enviados</h1>

                {cards?.map((card, index) => {
                    return (
                        <div key={index} className="card-content" id={card.id}>
                            <div className="container-num-recibo">

                                <p>Recibo:{card.Recibo}</p>
                                <a href="" onClick={(e) => {
                                    e.preventDefault();
                                    handleOpenModal();
                                    console.log(card)
                                    setDetailsCard(card);
                                }}>ver</a>

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
                                    <button className="button-edit" onClick={(e) => {
                                        e.preventDefault();
                                        setOpenEditEvent(true);
                                    }}>Editar</button>
                                    <button className="button-excluir" onClick={(e) => handleDelete(e, card)}>Excluir</button>
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
                    <button onClick={(e) => {
                        e.preventDefault();
                        Router.push('/efd/adicionar')
                    }}>
                        Criar evento
                    </button>
                </div>
            </div>}
            {openEditEvent && <Home />}

            {openModalDelete &&
                <Modal
                    open={openModalDelete}
                    onClose={(e) => {
                        setOpenModalDelete(false);
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{
                        minWidth: "40vh",
                        minHeight: "10vh",
                        backgroundColor: "#ffff",
                        borderRadius: "4px",
                        padding: "10px 20px",
                        textAlign: "center",
                    }}>

                        <p style={{ fontWeight: 700 }}>Tem certeza que deseja excluir evento?</p>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",

                        }}>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenModalDelete(false);
                                }}
                                style={{
                                    border: 'none',
                                    backgroundColor: "#EF0A0A",
                                    color: "#fff",
                                    cursor: "pointer",
                                    width: "50px",
                                    height: "25px",
                                    borderRadius: "4px",
                                }}>Não
                            </button>
                            <button
                                onClick={handleSubmitDelete}
                                style={{
                                    border: 'none',
                                    backgroundColor: "#3290FF",
                                    color: "#fff",
                                    cursor: "pointer",
                                    width: "50px",
                                    height: "25px",
                                    borderRadius: "4px",
                                }}>Sim</button>
                        </div>
                    </div>
                </Modal>
            }
            {
                openModal &&
                <Modal open={openModal}
                    onClose={handleCloseModal}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{
                        minWidth: "40vh",
                        minHeight: "30vh",
                        backgroundColor: "#ffff",
                        borderRadius: "4px",
                        padding: "10px 20px",
                        maxWidth: "80vh"
                    }}>

                        <div>
                            
                        {JSON.stringify(detailsCard, null, "\t")}    

                        </div>
                    </div>
                </Modal>
            }
        </div >
    )
}