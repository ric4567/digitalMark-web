import { Link } from "gatsby-link";
import React, { useState, useEffect } from "react";
import api from "../../api";
import Layout from "../../components/layout";
import "./styles.css";

const ListClient = () => {
  const [data, setData] = useState<ClientModel[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      var response = await api.get(`/api/client`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Link to="/SaveClient">
        <button>Novo cliente</button>
      </Link>
      <table>
        <tr>
          <th>Nome</th>
          <th>Tecnologia</th>
          <th>Projeto</th>
        </tr>
        {data.map((c) => (
          <tr>
            <td>{c.name}</td>
            <td>{c.technology}</td>
            <td>{c.projectName}</td>
          </tr>
        ))}
      </table>
    </Layout>
  );
};

export default ListClient;
