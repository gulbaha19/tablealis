import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";
import { inputStyle } from "../pages/FormPage";
import { getFieldState } from "../utils/getFieldState";

export const Address = () => {
  const { control } = useFormContext();
  return (
    <>
      <h3>Адрес</h3>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="demo-simple-select-label">Город</InputLabel>
        <Controller
          name="region"
          control={control}
          render={({ field }) => (
            <tr>
              <td>* Регион :</td>
              <td>
                <Select
                  id="demo-customized-select-native"
                  size="small"
                  labelId="demo-simple-select-label"
                  label=""
                  {...field}>
                  <MenuItem value={10}>Алматинская область</MenuItem>
                  <MenuItem value={20}>Акмолинская область</MenuItem>
                  <MenuItem value={30}>Алматы</MenuItem>
                </Select>
              </td>
            </tr>
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Controller
          name="area"
          control={control}
          rules={{
            required: "Поле обязательное",
            validate: (value) => {
              if (value.length > 3) {
                return true;
              } else {
                return "Not Valid";
              }
            },
          }}
          render={({ field, fieldState, formState }) => (
            <tr>
              <td>* Населенный пункт / Район:</td>
              <td>
                <TextField
                  inputProps={{ style: inputStyle }}
                  id="outlined-basic"
                  label=""
                  placeholder="Введите"
                  {...getFieldState({ fieldState, formState })}
                  variant="outlined"
                  {...field}
                />
              </td>
            </tr>
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Controller
          name="address"
          control={control}
          rules={{
            required: "Поле обязательное",
            validate: (value) => {
              if (value.length > 3) {
                return true;
              } else {
                return "Not Valid";
              }
            },
          }}
          render={({ field, fieldState, formState }) => (
            <tr>
              <td>* Юридический адрес:</td>
              <td>
                <TextField
                  inputProps={{ style: inputStyle }}
                  id="outlined-basic"
                  label=""
                  placeholder="Введите"
                  {...getFieldState({ fieldState, formState })}
                  variant="outlined"
                  {...field}
                />
              </td>
            </tr>
          )}
        />
      </FormControl>
    </>
  );
};
