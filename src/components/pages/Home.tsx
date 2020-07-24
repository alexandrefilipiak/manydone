import React, { useState, useEffect } from "react";
import { Done } from "../../models";
import { DataStore } from "@aws-amplify/datastore";
import { Storage } from "@aws-amplify/storage";
import { Auth, CognitoUser } from "@aws-amplify/auth";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { v4 as uuid } from "uuid";
import _ from "lodash";

interface DoneFormState {
  name: string;
  description: string;
  doneDate: string;
  image: File | null;
  userId?: string;
}

interface DoneDisplay {
  id: string;
  name: string;
  description?: string;
  doneDate?: string;
  imageUrl: string;
  userId?: string;
}

const initialState: DoneFormState = {
  name: "",
  description: "",
  doneDate: "",
  image: null, //new File(["foo"], "foo.txt", { type: "text/plain" }),
  userId: "",
};

interface Props {
  user: {
    username: string;
  } | null;
}

function Home(props: Props) {
  const [formState, setFormState] = useState(initialState);
  const [dones, setDones] = useState<Done[]>([]);
  const [username, setUsername] = useState("");
  const [donesDisplay, setDonesDisplay] = useState<DoneDisplay[]>([]);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUsername(user.username);
        setFormState({ ...formState, userId: user.username });
        console.log("the user id:", user);
      })
      .catch(() => console.log("Not signed in"));

    fetchDones();
    const subscription = DataStore.observe(Done).subscribe(() => fetchDones());
  }, []);

  async function fetchDones() {
    const dones = await DataStore.query(Done);
    setDones(dones);
    console.log("dones=", dones);
    setSignedDonesDisplay(dones);
  }

  async function setSignedDonesDisplay(dones: Done[]) {
    let signedDonesDisplay: DoneDisplay[] = [];
    for (const done of dones) {
      let signedUrl: Object | String;
      if (done.imageKey) {
        //continue;
        signedUrl = await Storage.get(done.imageKey!);
      }
      console.log(done.imageKey);

      signedDonesDisplay.push({
        ..._.omit(done, "createdAt"),
        imageUrl: signedUrl! as string,
      });
    }
    //const signedDonesDisplay = await Promise.all(

    //   })
    //   for (let )
    //   dones.map(async (item) => {
    //     // let signedUrl = "";
    //     // if (item.imageKey) {
    //     //   signedUrl = await Storage.get(item.imageKey);
    //     // }
    //     //item.imageUrl = signedUrl;
    //     return item;
    //   })
    // );
    setDonesDisplay(signedDonesDisplay);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  async function createDone() {
    const { name, image } = formState;
    if (!name || !image || !image.name) return;

    const imageKey =
      uuid() + formState.image!.name.replace(/\s/g, "-").toLowerCase();

    await Storage.put(imageKey, image);

    let doneToSave = _.omit(formState, "image", "imageUrl");
    console.log("doneToSave", doneToSave);
    await DataStore.save(new Done({ imageKey, ...doneToSave }));
    setFormState(initialState);
  }

  async function setImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.currentTarget.files) return; //files[0]
    const file = e.currentTarget.files.item(0);
    setFormState({ ...formState, image: file });
  }
  /*
  async function savePhoto() {
    const { name, image } = formState;
    if (!name || !image.name) return;

    const imageKey =
      uuid() + formState.image.name.replace(/\s/g, "-").toLowerCase();
  }
*/
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
      <input type="file" onChange={setImage} />
      <Button onClick={createDone}>Create Done</Button>
      <h1>Your Glory Stones:</h1>
      {/* <table>
        <tbody> */}
      {donesDisplay.map((done) => (
        <div key={done.id}>
          <img alt={done.imageUrl} src={done.imageUrl}></img>
          <h3>{done.name}</h3>
          <h3>the user id : {done.userId}</h3>
        </div>
      ))}
      {/* </tbody>
      </table> */}
    </Container>
  );
}

export default Home;
