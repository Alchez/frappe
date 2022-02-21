// import blocks
import Header from "./header";
import Paragraph from "./paragraph";
import Card from "./card";
import NumberCard from "./number_card";
import Chart from "./chart";
import Shortcut from "./shortcut";
import Spacer from "./spacer";
import Onboarding from "./onboarding";

// import tunes
import HeaderSize from "./header_size";

frappe.provide("frappe.workspace_block");

frappe.workspace_block.blocks = {
	header: Header,
	paragraph: Paragraph,
	card: Card,
	number_card: NumberCard,
	chart: Chart,
	shortcut: Shortcut,
	spacer: Spacer,
	onboarding: Onboarding,
};

frappe.workspace_block.tunes = {
	header_size: HeaderSize,
};