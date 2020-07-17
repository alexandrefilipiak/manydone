import React, { useState, useEffect } from "react";
import { Done } from "../../models";
import { DataStore } from "@aws-amplify/datastore";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const initialState = {
  name: "",
  description: "",
  doneDate: "",
  userId: "",
};

function Home() {
  const [formState, setFormState] = useState(initialState);
  const [dones, setDones] = useState<Done[]>([]);

  useEffect(() => {
    fetchDones();
    const subscription = DataStore.observe(Done).subscribe(() => fetchDones());
  }, []);

  async function fetchDones() {
    const dones = await DataStore.query(Done);
    setDones(dones);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  async function createDone() {
    if (!formState.name) return;
    await DataStore.save(new Done({ ...formState }));
    setFormState(initialState);
  }

  return (
    <Container>
      <h1>Create a new Glory Stone:</h1>
      <input
        onChange={onChange}
        name="name"
        placeholder="name"
        value={formState.name}
        autoComplete="off"
      />
      <Button onClick={createDone}>Create Done</Button>
      <h1>Your Glory Stones:</h1>
      <table>
        <tbody>
          {dones.map((done) => (
            <tr key={done.id}>
              <td>{done.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default Home;
