import { Link } from "gatsby-link";
import React, { useState, useEffect } from "react";
import api from "../api";
import Layout from "../components/layout";
import LoadingRing from "../components/loadingRing";

const IndexPage = () => {
  const [data, setData] = useState<ProjectModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      var response = await api.get(`/api/project`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const deleteProject = async (id: string) => {
    try {
      const response = await api.delete(`/api/project/${id}`);
      if (response.data.isSuccess) {
        alert("Projeto excluído com sucesso!");
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
      <Link to="/SaveProject">
        <button>Novo projeto</button>
      </Link>
      <table>
        <tr>
          <th>Nome</th>
          <th>Cliente</th>
          <th>Tecnologia</th>
          <th></th>
        </tr>
        {loading ? (
          <tr>
            <LoadingRing />
          </tr>
        ) : data.length === 0 ? (
          <tr>
            <div style={{ position: "absolute", padding: "16px" }}>
              Nenhum projeto.
            </div>
          </tr>
        ) : (
          data.map((c) => (
            <tr>
              <td>{c.name}</td>
              <td>{c.clientName}</td>
              <td>{c.clientTechnology}</td>
              <td>
                <Link to={`/SaveProject?id=${c.id}`}>
                  <i className="bx bxs-edit text-xl"></i>
                </Link>
                <i
                  onClick={() => deleteProject(c.id)}
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

export default IndexPage;
