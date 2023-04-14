import React, {useEffect, useState} from "react";
import {HeaderPage, TableUsers} from '../../components/Admin';
import {Loader, Table} from 'semantic-ui-react';
import {useUser} from '../../hooks';
import {ModalBasic} from '../../components/Common';


export function UserAdmin() {
    //hooks
    const {loading, users, getUsers} = useUser();
    //estados
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    //funcion para abrir y cerra el modal
    //si prev es false me da true; si prev es true me setea a false
    const openCloseModal = () => setShowModal((prev) => !prev);

    return (
        ////si loading es true, renderizar..
        <>
            <HeaderPage title='Usuarios' btnTitle="Nuevo Usuario" btnClick={openCloseModal}/>

            {loading ?  (
                <Loader active inline="centered">
                    Cargando...
                </Loader>
            ) : (
                //termino de cargar
                <TableUsers users={users} />

            )}

            <ModalBasic show={showModal} title="Crear usuario" children={<h2>Content...</h2>} onClose={openCloseModal}/>
        </>
    );
}