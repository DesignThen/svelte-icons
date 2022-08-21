type Pathname = string;

export type FileMetadata = {
	_input: Pathname;
	_output: Pathname;
	_parent: Pathname;
};

export type Task = {
	pathname: Pathname;
	content: string;
};

export type Barrel = Record<Pathname, Task[]>;
