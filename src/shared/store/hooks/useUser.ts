import { useMemo } from "react";
import { useSelector } from "react-redux";

import { selectUser, selectUserAvatar, selectUserId } from "shared/store/slices/userSlice";

export const useUser = () => {
  const { user } = useSelector(selectUser);
  return useMemo(() => user, [user]);
};

export const useUserAvatar = () => {
  const avatar = useSelector(selectUserAvatar);
  return useMemo(() => avatar, [avatar]);
};

export const useUserId = () => {
  const id = useSelector(selectUserId);
  return useMemo(() => id, [id]);
};
