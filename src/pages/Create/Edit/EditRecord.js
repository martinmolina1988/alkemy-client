import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateRecord } from "../../../api/record";
import { Categories } from "../../../utils/Categories";
import { map } from "lodash"
import { useHistory } from "react-router";
import "./Edit.scss";

export default function Edit(props) {
    const { form, id_record } = props;
    const history = useHistory();

    const formik = useFormik({
        initialValues: form,
        validationSchema: Yup.object({
            concept: Yup.string().required("Concept is required"),

            amount: Yup.string()
                .required("Amount is required"),
            date: Yup.string()
                .required("Date is required"),
            category: Yup.string()
                .required("category is required")
        }),
        onSubmit: async (formData) => {
            try {
                formData.id_record = id_record;
                updateRecord(formData).then(response => {
                })
                history.push("/");
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <div className="create">     <h2 className="register-form-title">
            Edit operation
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

                {
                    form?.type === "income" && (
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

                    form?.type === "expense" && (
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
                    Update
                </Button>
            </Form></div>
    );
}
