import { Link } from "gatsby-link";
import React, { useState, useEffect } from "react";
import api from "../../api";
import Layout from "../../components/layout";
import LoadingRing from "../../components/loadingRing";

const ListClient = () => {
  const [data, setData] = useState<ClientModel[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      var response = await api.get(`/api/client`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
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
          <th></th>
        </tr>
        {loading ? (
          <tr>
            <LoadingRing />
          </tr>
        ) : (
          data.map((c) => (
            <tr>
              <td>{c.name}</td>
              <td>{c.technology}</td>
              <td>{c.projectName}</td>
              <td>
                <Link to={`/SaveClient?id=${c.id}`}>
                  <i className="bx bxs-edit text-xl"></i>
                </Link>
              </td>
            </tr>
          ))
        )}
      </table>
    </Layout>
  );
};

export default ListClient;
