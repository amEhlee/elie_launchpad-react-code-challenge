import React, { useState, useEffect } from "react";
import {
  Card,
  InputLabel,
  MenuItem,
  FormControl,
  TableCell,
  Table,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";
import Select from "@mui/material/Select";
import axios from "axios";

export default function UniversitiesPage() {
  const [country, setCountry] = React.useState("");
  const [countryList, setCountryList] = useState([]);
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const countryListSource =
      "https://countriesnow.space/api/v0.1/countries/info?returns=none";

    axios
      .get(countryListSource)
      .then((res) => {
        setCountryList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (country !== "") {
      const getUniSource = `http://universities.hipolabs.com/search?country=${country}`;

      axios
        .get(getUniSource)
        .then((res) => {
          setEntities(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [country]);

  return (
    <div className="mt-20 mx-8 text-center ">
      <Card className="mx-4 p-4">
        <h1 className="my-8 mx-4">University Lookup</h1>
        <FormControl fullWidth>
          <InputLabel>Country</InputLabel>
          <Select
            value={country}
            label="country"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          >
            {countryList.map((i) => (
              <MenuItem key={i.name} value={i.name}>
                {i.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Table className="min-w-[800px]">
          <TableHead>
            <TableRow>
              <TableCell align="center">Country</TableCell>
              <TableCell align="center">State / Province</TableCell>
              <TableCell align="center">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entities.map((i) => (
              <TableRow key={i.name}>
                <TableCell align="center">{i.country}</TableCell>
                <TableCell align="center">
                  {i["state-province"] || " None Given "}
                </TableCell>
                <TableCell align="center">{i.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
