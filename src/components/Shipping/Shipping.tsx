import { shippingButtons } from "assets/data/mockdata";
import { RadioGroup } from "components/FormElements/RadioGroup";
import { useActions, useAppSelector } from "shared/store/hooks";

export const Shipping = () => {
  const { total } = useAppSelector((state) => state.cart);
  const { setShippingCost } = useActions();

  const onChangeHandler: InputOnChange = ({ value }) => {
    if (value === "express") {
      setShippingCost(15);
    } else if (value === "pick-up") {
      setShippingCost(total * 0.21);
    } else {
      setShippingCost(0);
    }
  };

  return (
    <RadioGroup list={shippingButtons} field="shipping" id={0} onChange={onChangeHandler} bordered defaultValue="free" />
  );
};
