import React, { useState, useEffect } from "react";
import { Link } from "gatsby-link";
import Layout from "../../components/layout";
import api from "../../api";
import { navigate } from "gatsby-link";
import LoadingRing from "../../components/loadingRing";

const SaveClient = () => {
  const [id, setId] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [name, setName] = useState<string>();
  const [technology, setTechnology] = useState<string>();
  const [project, setProject] = useState<string>();
  useEffect(() => {
    setLoading(true);
    getProjects();
  }, []);
  useEffect(() => {
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
      var response = await api.get(`/api/client/${id}`);
      setName(response.data.name);
      setTechnology(response.data.technology);
      setProject(response.data.projectId);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const getProjects = async () => {
    try {
      var response = await api.get(`/api/project`);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const saveClient = async () => {
    setLoading(true);
    try {
      const response = id
        ? await api.put(`/api/client/${id}`, {
            name,
            technology,
            projectId: project,
          })
        : await api.post("/api/client", {
            name,
            technology,
            projectId: project,
          });
      if (response.data.isSuccess) {
        alert("Cliente salvo com sucesso!");
        navigate("/ListClient");
      } else {
        alert(response.data.notifications[0].message);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <Layout>
      <Link to="/ListClient" className="semi-bold mb-32">
        {"<"} Voltar
      </Link>
      <h1>Novo Cliente</h1>
      {loading ? (
        <LoadingRing />
      ) : (
        <div className="form">
          <label>Nome</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            value={name}
          />
          <label>Tecnologia</label>
          <input
            onChange={(e) => setTechnology(e.target.value)}
            type="text"
            id="technology"
            name="technology"
            value={technology}
          />
          <label>Projeto</label>
          <select
            name="pets"
            id="pet-select"
            value={project}
            onChange={(e) => {
              console.log(e);
              setProject(e.target.value);
            }}
          >
            <option></option>
            {projects.map((p) => (
              <option value={p.id}>{p.name}</option>
            ))}
          </select>
          <button disabled={!name || !technology || !project} onClick={() => saveClient()}>
            Salvar
          </button>
        </div>
      )}
    </Layout>
  );
};

export default SaveClient;
