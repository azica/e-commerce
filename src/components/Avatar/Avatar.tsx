import { blue } from "styles/colors";

import { Wrapper, Text, Image } from "./styles";

export const Avatar = ({ image, name, color, size }: Avatar) => {
  const splitingName = name && name.split(" ");
  const initials = splitingName
    ? `${splitingName[0].substring(0, 1)}${splitingName[1] ? splitingName[1].substring(0, 1) : ""}`
    : "?";
  return (
    <Wrapper className={name ? undefined : "no-user"} style={{ background: color ? color : blue }} size={size}>
      {image ? (
        <Image>
          <img src={image} alt={"image"} />
        </Image>
      ) : (
        <Text>{initials}</Text>
      )}
    </Wrapper>
  );
};
