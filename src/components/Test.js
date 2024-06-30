import { Wrapper } from "./styles";
const arr = [
  { name: "width", value: 10 },
  { name: "height", value: 20 },
];
const Test = () => {
  function f(arr) {
    const map = {};
    arr.forEach((element) => {
      map[element.name] = element.value;
    });

    return map;
  }

  console.log(f(arr));
  return (
    <Wrapper>
      <span className="red">red</span>
    </Wrapper>
  );
};

export default Test;
