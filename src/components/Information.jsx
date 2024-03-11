import { Box, Typography, styled } from "@mui/material";
import {
  LocationOn,
  SettingsBrightness,
  Opacity,
  Brightness5,
  Brightness6,
  Dehaze,
  Cloud,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Container1 = styled(Box)({
  margin: "30px 60px",
});

const Row = styled(Typography)({
  padding: 10,
  fontSize: 20,
  letterSpacing: 2,
  "& > svg": {
    marginRight: 10,
  },
});

const Error = styled(Typography)({
  color: "red",
  margin: 50,
  padding: 20,
});

const Information = ({ result }) => {

  const { t } = useTranslation();

  return result && Object.keys(result).length > 0 ? (
    <Container1>
      <Row>
        <LocationOn />
        {t("location-text")}: {result.name}, {result.sys.country}
      </Row>
      <Row>
        <SettingsBrightness />
        {t("temperature-text")}: {result.main.temp}°C
      </Row>
      <Row>
        <Opacity />
        {t("humidity-text")}: {result.main.humidity}%
      </Row>
      <Row>
        <Brightness5 />
        {t("sunrise-text")}: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Brightness6 />
        {t("sunset-text")}: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Dehaze />
        {t("condition-text")}: {result.weather[0].main}
      </Row>
      <Row>
        <Cloud />
        {t("clouds-text")}: {result.clouds.all}%
      </Row>
    </Container1>
  ) : (
    <Error>{t("error-text")}</Error>
  );
};

export default Information;
