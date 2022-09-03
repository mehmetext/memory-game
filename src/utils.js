import { nanoid } from "@reduxjs/toolkit";

export const items = [
	"angular2",
	"vue",
	"react",
	"grunt",
	"phantomjs",
	"ember",
	"babel",
	"ionic",
	"gulp",
	"meteor",
	"yeoman",
	"yarn",
	"nodejs",
	"bower",
	"browserify",
];

export const shuffle = (array) => array.sort(() => Math.random() - 0.5);

export const shuffled = () => {
	let items2 = [...items, ...items];

	items2 = items2.map((item) => {
		return { id: nanoid(), name: item, opened: false, true: false };
	});

	shuffle(items2);
	return items2;
};
