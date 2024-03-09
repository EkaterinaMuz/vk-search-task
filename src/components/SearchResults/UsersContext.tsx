import { UsersService } from '../../api/UsersService';
import { IUser, IUsersContext } from '../../types/Users';
import { Status } from '../../types/Status';
import { createContext, useState } from "react";

interface IUsersProviderProps {
	children: React.ReactNode
}

const initialState = {
	users: [],
	fetchAllUsers: () => { },
	status: 'idle',
	errors: null
}

export const UsersContext = createContext<IUsersContext>(initialState);

export function UsersProvider({ children }: IUsersProviderProps) {

	const [users, setUsers] = useState<IUser[]>([]);
	const [status, setStatus] = useState<Status>('idle');
	const [errors, setErrors] = useState<string | null>(null);

	const fetchAllUsers = async (value?: string) => {
		setStatus('loading');
		try {
			const allUsers = await UsersService.getAllUsers(value);
			setUsers(allUsers);
			setErrors(null);
			setStatus('received');
		} catch (error) {
			if (error instanceof Error) {
				setErrors(error.message)
				setStatus('rejected');
			}
		}
	}
	return (
		<UsersContext.Provider value={{ users, fetchAllUsers, status, errors }}>
			{children}
		</UsersContext.Provider>
	);

}