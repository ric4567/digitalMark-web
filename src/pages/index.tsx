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
              </td>
            </tr>
          ))
        )}
      </table>
    </Layout>
  );
};

export default IndexPage;
