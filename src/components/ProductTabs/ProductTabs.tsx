import { SyntheticEvent, useState } from "react";
import { Wrapper } from "./styles"
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Reviews } from "components/Reviews";

const tabsMenu = [
    { id: 1, label: "Reviews" },
    { id: 2, label: "Additional Info" },
    { id: 3, label: "Questions" },
];

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            minHeight={400}
        >
            {value === index && <>{children}</>}
        </Box>
    );
}

export const ProductTabs = ({ reviews }: Model.Product) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        console.log(newValue)
        setValue(newValue);
    };

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Box display="flex" flexDirection="column" gap={6} py={5}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                {tabsMenu.map((tab, index) => (
                    <Tab key={tab.id} label={tab.label} {...a11yProps(tab.id)} />
                ))}
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <Reviews reviews={reviews} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Typography variant="h6" color="black">Additional Info</Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Typography variant="h6" color="black">Questions</Typography>
            </CustomTabPanel>
        </Box>
    )
}
