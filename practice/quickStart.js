// creating a component MyButton

function MyButton(){
	return (
		<button>I'm a button </button>
	);
}

// now nessting MyButton to another components

export default function MyApp(){
	return (
		<div>
			<h1>welcome to my app</h1>
			<MyButton />
		</div>
	)
}

// Displaying data

return (
	<h1>
		{user.name}
	</h1>
)


// conditional rendering

let content;
if (isLoggedIn) {
	content = <AdminPanel />;
}else {
	content = <LogingForm>;
}

return (
	<div>
	{content}
	</div>
)

// using conditinal Operator

return (
	<div>
		{LoggedIn ? (
		<AddminPanel />
		): (
		<loginForm />
		)}
	<div>
);

//rendering list 

