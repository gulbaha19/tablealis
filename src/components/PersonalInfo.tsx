import { FormControl, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { getFieldState } from "../utils/getFieldState";
import InputMask from "react-input-mask";
import validator from "validator";
import { inputStyle } from "../pages/FormPage";

export const PersonalInfo = () => {
  const { control } = useFormContext();
  return (
    <>
      <h3>Данные представителя</h3>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Controller
          name="secondName"
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
              <td>* Фамилия:</td>
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
          name="firstName"
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
              <td>* Имя:</td>
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
          name="fathersName"
          control={control}
          rules={{
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
              <td>
                Отчество <span style={{ color: "lightgrey" }}>(необязательный)</span>:
              </td>
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
          name="email"
          control={control}
          rules={{
            required: "Поле обязательное",
            validate: (value) => {
              if (validator.isEmail(value)) {
                return true;
              } else if (value.length === 0) {
                return true;
              } else {
                return "invalid email";
              }
            },
          }}
          render={({ field, formState, fieldState }) => (
            <tr>
              <td>* Эл. почта:</td>
              <td>
                <TextField
                  inputProps={{ style: inputStyle }}
                  id="outlined-basic"
                  label=""
                  placeholder="Введите"
                  variant="outlined"
                  {...getFieldState({ fieldState, formState })}
                  {...field}
                />
              </td>
            </tr>
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }} required>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Поле обязательное",
          }}
          render={({ field, formState, fieldState }) => (
            <tr>
              <td>* Номер:</td>
              <td>
                <InputMask
                  mask="+7(999)999-99-99"
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
          name="position"
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
              <td>* Должность:</td>
              <td>
                <TextField
                  inputProps={{ style: inputStyle }}
                  id="outlined-basic"
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
          name="responsobilities"
          control={control}
          rules={{
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
              <td>
                Основание полномочий <span style={{ color: "lightgrey" }}>(необязательный)</span>:
              </td>
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
