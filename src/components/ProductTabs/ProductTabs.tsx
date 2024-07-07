import { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Reviews } from "components/Reviews";
import { tabsMenu } from "assets/data/mockdata";

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

export const ProductTabs = ({ title, reviews }: Model.Product) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
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
                {tabsMenu.map((tab) => (
                    <Tab key={tab.id} label={tab.label} {...a11yProps(tab.id)} />
                ))}
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <Reviews reviews={reviews} title={title} />
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

