
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { RadioGroup } from "../RadioGroup";
import { Select } from "../Select";

export const InputsSpreader = ({
	type, value, options, onChange, ...other
}: Input) => {

	let componet;

	switch (type) {
		// case "date":
		// 	componet = (
		// 		<DatePicker {...other} type={type} value={value} onChange={onChange} />
		// 	);
		// 	break;
		case "select":
			componet = (
				<Select
					{...other}
					options={options}
					value={value}
					onChange={onChange}
				/>
			);
			break;
		case "checkbox":
			componet = (
				<Checkbox
					{...other}
					// @ts-ignore
					checked={Boolean(value) ? value : false}
					onChange={onChange}
				/>
			);
			break;
		case "radio":
			componet = (
				<RadioGroup
					{...other}
					// @ts-ignore
					list={options}
					// @ts-ignore
					defaultValue={value}
					onChange={onChange}
					bordered
				/>
			);
			break;
		default:
			componet = (
				<Input {...other} type={type} value={value} onChange={onChange} />
			);
			break;
	}

	return <>{componet}</>;
};
