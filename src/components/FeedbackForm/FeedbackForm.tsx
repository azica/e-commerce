
import { useState } from "react";
import { Form } from "./styles";
import { Button, Input } from "components/FormElements";

export const FeedbackForm = () => {
    const [value, setValue] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const submitHandle = () => {
        setIsLoading(true);
    };

    const valueChange: InputOnChange = (newVal) => {
        setValue(String(newVal.value));
    };

    return (
        <Form
            onSubmit={submitHandle}
        >
            <Input
                value={value}
                type="email"
                field="email"
                placeholder=""
                id={0}
                onChange={valueChange}
                endAdornment={
                    <Button
                        variant="contained"
                        size="small">
                        Write Review
                    </Button>
                }
            />
        </Form>
    )
}

