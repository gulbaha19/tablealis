import { FormControl, TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { getFieldState } from "../utils/getFieldState";
import InputMask from "react-input-mask";
import { inputStyle } from "../pages/FormPage";

type BankProps = {};
export const Bank: FC<BankProps> = () => {
  const { control } = useFormContext();
  return (
    <>
      <h3>Банк</h3>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Controller
          name="bank"
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
              <td>* Банк:</td>
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
          name="bik"
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
              <td>* БИК:</td>
              <td>
                <InputMask
                  mask="999-999-999"
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
              </td>
            </tr>
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Controller
          name="iik"
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
              <td> * ИИК:</td>
              <td>
                <InputMask
                  mask="aa-999-999-999-999-999-999"
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
              </td>
            </tr>
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Controller
          name="kbe"
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
              <td>* KБE:</td>
              <td>
                <TextField
                  inputProps={{ style: inputStyle }}
                  size="small"
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
