import { useState } from "react";
import { Box, InputBase, Button, styled } from "@mui/material";
import { getWeather } from "../services/api";
import { useTranslation } from "react-i18next";

const Container = styled(Box)({
  backgroundColor: "#445A6F",
  padding: 10,
});

const Input = styled(InputBase)({
  color: "#FFF",
  marginLeft: 20,
  fontSize: 18,
});

const GetButton = styled(Button)({
  background: "#e67e22",
  marginLeft: 220,
  fontSize: 18,
});

const Form = ({ setResult }) => {
  
  const [data, setData] = useState({
    city: "",
    country: "",
  });

  const { t } = useTranslation();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getWeatherInfo = async () => {
    let response = await getWeather(data.city, data.country);
    setResult(response);
  };

  return (
    <Container>
      <Input placeholder={t("placeholder-text")} name="city" onChange={(e) => handleChange(e)} />
      {/* <Input
        placeholder="Country"
        name="country"
        onChange={(e) => handleChange(e)}
      /> */}
      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        {t("button-text")}
      </GetButton>
    </Container>
  );
};

export default Form;
