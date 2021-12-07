import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { insertRecord } from "../../../api/record";
import { useHistory } from "react-router";
import { Categories } from "../../../utils/Categories";
import { map } from "lodash"
import "./Edit.scss";

export default function CreateRecord() {
    const history = useHistory();
    const [typeChange, setTypeChange] = useState("")
    const onChange = (e) => {
        setTypeChange(e.target.value);
    }
    const formik = useFormik({
        initialValues: initialValues(),

        validationSchema: Yup.object({
            concept: Yup.string().required("Concept is required"),

            amount: Yup.string()
                .required("Amunt is required"),
            date: Yup.string()
                .required("Date is required"),
            type: Yup.string()
                .required("Type is required"),
            category: Yup.string()
                .required("Category is required")
        }),
        onSubmit: async (formData) => {

                try {
                insertRecord(formData).then(response => {
                })
                history.push("/");
            } catch (error) {
                console.log(error);
            }
        },
    });


    return (
        <div className="create">     <h2 className="register-form-title">
            Enter a new operation
        </h2>
            <Form className="register-form" onSubmit={formik.handleSubmit}>
                <Form.Input
                    type="text"
                    placeholder="Concept"
                    name="concept"
                    value={formik.values.concept}
                    onChange={formik.handleChange}
                    error={formik.errors.concept && true}
                />

                <Form.Input
                    type="text"
                    placeholder="Amount"
                    name="amount"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    error={formik.errors.amount && true}
                />
                <Form.Input
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    error={formik.errors.date && true}
                />

                <div name="type"
                    value={formik.values.type}
                    onChange={(e) => { formik.handleChange(e); onChange(e) }}
                >
                    <input type="radio" value="income" name="type" /> Income
                    <input type="radio" value="expense" name="type" /> Expense
                </div>
                {
                    typeChange === "income" && (
                        <Form.Field control='select'
                            name="category"

                            value={formik.values.category}
                            onChange={formik.handleChange}
                            error={formik.errors.category && true}
                        >

                            <option value="">Income</option>
                            {
                                map(Categories.income, (cat, index) => (

                                    <option key={index} value={cat}>{cat}</option>

                                ))
                            }
                        </Form.Field>

                    )}

                {

                    typeChange === "expense" && (
                        <Form.Field control='select'
                            name="category"

                            value={formik.values.category}
                            onChange={formik.handleChange}
                            error={formik.errors.category && true}
                        >

                            <option value="">Expense</option>
                            {
                                map(Categories.expenses, (cat, index) => (

                                    <option key={index} value={cat}>{cat}</option>

                                ))
                            }
                        </Form.Field>

                    )

                }
                <Button type="submit" className="btn-submit">
                    Create
                </Button>
            </Form></div>
    );
}
function initialValues(form) {


    return {
        concept: "",
        amount: "",
        date: "",
        category: "",
        type: ""
    }


}

