import React, { useState, useEffect } from "react";
import { Link } from "gatsby-link";
import Layout from "../../components/layout";
import api from "../../api";
import { navigate } from "gatsby-link";
import LoadingRing from "../../components/loadingRing";

const SaveClient = () => {
  const [id, setId] = useState<string>();
  const [name, setName] = useState<string>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const id =
      typeof window !== "undefined"
        ? new URLSearchParams(location.search).get("id")
        : null;
    if (id) {
      setId(id);
      getData(id);
    } else {
      setLoading(false);
    }
  }, [location.search]);
  const getData = async (id: string) => {
    try {
      var response = await api.get(`/api/project/${id}`);
      setName(response.data.name);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const saveProject = async () => {
    try {
      const response = id
        ? await api.put(`/api/project/${id}`, {
            name,
          })
        : await api.post("/api/project", {
            name,
          });
      if (response.data.isSuccess) {
        alert("Projeto salvo com sucesso!");
        navigate("/");
      } else {
        alert(response.data.errors[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <Link to="/" className="semi-bold mb-32">
        {"<"} Voltar
      </Link>
      <h1>Novo Projeto</h1>
      {loading ? (
        <LoadingRing />
      ) : (
        <div className="form">
          <label>Nome</label>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button disabled={!name} onClick={() => saveProject()}>
            Salvar
          </button>
        </div>
      )}
    </Layout>
  );
};

export default SaveClient;
