import React, { useEffect, useState } from 'react'
import { deleteRecord, getRecords, orderBy } from '../../../api/record'
import { map } from "lodash";
import "./ListRecord.scss";
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
export default function ListRecord(props) {

    const { del, setDel, option, type, category } = props;
    const [records, setRecords] = useState({})
    useEffect(() => {
        if (option === "last") {

            getRecords().then(response => {
                setRecords(response?.data)
            })
        } else {
            if (option === "category") {
                orderBy(option,category).then(res=>{
                    setRecords(res?.data);
                })
                
            } else if (option === "type") {
                orderBy(option,type).then(res=>{
                    setRecords(res?.data);
                })
            }
        }



    }, [del,category,type,option])

    return (
        <div className="list-record">

            <table>
                <tr>
                    <th>Concept</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>

                {
                    map(records, (record, index) => (
                        <Records setDel={setDel} del={del} index={index} record={record} />
                    ))
                }
            </table>
        </div>
    )
}







function Records(props) {


    const { record, index, setDel, del } = props;
    const [classn, setClassn] = useState("");




    useEffect(() => {
        if (index % 2 == 0) {
            setClassn("gray");
        } else {
            setClassn("white");

        }
    }, [])
    const Delete = (id_record) => {
        deleteRecord(id_record)
        setDel(!del)
    }
    return (


        <tr className={classn}>
            <td>{record.concept}</td>
            <td>{record.amount}</td>
            <td>{record.date.slice(0, 10)}</td>
            <td>{record.type}</td>
            <td>{record.category}</td>
            <Link to={`/create/${record.id_record}`}>
                <td className="click"><Icon name="edit" /></td>
            </Link>
            <td onClick={() => Delete(record.id_record)} className="click"><Icon name="trash" /></td>
        </tr>

    );
}