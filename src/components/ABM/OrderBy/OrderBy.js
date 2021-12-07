import React, { useEffect, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { getAllConcepts, orderBy } from '../../../api/record'
import { allCategories, Categories } from '../../../utils/Categories';
import ListRecord from '../ListRecord/ListRecord'
import { map } from "lodash"
import "./OrderBy.scss";

export default function OrderBy(props) {
    const { del, setDel } = props;
    const [concepts, setConcepts] = useState([{}])
    const [option, setOption] = useState('');
    const [type, setType] = useState("")
    const [category, setCategory] = useState("")
    useEffect(() => {
        getAllConcepts().then(res => {
            setConcepts(res?.data);
        })


    }, [type, option])

    const onChangeType = (e) => {
        setOption(e.target.value);
    }

    const onChangeTypes = (e) => {
        setType(e.target.value);
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    }

    const allCat = allCategories(Categories)

    return (
        <div className="orderby">
            <h2>Order by</h2>
            <div name="type"
                onChange={(e) => { onChangeType(e) }}
            >
                <input type="radio" value="category" name="type" /> Category
                <input type="radio" value="type" name="type" /> Type 
                <input type="radio" value="last" name="type" /> Last 10 
            </div>

            {option === "category" && (

                <Form>
                    <Form.Field control='select'
                        onChange={(e) => onChangeCategory(e)}>
                        <option value="">Category</option>
                        {
                            map(allCat, (cat, index) => (

                                <option key={index} value={cat}>{cat}</option>

                            ))}

                    </Form.Field></Form>
            )}
            {option === "type" && (

                <Form >
                    <Form.Field  control='select'
                        onChange={(e) => onChangeTypes(e)}>
                        <option value="">Type</option>
                        <option  value="expense">expense</option>
                        <option  value="income">income</option>


                    </Form.Field></Form>
            )}
            <ListRecord del={del} setDel={setDel} type={type} category={category} option={option} />
        </div >
    )
}
