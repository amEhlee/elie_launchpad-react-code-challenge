import React, { useState } from "react";
import {
  Card,
  InputLabel,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";

export default function PostalLookupPage() {
  const [postalCode, setPostalCode] = useState("");
  const [data, setData] = useState({});

  function handlePostalLookup() {
    const postalLookupApi = `https://api.zippopotam.us/us/${postalCode}`;

    axios
      .get(postalLookupApi)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="mt-20 mx-8 text-center p-4">
      <Card className="flex flex-col gap-4 mx-4 p-4">
        <h1 className="my-8 mx-4">Postal Lookup</h1>
        <p>Warning this may only work with US postal codes</p>
        <FormControl>
          <div className="flex justify-center gap-4">
            <TextField
              label="Postal Code"
              onChange={(e) => {
                setPostalCode(e.target.value);
              }}
            />

            <Button onClick={handlePostalLookup} variant="outlined">
              Search
            </Button>
          </div>
        </FormControl>
      </Card>
    </div>
  );
}
