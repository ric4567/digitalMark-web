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
  const deleteClient = async (id: string) => {
    try {
      const response = await api.delete(`/api/client/${id}`);
      if (response.data.isSuccess) {
        alert("Cliente excluído com sucesso!");
        await getData();
      } else {
        alert(response.data.notifications[0].message);
      }
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
          <th></th>
        </tr>
        {loading ? (
          <tr>
            <LoadingRing />
          </tr>
        ) : data.length === 0 ? (
          <tr>
            <div style={{ position: "absolute", padding: "16px" }}>
              Nenhum cliente.
            </div>
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
                <i
                  onClick={() => deleteClient(c.id)}
                  className="bx bx-trash ml-3 text-xl cursor-pointer"
                ></i>
              </td>
            </tr>
          ))
        )}
      </table>
    </Layout>
  );
};

export default ListClient;
