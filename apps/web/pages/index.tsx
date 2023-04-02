import { Button } from "ui";
import { NearProvider, useNearContext } from "near-context";
export default function Web() {
	return (
		<div>
			<NearProvider>
				<h1>Web</h1>
				<TestAccountId />

				<Button />
			</NearProvider>
		</div>
	);
}

function TestAccountId() {
	const { accountId, modal } = useNearContext();
	return (
		<div>
			{accountId ? accountId : "Not Logged In"}
			<button onClick={() => modal?.show()}>Login</button>
		</div>
	);
}
