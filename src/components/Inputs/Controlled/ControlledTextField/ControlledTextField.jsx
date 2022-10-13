import { Controller } from "react-hook-form";

import { TextField } from "@mui/material";

const ControlledTextField = ({
  name,
  label,
  type = "text",
  shouldUnregister,
  defaultValue,
  disabled,
  showSuccess,
  fullWidth = true,
}) => {
  return (
    <Controller
      name={name}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value }, fieldState }) => {
        const isSuccess =
          showSuccess &&
          !!(fieldState.isTouched && !fieldState.error && value?.length);
        return (
          <TextField
            label={label}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            error={fieldState.error?.message}
            success={isSuccess}
            disabled={disabled}
            fullWidth={fullWidth}
          />
        );
      }}
    />
  );
};

export default ControlledTextField;
