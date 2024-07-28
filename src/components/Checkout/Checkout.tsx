import { Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

import { shippingForm } from "assets/data/form";
import { CartTotals } from "components/CartTotals";
import { Form } from "components/Form";
import { InputsSpreader } from "components/FormElements/InputsSpreader";
import { ProductTable } from "components/ProductTable";
import { getValueFromArray } from "shared/helpers/utils";
import { useActions, useAppSelector, useUser } from "shared/store/hooks";

import { Wrapper, ColumnWrap, InputsContainer } from "./styles";

interface ShippingForm {
  title: string;
  values: InputData[];
}

const creditCardFields = ["cardNumber", "cardExpiredDate", "cardCvcCode"];

export const Checkout = () => {
  const user = useUser();
  const [isValid, setIsValid] = useState(false);
  const [hasBillingAddress, setHasBillingAddress] = useState(false);
  const [shippingForms, setShippingForms] = useState<ShippingForm[]>(shippingForm);
  const { cartList, subtotal, total, shippingCost } = useAppSelector((state) => state.cart);
  const { setCompletionStatus } = useActions();

  useEffect(() => {
    const newInputs = shippingForms.map((el) => ({
      ...el,
      values: el.values.map((input) => {
        if (input.field === "firstName") {
          input.value = user?.firstName || "";
        }
        if (input.field === "lastName") {
          input.value = user?.lastName || "";
        }
        if (input.field === "email") {
          input.value = user?.email || "";
        }
        return input;
      }),
    }));
    setShippingForms(newInputs);
  }, [user, shippingForm]);

  useEffect(() => {
    setCompletionStatus({ step: "checkout", status: isValid });
  }, [isValid]);

  const changeHandler: InputOnChange = (newVal) => {
    const newData: ShippingForm[] = [];

    shippingForms.forEach((item) => {
      const newInputProps = item.values.map((input) => {
        if (newVal.field === "isBillingAddress") {
          setHasBillingAddress(Boolean(newVal.value));
        }

        const shouldBeHidden = creditCardFields.includes(input.field) && newVal.value === "paypal";

        const updatedClassName = shouldBeHidden
          ? `${input.className || ""} hidden`
          : (input.className || "").replace("hidden", "");

        const updatedInput = {
          ...input,
          value: newVal.field === input.field ? newVal.value : input.value,
          className: updatedClassName,
          disabled: Boolean(shouldBeHidden),
        };

        return updatedInput;
      });

      newData.push({
        title: item.title,
        values: [...newInputProps],
      });
    });

    setShippingForms(newData);
  };

  const submitHandler = () => {
    let values = {};
    shippingForms.forEach((el) => {
      values = Object.assign(values, getValueFromArray(el.values));
    });
  };

  return (
    <Wrapper>
      <Form
        afterSubmit={submitHandler}
        noSend
        mainButton={{
          preloader: undefined,
          disabled: false,
          fullWidth: true,
          name: "Place Order",
        }}>
        <>
          {shippingForms.map((item: ShippingForm) => {
            if (item.title === "Billing Address" && !hasBillingAddress) {
              return null;
            }

            return (
              <ColumnWrap className="bigPadding" key={item.title}>
                <Typography color="black" variant="heading7">
                  {item.title}
                </Typography>

                <InputsContainer>
                  {item.values.map((input) => (
                    <Fragment key={input.id}>
                      <InputsSpreader onChange={changeHandler} {...input} />
                      {input.field === "payment" ? <hr /> : null}
                    </Fragment>
                  ))}
                </InputsContainer>
              </ColumnWrap>
            );
          })}
        </>
      </Form>
      <ColumnWrap>
        <Typography color="black.900" variant="h6">
          Order summary
        </Typography>

        <ProductTable products={cartList} smallTable maxHeight={1000} />

        <CartTotals subtotal={subtotal} total={total} shipping={shippingCost === 0 ? "free" : `$${shippingCost}`} />
      </ColumnWrap>
    </Wrapper>
  );
};
