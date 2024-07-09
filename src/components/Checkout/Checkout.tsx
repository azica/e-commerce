import { FormEvent, useState } from "react"
import { Typography } from "@mui/material"

import { Form } from "components/Form"

import { creditCard, shippingForm } from "assets/data/form";

import { Wrapper, ColumnWrap, InputsContainer } from "./styles";
import { InputsSpreader } from "components/FormElements/InputsSpreader";

interface ShippingForm {
    title: string;
    values: InputData[]
}

export const Checkout = () => {
    const [shippingForms, setShippingForms] = useState<ShippingForm[]>(shippingForm);
    const [payment, setPayment] = useState("creditCard");

    const changeHandler: InputOnChange = (newVal) => {
        const newData = shippingForms.map((item) => {
            const newInputProps = item.values.map((item) =>
                newVal.field === item.field ? { ...item, value: newVal.value, invalid: false } : item,
            );
            return {
                title: item.title,
                values: [...newInputProps],
            }
        })
        setShippingForms(newData)

        console.log(newData)
    }

    const submitHandler = (event: FormEvent<HTMLDivElement>) => {
        console.log(event.target)
    }

    return (
        <Wrapper>
            <Form
                afterSubmit={submitHandler}
                mainButton={{
                    preloader: undefined,
                    disabled: false,
                    fullWidth: true,
                    name: "Place Order"
                }}>

                <>
                    {shippingForms.map((item: ShippingForm) => (
                        <ColumnWrap className="bigPadding" key={item.title}>
                            <Typography color="black" variant="heading7">
                                {item.title}
                            </Typography>

                            <InputsContainer>
                                {item.values.map(({ id, ...other }, index) => (
                                    <InputsSpreader
                                        key={id}
                                        id={id}
                                        onChange={changeHandler}
                                        {...other} />
                                ))}
                            </InputsContainer>
                            {
                                item.title === "Payment method" ?
                                    <InputsContainer>
                                        {payment === "creditCard" ?
                                            <>{
                                                creditCard.map(({ id, ...other }, index) => (
                                                    <InputsSpreader
                                                        key={id}
                                                        id={id}
                                                        onChange={changeHandler}
                                                        {...other} />
                                                ))}
                                            </>
                                            : null
                                        }
                                    </InputsContainer>
                                    : null

                            }
                        </ColumnWrap>
                    ))}
                </>
            </Form>

            <ColumnWrap>
                <Typography color="black.900" variant="h6">
                    Order summary
                </Typography>
            </ColumnWrap>

        </Wrapper>
    )
}
