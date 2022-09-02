import classNames from "classnames";
import { useState } from "react";

export default function Item({ item }) {
	const [opened, setOpened] = useState(false);

	const handleClick = () => {
		setOpened(!opened);
	};

	return (
		<div
			onClick={handleClick}
			className={classNames({ card: true, opened: opened })}
		>
			<div className="card-inner front">?</div>
			<div className="card-inner back">
				<img
					src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${item.name}.png`}
					alt={item.name}
				/>
			</div>
		</div>
	);
}
