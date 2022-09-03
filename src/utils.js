import { nanoid } from "@reduxjs/toolkit";

export const frameworks = [
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

export const items = () => {
	let items = [...frameworks, ...frameworks];

	items = items.map((item) => {
		return { id: nanoid(), name: item, opened: false, true: false };
	});

	shuffle(items);
	return items;
};
