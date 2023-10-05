"use client"
import { useState } from 'react'
import Link from 'next/link'
import styles from './finances.module.css'
import { Transaction, ListTransactions } from '@/models/Transacao'

import { FaPen, FaTrash } from 'react-icons/fa'
import Cards from '../components/cards/Cards'
import ListCard from '../components/listCard/ListCard'
import ListCardDespesa from '../components/listCardDespesa/ListCardDespesa'
import DashButton from '../components/dashButton/DashButton'
import GlobalList from '../components/globalList/GlobalList'
const listTransaction = new ListTransactions()

function Finances() {
    // Inputs
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')

    // Edição
    const [flag, setFlag] = useState(0)
    const [editButton, setEditButton] = useState(false)
    
    //Instâncias

    //Dados da Class
    const [list, setList] = useState(listTransaction.getAllTransactions())
    const [found, setFound] = useState(listTransaction.founds)
    const [recepie, setRecepie] = useState(listTransaction.recepies)
    const [despecie, setDespecies] = useState(listTransaction.despecies)

    //Funções
    const addRecepie = () => {
        //console.log('Adicionou a receita');
        const transaction = new Transaction(description, value, "Receita")
        listTransaction.add(transaction)

        updateValues()

        setDescription('')
        setValue('')
    }
    
    const addDespecie = () => {
        //console.log('Adicionou a despesa');
        const transaction = new Transaction(description, value, "Despesa")
        listTransaction.add(transaction)
        
        updateValues()

        setDescription('')
        setValue('')
    }

    const updateValues = () => {
        setList(listTransaction.getAllTransactions())
        setFound(listTransaction.founds)
        setDespecies(listTransaction.despecies)
        setRecepie(listTransaction.recepies)
    }

    const exclude = (id) => {
        const transaction = listTransaction.getAllTransactions()

        if(transaction) {
            listTransaction.excludeTransaction(id)
            updateValues()
        }
    }

    const update = () => {
        listTransaction.editTransaction(flag, description, value);

        setDescription('');
        setValue('');

        updateValues();
        setEditButton(false)
        setFlag(0)
    }

    const edit = (id) => {
        const transaction = listTransaction.getTransactionById(id);

        if(transaction) {
            setDescription(transaction.description)
            setValue(transaction.value)

            setFlag(id)
            setEditButton(true)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <p className={styles.welcome}>Olá, PabloCouto 👾🤖</p>
                    <p className={styles.useremail}>bitocouto73@gmail.com</p>
                    <Link href={'/'}>Home</Link>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.mainheader}>
                    <p className={styles.title}>Dashboard</p>
                    <div className={styles.transaction}>
                        <div className={styles.description}>
                            <input
                                className={styles.inputdescription}
                                value={description}
                                type="text"
                                name='description'
                                placeholder='Descrição'
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input 
                                className={styles.inputdescription} 
                                value={value} 
                                type="number" 
                                name='description' 
                                placeholder='Valor (R$)' 
                                onChange={(e) => setValue(e.target.value)} />
                        </div>
                        <div className={styles.type}>
                            {
                                editButton ? (
                                    <DashButton title={'Atualizar'} color={'#d4d9de'} func={update}/>
                                ) : (
                                    <>
                                        <DashButton title={'Receita'} color={'#9fe0b1'} func={addRecepie}/>
                                        <DashButton title={'Despesa'} color={'#e09f9f'} func={addDespecie}/>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.infos}>
                    <Cards title={'Saldo'} value={found} color={'#9fc7e0'}/>
                    <Cards title={'Receitas'} value={recepie} color={'#9fe0b1'}/>
                    <Cards title={'Despesas'} value={despecie} color={'#e09f9f'}/>
                </div>

                <div className={styles.registros}>
                    <GlobalList list={listTransaction.transactions} edit={edit} exclude={exclude}/>
                </div>
            </div>
        </>
    )
}

export default Finances