import classNames from "classnames";
import { toggleItemDispatch } from "../store/dispatch";
import { useGame } from "../store/game";

export default function Item({ item }) {
	const { disabled } = useGame();

	const handleClick = () => {
		if (!item.true) toggleItemDispatch(item);
	};

	return (
		<div
			onClick={disabled ? null : handleClick}
			className={classNames({
				card: true,
				opened: item.opened,
				true: item.true,
				"cursor-pointer": !disabled && !item.true,
				"cursor-not-allowed": disabled || item.true,
			})}
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
