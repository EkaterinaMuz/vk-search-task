import { Status } from "./Status"

type addressType = {
	city: string
  }

export interface IUser {
	id: number,
	firstName: string,
	lastName: string,
	image: string,
	address: addressType
  }

export interface IUsersContext {
	users: IUser[], 
	fetchAllUsers: (value?: string) => void,
	status: Status,
	errors: string | null
}