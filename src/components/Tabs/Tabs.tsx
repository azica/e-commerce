import { useState, useEffect, ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Container, OneTab, Wrapper } from "./styles";
import { Typography } from "@mui/material";
import { CheckedIcon, CheckIcon } from "assets/icons";

export const Tabs = ({
	children,
	tabs,
	changeParamUrl,
	commonPath,
	setIsLoading,
	circled,
	activeTab
}: Tabs) => {
	const { pathname } = useLocation();
	const [active, setActive] = useState<any>(1);

	const defineActive = (path: string) => {
		let splittedPath = path.split("/");
		const lastItem = splittedPath.at(-1);
		const tab = tabs.filter(({ param }) => lastItem === param);
		const activeTab = tab.length ? tab[0] : tabs[0];
		setActive(activeTab.id);
		return activeTab;
	};

	const tabToggle = (path: string) => {
		const element = defineActive(path);
		changeParamUrl(element.param);
	};

	useEffect(() => {
		if (tabs.length > 0) {
			defineActive(pathname);
		}
	}, [tabs]);

	useEffect(() => {
		if (tabs.length > 0) {
			setIsLoading(true);
			tabToggle(pathname);
			setIsLoading(false);
		}
	}, [pathname]);

	return (
		<Wrapper>
			<Container>
				{tabs.map(({ id, title, param }, index) => {
					let isChecked = index < tabs.findIndex(tab => tab.param === activeTab);
					let classes = `${active === id ? "tabs-active" : ""} ${isChecked ? "checked" : ""}`;

					return (
						<NavLink
							key={id}
							to={`${commonPath}/${param}`}
							state={{ preloader: false, commonPath }}>
							<OneTab className={classes}>
								{circled ? <span>
									{isChecked ? <CheckIcon /> : id}
								</span> : null}
								<Typography variant="body2" fontFamily="fontFamily.interSemiBold">{title}</Typography>
							</OneTab>
						</NavLink>
					);
				})}
			</Container>
			{children}
		</Wrapper>
	);
};
