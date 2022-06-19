import { FormControl, FormControlLabel, Radio, RadioGroup, styled, TextField } from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";
import { getFieldState } from "../utils/getFieldState";
import InputMask from "react-input-mask";
import { inputStyle } from "../pages/FormPage";
const Box = styled("div")`
  display: "flex";

  div {
    display: inline-block;
    margin-left: 10px;
  }
`;

export const OrganizationInfo = () => {
  const { control } = useFormContext();
  return (
    <>
      <h3>Данные об организации</h3>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <Controller
          name="status"
          control={control}
          rules={{
            required: "Поле обязательное",
          }}
          render={({ field, fieldState, formState }) => (
            <Box>
              <div>* Организационно-правовая форма:</div>
              <div>
                <RadioGroup
                  {...field}
                  {...getFieldState({ fieldState, formState })}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group">
                  <FormControlLabel value="АО" control={<Radio />} label="АО" />
                  <FormControlLabel value="ТОО" control={<Radio />} label="ТОО" />
                  <FormControlLabel value="ИП" control={<Radio />} label="ИП" />
                </RadioGroup>
              </div>
            </Box>
          )}
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <Controller
          name="iin"
          control={control}
          rules={{
            required: "Поле обязательное",
            validate: (value) => {
              if (value) {
                return true;
              } else {
                return "Not Valid";
              }
            },
          }}
          render={({ field, fieldState, formState }) => (
            <Box>
              <div> * БИН /ИИН:</div>
              <div>
                <InputMask
                  mask="9999-9999-9999"
                  disabled={false}
                  {...getFieldState({ fieldState, formState })}
                  {...field}>
                  <TextField
                    inputProps={{ style: inputStyle }}
                    id="outlined-basic"
                    label=""
                    placeholder="Введите"
                  />
                </InputMask>
              </div>
            </Box>
          )}
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 1 }}>
        <Controller
          name="fullNameOfOrganization"
          control={control}
          rules={{
            required: "Поле обязательное",
            validate: (value) => {
              if (value.length < 200) {
                return true;
              } else {
                return "Not Valid";
              }
            },
          }}
          render={({ field, fieldState, formState }) => (
            <Box>
              <div> * Полное наименование:</div>

              <TextField
                inputProps={{ style: inputStyle }}
                id="outlined-basic"
                label=""
                placeholder="Введите"
                {...getFieldState({ fieldState, formState })}
                variant="outlined"
                {...field}
              />
            </Box>
          )}
        />
      </FormControl>
    </>
  );
};
