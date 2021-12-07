import React, { useEffect, useState } from 'react'
import EditRecord from './Edit/EditRecord'
import { Container, Icon } from 'semantic-ui-react';
import '../../pages/Auth/Auth.scss';
import { Link, useParams } from "react-router-dom"
import { getRecord } from '../../api/record';
import CreateRecord from './Edit/CreateRecord';

export default function Create() {
  const [form, setForm] = useState({

  })
  const { id_record } = useParams();
  useEffect(async () => {
    if (id_record) {
      await getRecord(id_record).then(response => {
        var today = new Date(response.data[0].date);
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
    
        today = yyyy + '-' + mm + '-' + dd;

        setForm({
          concept: response.data[0].concept,
          amount: response.data[0].amount,
          date: today,
          type: response.data[0].type,
          category: response.data[0].category,
        })
      })

    }
  }, [])

  


  return (<>
    <div className="margin"></div>
    <Container fluid className="auth">

      <Link className="arrow" to="/"><button><Icon name="arrow circle left" size="big"/></button></Link>
      <h2>Back to home</h2>
      <div className="container-form">
        {id_record ? (
          Object.keys(form).length !== 0 &&
          <EditRecord form={form} id_record={id_record} />

        ) : (
          <CreateRecord />
        )
        }


      </div>
    </Container>
  </>)
}
