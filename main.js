const hexInput = document.querySelector(".hex");
const redInput = document.querySelector(".red");
const greenInput = document.querySelector(".green");
const blueInput = document.querySelector(".blue");
const hexBtn = document.querySelector(".hex-btn");
const rgbBtn = document.querySelector(".rgb-btn");
const display = document.querySelector(".display");

const hexToDecimal = hex => parseInt(hex, 16);
const decimalToHex = decimal => (decimal === "" || decimal < 0 || decimal > 255) ? "00" : parseInt(decimal, 10).toString(16);

const hexToRGB = (hex = '000000') => {
	if (hex.length === 6) {
		redInput.value = hexToDecimal(hex.slice(0, 2));
		greenInput.value = hexToDecimal(hex.slice(2, 4));
		blueInput.value = hexToDecimal(hex.slice(4, 6));
		display.style.backgroundColor = "#" + hex;
	}
	else if (hex.length === 3) {
		redInput.value = hexToDecimal(hex[0] + hex[0]);
		greenInput.value = hexToDecimal(hex[1] + hex[1]);
		blueInput.value = hexToDecimal(hex[2] + hex[2]);
		display.style.backgroundColor = "#" + hex;
	}
	else if (hex.length > 6) {
		const shortendHex = hex.slice(0, 6);
		hexInput.value = shortendHex;
		hexToRGB(shortendHex);
	}
	else {
		for (let i = 0; i < 6 - hex.length; i++) hex += "0";
		hexInput.value = hex;
		hexToRGB(hex);
	}
};
const RGBToHex = (red = 0, green = 0, blue = 0) => {
	const rgb = [decimalToHex(red), decimalToHex(green), decimalToHex(blue)].map(colour => {
		if (colour.length === 1) return "0" + colour;
		else return colour;
	}).join("");
	hexInput.value = rgb;
	display.style.backgroundColor = "#" + rgb;
};

hexBtn.onclick = () => hexToRGB(hexInput.value);
rgbBtn.onclick = () => RGBToHex(redInput.value, greenInput.value, blueInput.value);
window.onload = () => hexToRGB(hexInput.value);
