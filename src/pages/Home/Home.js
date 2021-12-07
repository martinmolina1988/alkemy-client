import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";
import Balance from "../../components/ABM/Balance/Balance";
import ListRecord from "../../components/ABM/ListRecord/ListRecord";
import OrderBy from "../../components/ABM/OrderBy/OrderBy";

import "./Home.scss";

export default function Home() {
  
  const [del, setDel] = useState(true);

  return (<Container className="home">
  
<Balance del={del} />
<Link className="button" to="/create"><Button color="green">Create a new transaction</Button></Link>
   <OrderBy del={del} setDel={setDel} />
   
  </Container>
    );
}
