/**
 * Parse a common 13-digit variable-measure scale label:
 * prefix (20–29), 5-digit item PLU, 5-digit weight (0.001 kg units), check digit.
 */
export function parseEmbeddedWeightBarcode(value) {
	const barcode = String(value || "").trim();
	if (!/^\d{13}$/.test(barcode)) return null;

	const prefix = Number(barcode.slice(0, 2));
	if (prefix < 20 || prefix > 29) return null;

	const weightedSum = [...barcode.slice(0, 12)].reduce(
		(sum, digit, index) => sum + Number(digit) * (index % 2 === 0 ? 1 : 3),
		0
	);
	if ((10 - (weightedSum % 10)) % 10 !== Number(barcode[12])) return null;

	const weightUnits = Number(barcode.slice(7, 12));
	if (!weightUnits) return null;

	return {
		itemBarcode: barcode.slice(2, 7),
		quantity: weightUnits / 1000,
	};
}
