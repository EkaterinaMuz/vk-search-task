import { IUser } from "../types";

const BASE_URL = 'https://dummyjson.com/users/';

export const UsersService = {
	getAllUsers: async (searchValue?: string): Promise<IUser[]>  => {
		const url = searchValue ? `${BASE_URL}/search/?q=${searchValue.trim()}` : BASE_URL;
		const response = await fetch(url);
		const data = await response.json();
		const users: IUser[] = data.users;
		if(searchValue) {
			searchByNameAndAddress(users, searchValue.toLowerCase());
		}
		return data.users;
	}
}


const searchByNameAndAddress = (users: IUser[], searchValue: string): IUser[] => {
	return users.filter(user => 
		user.firstName.toLowerCase().includes(searchValue) || 
		user.lastName.toLowerCase().includes(searchValue) || 
		user.address.city.toLowerCase().includes(searchValue)
	);
}

