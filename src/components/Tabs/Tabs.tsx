import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { CheckIcon } from "assets/icons";

import { Container, OneTab, Wrapper } from "./styles";

export const Tabs = ({ children, tabs, setActiveTab, activeTab, commonPath, circled, setIsLoading }: Tabs) => {
  const { pathname } = useLocation();

  const defineActive = (path: string) => {
    const splittedPath = path.split("/");
    const lastItem = splittedPath.at(-1);
    const tab = tabs.filter(({ param }) => lastItem === param);
    const activeTab = tab.length ? tab[0] : tabs[0];
    setActiveTab(activeTab.param);
    return activeTab;
  };

  useEffect(() => {
    setIsLoading(true);

    const timeoutId = setTimeout(() => {
      const element = defineActive(pathname);
      setActiveTab(element.param);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <Wrapper>
      <Container>
        {tabs.map(({ id, title, param, state }) => {
          const classes = `${activeTab === param ? "tabs-active" : ""} ${state?.isChecked ? "checked" : ""}`;

          return state?.isDisabled ? (
            <OneTab className={classes} key={id}>
              {circled ? <span>{state?.isChecked ? <CheckIcon /> : id}</span> : null}
              <Typography variant="body2" fontFamily="fontFamily.interSemiBold">
                {title}
              </Typography>
            </OneTab>
          ) : (
            <NavLink key={id} to={`${commonPath}/${param}`} state={{ preloader: false }}>
              <OneTab className={classes}>
                {circled ? <span>{state?.isChecked ? <CheckIcon /> : id}</span> : null}
                <Typography variant="body2" fontFamily="fontFamily.interSemiBold">
                  {title}
                </Typography>
              </OneTab>
            </NavLink>
          );
        })}
      </Container>
      {children}
    </Wrapper>
  );
};
