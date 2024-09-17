import { useEffect, useState } from "react";
import { IUser } from "./types/IUsers";

export const Users = () => {
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const getAllUSers = async () => {
    const response =await fetch(`http://localhost:3000/users`);
    if(response.ok){
        const users = await response.json();
        setUsersData(users)
    }
  };
  useEffect(() => {
    getAllUSers();
  }, []);
  return <>iuyt</>;
};
